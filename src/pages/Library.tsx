import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Search, BookOpen, ChevronRight, TrendingUp, Landmark, PiggyBank, BarChart3, Shield, DollarSign, ArrowLeft, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import SEOHead from "@/components/SEOHead";
import { libraryData, findArticle } from "@/data/content";
import type { LibraryCategory, LibraryTopic } from "@/data/content";

const iconMap: Record<string, React.ElementType> = {
  TrendingUp, Landmark, PiggyBank, BarChart3, Shield, DollarSign,
};

const Library = () => {
  const { categorySlug, topicSlug } = useParams<{ categorySlug?: string; topicSlug?: string }>();
  const [search, setSearch] = useState("");

  // Topic detail view
  if (categorySlug && topicSlug) {
    const cat = libraryData.find((c) => c.slug === categorySlug);
    const topic = cat?.topics.find((t) => t.slug === topicSlug);

    if (!cat || !topic) {
      return (
        <div className="container py-20 text-center">
          <h1 className="font-display text-3xl text-foreground">Topic not found</h1>
          <Link to="/library" className="mt-4 inline-block text-accent hover:underline">← Back to library</Link>
        </div>
      );
    }

    return (
      <div>
        <SEOHead title={`${topic.title} — Financial Library`} description={topic.content.slice(0, 155)} />
        <div className="container py-16">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
              <li><Link to="/" className="hover:text-accent">Home</Link></li>
              <li>/</li>
              <li><Link to="/library" className="hover:text-accent">Library</Link></li>
              <li>/</li>
              <li><Link to={`/library/${cat.slug}`} className="hover:text-accent">{cat.name}</Link></li>
              <li>/</li>
              <li className="text-foreground">{topic.title}</li>
            </ol>
          </nav>

          <Link to={`/library/${cat.slug}`} className="mb-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline">
            <ArrowLeft className="h-3.5 w-3.5" /> Back to {cat.name}
          </Link>

          <article className="mt-4 rounded-lg border border-border bg-card p-8">
            <span className="text-xs font-medium text-accent">{cat.name}</span>
            <h1 className="mt-2 font-display text-3xl text-foreground md:text-4xl">{topic.title}</h1>
            <p className="mt-6 leading-relaxed text-muted-foreground">{topic.content}</p>
          </article>

          {/* Related Blog Articles */}
          {topic.relatedArticles.length > 0 && (
            <aside className="mt-8 rounded-lg border border-accent/20 bg-accent/5 p-6">
              <h2 className="font-display text-lg text-foreground">Related Articles</h2>
              <p className="mt-1 text-sm text-muted-foreground">Read more about this topic on the blog.</p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {topic.relatedArticles.map((articleSlug) => {
                  const article = findArticle(articleSlug);
                  if (!article) return null;
                  return (
                    <Link
                      key={articleSlug}
                      to={`/blog/${articleSlug}`}
                      className="flex items-start gap-3 rounded-md border border-border bg-card p-4 transition-all hover:border-accent/30 hover:shadow-sm"
                    >
                      <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      <div>
                        <p className="text-sm font-medium text-foreground">{article.title}</p>
                        <p className="mt-0.5 text-xs text-muted-foreground">{article.category} · {article.readTime}</p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </aside>
          )}

          {/* Other topics in same category */}
          <section className="mt-8">
            <h2 className="font-display text-lg text-foreground">More in {cat.name}</h2>
            <div className="mt-3 space-y-1">
              {cat.topics.filter((t) => t.slug !== topic.slug).map((t) => (
                <Link
                  key={t.slug}
                  to={`/library/${cat.slug}/${t.slug}`}
                  className="flex items-center justify-between rounded-md border border-border bg-card px-4 py-3 text-sm text-foreground transition-colors hover:border-accent/30 hover:shadow-sm"
                >
                  <span className="flex items-center gap-2">
                    <BookOpen className="h-3.5 w-3.5 text-muted-foreground" />
                    {t.title}
                  </span>
                  <ChevronRight className="h-3.5 w-3.5 text-muted-foreground" />
                </Link>
              ))}
            </div>
          </section>
        </div>
      </div>
    );
  }

  // Category view
  if (categorySlug) {
    const cat = libraryData.find((c) => c.slug === categorySlug);
    if (!cat) {
      return (
        <div className="container py-20 text-center">
          <h1 className="font-display text-3xl text-foreground">Category not found</h1>
          <Link to="/library" className="mt-4 inline-block text-accent hover:underline">← Back to library</Link>
        </div>
      );
    }

    const CatIcon = iconMap[cat.icon] || BookOpen;

    return (
      <div>
        <SEOHead title={`${cat.name} — Financial Library`} description={cat.description} />
        <div className="container py-16">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <li><Link to="/" className="hover:text-accent">Home</Link></li>
              <li>/</li>
              <li><Link to="/library" className="hover:text-accent">Library</Link></li>
              <li>/</li>
              <li className="text-foreground">{cat.name}</li>
            </ol>
          </nav>

          <Link to="/library" className="mb-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline">
            <ArrowLeft className="h-3.5 w-3.5" /> All categories
          </Link>

          <div className="mt-4 flex items-center gap-3">
            <CatIcon className="h-8 w-8 text-accent" />
            <div>
              <h1 className="font-display text-3xl text-foreground md:text-4xl">{cat.name}</h1>
              <p className="mt-1 text-muted-foreground">{cat.description}</p>
            </div>
          </div>

          <div className="mt-8 space-y-2">
            {cat.topics.map((topic) => (
              <Link
                key={topic.slug}
                to={`/library/${cat.slug}/${topic.slug}`}
                className="group flex items-center justify-between rounded-lg border border-border bg-card p-5 transition-all hover:border-accent/30 hover:shadow-md"
              >
                <div>
                  <h2 className="font-display text-lg text-foreground group-hover:text-accent transition-colors">{topic.title}</h2>
                  <p className="mt-1 text-sm text-muted-foreground line-clamp-1">{topic.content.slice(0, 100)}...</p>
                  {topic.relatedArticles.length > 0 && (
                    <p className="mt-2 text-xs text-accent">{topic.relatedArticles.length} related article{topic.relatedArticles.length > 1 ? "s" : ""}</p>
                  )}
                </div>
                <ChevronRight className="h-5 w-5 shrink-0 text-muted-foreground group-hover:text-accent transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Library index
  const filteredCategories = libraryData
    .map((cat) => ({
      ...cat,
      topics: cat.topics.filter(
        (t) => t.title.toLowerCase().includes(search.toLowerCase()) || t.content.toLowerCase().includes(search.toLowerCase())
      ),
    }))
    .filter((cat) => cat.topics.length > 0);

  return (
    <div>
      <SEOHead title="Financial Library" description="A structured repository of financial knowledge organized by topics. Learn about investing, financial products, budgeting, and more." />

      <div className="container py-16">
        <header className="animate-fade-up">
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <li><Link to="/" className="hover:text-accent">Home</Link></li>
              <li>/</li>
              <li className="text-foreground">Library</li>
            </ol>
          </nav>
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">Knowledge Base</p>
          <h1 className="mt-2 font-display text-4xl text-foreground md:text-5xl">Financial Library</h1>
          <p className="mt-3 max-w-xl text-muted-foreground">
            A structured repository of financial knowledge organized by topics, not dates.
          </p>
        </header>

        <div className="relative mt-8 max-w-md">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input placeholder="Search the library..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-9" />
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredCategories.map((cat) => {
            const CatIcon = iconMap[cat.icon] || BookOpen;
            return (
              <section key={cat.slug} className="rounded-lg border border-border bg-card p-6">
                <Link to={`/library/${cat.slug}`} className="flex items-center gap-3 group">
                  <CatIcon className="h-6 w-6 text-accent" />
                  <h2 className="font-display text-lg text-foreground group-hover:text-accent transition-colors">{cat.name}</h2>
                </Link>
                <p className="mt-2 text-sm text-muted-foreground">{cat.description}</p>
                <div className="mt-4 space-y-1">
                  {cat.topics.map((topic) => (
                    <Link
                      key={topic.slug}
                      to={`/library/${cat.slug}/${topic.slug}`}
                      className="flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-sm text-foreground transition-colors hover:bg-secondary"
                    >
                      <span className="flex items-center gap-2">
                        <BookOpen className="h-3.5 w-3.5 text-muted-foreground" />
                        {topic.title}
                      </span>
                      <ChevronRight className="h-3.5 w-3.5 text-muted-foreground" />
                    </Link>
                  ))}
                </div>
              </section>
            );
          })}
        </div>

        {filteredCategories.length === 0 && (
          <p className="mt-12 text-center text-muted-foreground">No topics found. Try a different search term.</p>
        )}
      </div>
    </div>
  );
};

export default Library;
