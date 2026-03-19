import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Search, BookOpen, ChevronRight, TrendingUp, Landmark, PiggyBank, BarChart3, Shield, DollarSign, ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { Input } from "@/components/ui/input";
import SEOHead from "@/components/SEOHead";
import InstagramEmbed from "@/components/InstagramEmbed";
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
        <div className="container py-16 md:py-20">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
              <li><Link to="/" className="hover:text-accent transition-colors">Home</Link></li>
              <li>/</li>
              <li><Link to="/library" className="hover:text-accent transition-colors">Library</Link></li>
              <li>/</li>
              <li><Link to={`/library/${cat.slug}`} className="hover:text-accent transition-colors">{cat.name}</Link></li>
              <li>/</li>
              <li className="text-foreground">{topic.title}</li>
            </ol>
          </nav>

          <Link to={`/library/${cat.slug}`} className="mb-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline group">
            <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-x-1" /> Back to {cat.name}
          </Link>

          <article className="mt-4 card-hover p-8 md:p-10">
            <span className="inline-flex rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">{cat.name}</span>
            <h1 className="mt-3 font-display text-3xl text-foreground md:text-4xl">{topic.title}</h1>
            <p className="mt-6 leading-relaxed text-muted-foreground">{topic.content}</p>
          </article>

          {/* Related Blog Articles */}
          {topic.relatedArticles.length > 0 && (
            <aside className="mt-8 rounded-2xl border border-accent/20 bg-gradient-to-br from-accent/5 to-accent/10 p-7">
              <h2 className="font-display text-lg text-foreground">Related Articles</h2>
              <p className="mt-1 text-sm text-muted-foreground">Read more about this topic on the blog.</p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {topic.relatedArticles.map((articleSlug) => {
                  const article = findArticle(articleSlug);
                  if (!article) return null;
                  return (
                    <Link
                      key={articleSlug}
                      to={`/blog/${articleSlug}`}
                      className="card-hover group flex items-start gap-3 p-4"
                    >
                      <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-accent transition-transform duration-300 group-hover:translate-x-1" />
                      <div>
                        <p className="text-sm font-medium text-foreground group-hover:text-accent transition-colors duration-300">{article.title}</p>
                        <p className="mt-0.5 text-xs text-muted-foreground">{article.category} · {article.readTime}</p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </aside>
          )}

          {/* Other topics */}
          <section className="mt-10">
            <h2 className="font-display text-lg text-foreground">More in {cat.name}</h2>
            <div className="mt-4 space-y-2">
              {cat.topics.filter((t) => t.slug !== topic.slug).map((t) => (
                <Link
                  key={t.slug}
                  to={`/library/${cat.slug}/${t.slug}`}
                  className="card-hover group flex items-center justify-between px-5 py-4 text-sm text-foreground"
                >
                  <span className="flex items-center gap-2.5">
                    <BookOpen className="h-3.5 w-3.5 text-muted-foreground" />
                    {t.title}
                  </span>
                  <ChevronRight className="h-3.5 w-3.5 text-muted-foreground transition-transform duration-300 group-hover:translate-x-1 group-hover:text-accent" />
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
        <div className="container py-16 md:py-20">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <li><Link to="/" className="hover:text-accent transition-colors">Home</Link></li>
              <li>/</li>
              <li><Link to="/library" className="hover:text-accent transition-colors">Library</Link></li>
              <li>/</li>
              <li className="text-foreground">{cat.name}</li>
            </ol>
          </nav>

          <Link to="/library" className="mb-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline group">
            <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-x-1" /> All categories
          </Link>

          <div className="mt-4 flex items-center gap-4">
            <div className="icon-container">
              <CatIcon className="h-6 w-6 text-accent" />
            </div>
            <div>
              <h1 className="font-display text-3xl text-foreground md:text-4xl">{cat.name}</h1>
              <p className="mt-1 text-muted-foreground">{cat.description}</p>
            </div>
          </div>

          <div className="mt-10 space-y-3">
            {cat.topics.map((topic, i) => (
              <Link
                key={topic.slug}
                to={`/library/${cat.slug}/${topic.slug}`}
                className={`card-hover group flex items-center justify-between p-6 opacity-0 animate-fade-up animation-delay-${(i + 1) * 100}`}
                style={{ animationFillMode: 'forwards' }}
              >
                <div>
                  <h2 className="font-display text-lg text-foreground group-hover:text-accent transition-colors duration-300">{topic.title}</h2>
                  <p className="mt-1 text-sm text-muted-foreground line-clamp-1">{topic.content.slice(0, 100)}...</p>
                  {topic.relatedArticles.length > 0 && (
                    <p className="mt-2 text-xs text-accent">{topic.relatedArticles.length} related article{topic.relatedArticles.length > 1 ? "s" : ""}</p>
                  )}
                </div>
                <ChevronRight className="h-5 w-5 shrink-0 text-muted-foreground group-hover:text-accent transition-all duration-300 group-hover:translate-x-1" />
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

      <div className="container py-16 md:py-20">
        <header className="animate-fade-up">
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <li><Link to="/" className="hover:text-accent transition-colors">Home</Link></li>
              <li>/</li>
              <li className="text-foreground">Library</li>
            </ol>
          </nav>
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent">Knowledge Base</span>
          <h1 className="mt-4 font-display text-4xl text-foreground md:text-5xl">Financial Library</h1>
          <p className="mt-3 max-w-xl text-muted-foreground">
            A structured repository of financial knowledge organized by topics, not dates.
          </p>
        </header>

        <div className="relative mt-10 max-w-md">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input placeholder="Search the library..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-9 rounded-xl" />
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredCategories.map((cat, i) => {
            const CatIcon = iconMap[cat.icon] || BookOpen;
            return (
              <section key={cat.slug} className={`card-hover p-6 opacity-0 animate-fade-up animation-delay-${(i + 1) * 100}`} style={{ animationFillMode: 'forwards' }}>
                <Link to={`/library/${cat.slug}`} className="flex items-center gap-3 group">
                  <div className="icon-container shrink-0">
                    <CatIcon className="h-5 w-5 text-accent" />
                  </div>
                  <h2 className="font-display text-lg text-foreground group-hover:text-accent transition-colors duration-300">{cat.name}</h2>
                </Link>
                <p className="mt-3 text-sm text-muted-foreground">{cat.description}</p>
                <div className="mt-4 space-y-1">
                  {cat.topics.map((topic) => (
                    <Link
                      key={topic.slug}
                      to={`/library/${cat.slug}/${topic.slug}`}
                      className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm text-foreground transition-all duration-200 hover:bg-accent/10 hover:text-accent"
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
          <p className="mt-16 text-center text-muted-foreground">No topics found. Try a different search term.</p>
        )}
      </div>
    </div>
  );
};

export default Library;
