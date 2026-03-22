import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Search, ArrowRight, BookOpen } from "lucide-react";
import { Input } from "@/components/ui/input";
import SEOHead from "@/components/SEOHead";
import { allArticles, blogCategories, findLibraryTopic } from "@/data/content";
import { useLanguage } from "@/i18n/LanguageContext";
import type { TranslationKey } from "@/i18n/translations";

const blogCatKeyMap: Record<string, { name: TranslationKey; desc: TranslationKey }> = {
  'Personal Finance': { name: 'blogCat.personalFinance', desc: 'blogCat.personalFinanceDesc' },
  'Investing Basics': { name: 'blogCat.investingBasics', desc: 'blogCat.investingBasicsDesc' },
  'Fixed Income': { name: 'blogCat.fixedIncome', desc: 'blogCat.fixedIncomeDesc' },
  'Stock Market': { name: 'blogCat.stockMarket', desc: 'blogCat.stockMarketDesc' },
  'Market Insights': { name: 'blogCat.marketInsights', desc: 'blogCat.marketInsightsDesc' },
};

const Blog = () => {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get("category") || "All";
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState(categoryParam);
  const { t } = useLanguage();

  const filtered = allArticles.filter((a) => {
    const matchSearch = a.title.toLowerCase().includes(search.toLowerCase()) || a.excerpt.toLowerCase().includes(search.toLowerCase());
    const matchCat = activeCategory === "All" || a.category === activeCategory;
    return matchSearch && matchCat;
  });

  const activeCatInfo = blogCategories.find((c) => c.name === activeCategory);
  const getCatName = (name: string) => blogCatKeyMap[name] ? t(blogCatKeyMap[name].name) : name;
  const getCatDesc = (name: string) => blogCatKeyMap[name] ? t(blogCatKeyMap[name].desc) : activeCatInfo?.description || '';

  return (
    <div>
      <SEOHead
        title={activeCategory !== "All" ? `${getCatName(activeCategory)}` : t('nav.blog')}
        description={activeCategory !== "All" ? getCatDesc(activeCategory) : t('blog.desc')}
      />

      <div className="container py-16 md:py-20">
        <header className="animate-fade-up">
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <li><Link to="/" className="hover:text-accent transition-colors">{t('nav.home')}</Link></li>
              <li>/</li>
              <li className="text-foreground">{t('nav.blog')}</li>
              {activeCategory !== "All" && (
                <>
                  <li>/</li>
                  <li className="text-foreground">{getCatName(activeCategory)}</li>
                </>
              )}
            </ol>
          </nav>
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent">{t('nav.blog')}</span>
          <h1 className="mt-4 font-display text-4xl text-foreground md:text-5xl">
            {activeCategory !== "All" ? getCatName(activeCategory) : t('blog.title')}
          </h1>
          <p className="mt-3 max-w-xl text-muted-foreground">
            {activeCategory !== "All" ? getCatDesc(activeCategory) : t('blog.desc')}
          </p>
        </header>

        <div className="mt-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="relative max-w-sm flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder={t('blog.search')} value={search} onChange={(e) => setSearch(e.target.value)} className="pl-9 rounded-xl" />
          </div>
          <div className="flex flex-wrap gap-2">
            {["All", ...blogCategories.map((c) => c.name)].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-accent text-accent-foreground shadow-md shadow-accent/25"
                    : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"
                }`}
              >
                {cat === "All" ? t('blog.all') : getCatName(cat)}
              </button>
            ))}
          </div>
        </div>

        {activeCategory === "All" && !search && (
          <section className="mt-12" aria-label="Blog categories">
            <h2 className="mb-6 font-display text-xl text-foreground">{t('blog.exploreByCategory')}</h2>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {blogCategories.map((cat, i) => (
                <button
                  key={cat.slug}
                  onClick={() => setActiveCategory(cat.name)}
                  className={`card-hover group p-6 text-left opacity-0 animate-fade-up animation-delay-${(i + 1) * 100}`}
                  style={{ animationFillMode: 'forwards' }}
                >
                  <h3 className="font-display text-lg text-foreground group-hover:text-accent transition-colors duration-300">{getCatName(cat.name)}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{getCatDesc(cat.name)}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-accent">
                    {cat.count} {t('blog.articles')} <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </button>
              ))}
            </div>
          </section>
        )}

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((article, i) => (
            <article key={article.slug} className={`card-hover group flex flex-col p-6 opacity-0 animate-fade-up animation-delay-${((i % 3) + 1) * 100}`} style={{ animationFillMode: 'forwards' }}>
              <Link to={`/blog/${article.slug}`} className="flex flex-col flex-1">
                <span className="inline-flex w-fit rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">{getCatName(article.category)}</span>
                <h3 className="mt-3 font-display text-lg text-foreground group-hover:text-accent transition-colors duration-300">{article.title}</h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{article.excerpt}</p>
                <div className="mt-4 flex items-center gap-3 text-xs text-muted-foreground">
                  <time>{article.date}</time>
                  <span>·</span>
                  <span>{article.readTime} {t('featured.read')}</span>
                </div>
              </Link>
              {article.relatedLibraryTopics.length > 0 && (
                <div className="mt-4 border-t border-border pt-4">
                  <p className="mb-2 text-xs font-medium text-muted-foreground">{t('blog.learnMore')}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {article.relatedLibraryTopics.slice(0, 2).map((topicSlug) => {
                      const found = findLibraryTopic(topicSlug);
                      if (!found) return null;
                      return (
                        <Link
                          key={topicSlug}
                          to={`/library/${found.category.slug}/${topicSlug}`}
                          className="inline-flex items-center gap-1 rounded-lg bg-secondary px-2.5 py-1.5 text-xs text-muted-foreground transition-all duration-300 hover:text-accent hover:bg-accent/10"
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
          <p className="mt-16 text-center text-muted-foreground">{t('blog.noArticles')}</p>
        )}
      </div>
    </div>
  );
};

export default Blog;
