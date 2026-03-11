import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Search, ArrowRight, BookOpen } from "lucide-react";
import { Input } from "@/components/ui/input";
import SEOHead from "@/components/SEOHead";
import { allArticles, blogCategories, findLibraryTopic } from "@/data/content";

const Blog = () => {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get("category") || "All";
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState(categoryParam);

  const filtered = allArticles.filter((a) => {
    const matchSearch = a.title.toLowerCase().includes(search.toLowerCase()) || a.excerpt.toLowerCase().includes(search.toLowerCase());
    const matchCat = activeCategory === "All" || a.category === activeCategory;
    return matchSearch && matchCat;
  });

  const activeCatInfo = blogCategories.find((c) => c.name === activeCategory);

  return (
    <div>
      <SEOHead
        title={activeCategory !== "All" ? `${activeCategory} Articles` : "Blog"}
        description={activeCatInfo?.description || "Practical perspectives on investing, personal finance, and building long-term wealth."}
      />

      <div className="container py-16">
        <header className="animate-fade-up">
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <li><Link to="/" className="hover:text-accent">Home</Link></li>
              <li>/</li>
              <li className="text-foreground">Blog</li>
              {activeCategory !== "All" && (
                <>
                  <li>/</li>
                  <li className="text-foreground">{activeCategory}</li>
                </>
              )}
            </ol>
          </nav>
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">Blog</p>
          <h1 className="mt-2 font-display text-4xl text-foreground md:text-5xl">
            {activeCategory !== "All" ? activeCategory : "Articles & Insights"}
          </h1>
          <p className="mt-3 max-w-xl text-muted-foreground">
            {activeCatInfo?.description || "Practical perspectives on investing, personal finance, and building long-term wealth."}
          </p>
        </header>

        {/* Search & Filters */}
        <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="relative max-w-sm flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Search articles..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-9" />
          </div>
          <div className="flex flex-wrap gap-2">
            {["All", ...blogCategories.map((c) => c.name)].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                  activeCategory === cat ? "bg-accent text-accent-foreground" : "bg-secondary text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Category Cards (when All is selected) */}
        {activeCategory === "All" && !search && (
          <section className="mt-10" aria-label="Blog categories">
            <h2 className="mb-4 font-display text-xl text-foreground">Explore by Category</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {blogCategories.map((cat) => (
                <button
                  key={cat.slug}
                  onClick={() => setActiveCategory(cat.name)}
                  className="group rounded-lg border border-border bg-card p-5 text-left transition-all hover:border-accent/30 hover:shadow-md"
                >
                  <h3 className="font-display text-lg text-foreground group-hover:text-accent transition-colors">{cat.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{cat.description}</p>
                  <span className="mt-3 inline-flex items-center text-xs font-medium text-accent">
                    {cat.count} articles <ArrowRight className="ml-1 h-3 w-3" />
                  </span>
                </button>
              ))}
            </div>
          </section>
        )}

        {/* Articles Grid */}
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((article) => (
            <article key={article.slug} className="group flex flex-col rounded-lg border border-border bg-card p-6 transition-all hover:border-accent/30 hover:shadow-md">
              <Link to={`/blog/${article.slug}`} className="flex flex-col flex-1">
                <span className="text-xs font-medium text-accent">{article.category}</span>
                <h3 className="mt-2 font-display text-lg text-foreground group-hover:text-accent transition-colors">{article.title}</h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{article.excerpt}</p>
                <div className="mt-4 flex items-center gap-3 text-xs text-muted-foreground">
                  <time>{article.date}</time>
                  <span>·</span>
                  <span>{article.readTime} read</span>
                </div>
              </Link>
              {/* Related library links */}
              {article.relatedLibraryTopics.length > 0 && (
                <div className="mt-3 border-t border-border pt-3">
                  <p className="mb-1.5 text-xs font-medium text-muted-foreground">Learn more in the Library:</p>
                  <div className="flex flex-wrap gap-1.5">
                    {article.relatedLibraryTopics.slice(0, 2).map((topicSlug) => {
                      const found = findLibraryTopic(topicSlug);
                      if (!found) return null;
                      return (
                        <Link
                          key={topicSlug}
                          to={`/library/${found.category.slug}/${topicSlug}`}
                          className="inline-flex items-center gap-1 rounded-md bg-secondary px-2 py-1 text-xs text-muted-foreground transition-colors hover:text-accent"
                        >
                          <BookOpen className="h-3 w-3" />
                          {found.topic.title}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </article>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="mt-12 text-center text-muted-foreground">No articles found. Try a different search or category.</p>
        )}
      </div>
    </div>
  );
};

export default Blog;
