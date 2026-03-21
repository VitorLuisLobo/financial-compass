import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Search, BookOpen, ChevronRight, TrendingUp, Landmark, PiggyBank, BarChart3, Shield, DollarSign, ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { Input } from "@/components/ui/input";
import SEOHead from "@/components/SEOHead";
import InstagramEmbed from "@/components/InstagramEmbed";
import { libraryData, findArticle } from "@/data/content";
import type { LibraryCategory, LibraryTopic } from "@/data/content";
import { useLanguage } from "@/i18n/LanguageContext";
import type { TranslationKey } from "@/i18n/translations";

const iconMap: Record<string, React.ElementType> = {
  TrendingUp, Landmark, PiggyBank, BarChart3, Shield, DollarSign,
};

const catKeyMap: Record<string, TranslationKey> = {
  'investing-basics': 'cat.investingBasics',
  'financial-products': 'cat.financialProducts',
  'financial-organization': 'cat.financialOrganization',
  'market-analysis': 'cat.marketAnalysis',
  'risk-management': 'cat.riskManagement',
  'tax-planning': 'cat.taxPlanning',
};

const Library = () => {
  const { categorySlug, topicSlug } = useParams<{ categorySlug?: string; topicSlug?: string }>();
  const [search, setSearch] = useState("");
  const { t } = useLanguage();

  const getCatName = (slug: string, fallback: string) => catKeyMap[slug] ? t(catKeyMap[slug]) : fallback;

  // Topic detail view
  if (categorySlug && topicSlug) {
    const cat = libraryData.find((c) => c.slug === categorySlug);
    const topic = cat?.topics.find((t) => t.slug === topicSlug);

    if (!cat || !topic) {
      return (
        <div className="container py-20 text-center">
          <h1 className="font-display text-3xl text-foreground">{t('library.topicNotFound')}</h1>
          <Link to="/library" className="mt-4 inline-block text-accent hover:underline">{t('library.backToLibrary')}</Link>
        </div>
      );
    }

    const catName = getCatName(cat.slug, cat.name);

    return (
      <div>
        <SEOHead title={`${topic.title} — ${t('library.title')}`} description={topic.content.slice(0, 155)} />
        <div className="container py-16 md:py-20">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
              <li><Link to="/" className="hover:text-accent transition-colors">{t('nav.home')}</Link></li>
              <li>/</li>
              <li><Link to="/library" className="hover:text-accent transition-colors">{t('nav.library')}</Link></li>
              <li>/</li>
              <li><Link to={`/library/${cat.slug}`} className="hover:text-accent transition-colors">{catName}</Link></li>
              <li>/</li>
              <li className="text-foreground">{topic.title}</li>
            </ol>
          </nav>

          <Link to={`/library/${cat.slug}`} className="mb-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline group">
            <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-x-1" /> {t('library.backTo')} {catName}
          </Link>

          <article className="mt-4 card-hover p-8 md:p-10">
            <span className="inline-flex rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">{catName}</span>
            <h1 className="mt-3 font-display text-3xl text-foreground md:text-4xl">{topic.title}</h1>
            <p className="mt-6 leading-relaxed text-muted-foreground">{topic.content}</p>
          </article>

          {topic.instagramUrl && (
            <div className="mt-8 overflow-hidden rounded-2xl bg-[#1C1917] p-6 md:p-8">
              <div className="flex flex-col gap-6 md:flex-row md:items-center">
                <div className="md:w-[40%]">
                  <InstagramEmbed url={topic.instagramUrl} maxWidth={400} />
                </div>
                <div className="md:w-[60%]">
                  <h2 className="font-display text-2xl text-white">{t('library.understand60s')}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-white/70">
                    {t('library.watchReel')} <strong className="text-white">{topic.title}</strong>.
                  </p>
                  <a href={topic.instagramUrl} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline">
                    {t('library.viewOnInsta')} <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </div>
          )}

          {topic.relatedArticles.length > 0 && (
            <aside className="mt-8 rounded-2xl border border-accent/20 bg-gradient-to-br from-accent/5 to-accent/10 p-7">
              <h2 className="font-display text-lg text-foreground">{t('library.relatedArticles')}</h2>
              <p className="mt-1 text-sm text-muted-foreground">{t('library.relatedArticlesDesc')}</p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {topic.relatedArticles.map((articleSlug) => {
                  const article = findArticle(articleSlug);
                  if (!article) return null;
                  return (
                    <Link key={articleSlug} to={`/blog/${articleSlug}`} className="card-hover group flex items-start gap-3 p-4">
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

          <section className="mt-10">
            <h2 className="font-display text-lg text-foreground">{t('library.moreIn')} {catName}</h2>
            <div className="mt-4 space-y-2">
              {cat.topics.filter((tp) => tp.slug !== topic.slug).map((tp) => (
                <Link key={tp.slug} to={`/library/${cat.slug}/${tp.slug}`} className="card-hover group flex items-center justify-between px-5 py-4 text-sm text-foreground">
                  <span className="flex items-center gap-2.5">
                    <BookOpen className="h-3.5 w-3.5 text-muted-foreground" />
                    {tp.title}
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
          <h1 className="font-display text-3xl text-foreground">{t('library.catNotFound')}</h1>
          <Link to="/library" className="mt-4 inline-block text-accent hover:underline">{t('library.backToLibrary')}</Link>
        </div>
      );
    }

    const CatIcon = iconMap[cat.icon] || BookOpen;
    const catName = getCatName(cat.slug, cat.name);

    return (
      <div>
        <SEOHead title={`${catName} — ${t('library.title')}`} description={cat.description} />
        <div className="container py-16 md:py-20">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <li><Link to="/" className="hover:text-accent transition-colors">{t('nav.home')}</Link></li>
              <li>/</li>
              <li><Link to="/library" className="hover:text-accent transition-colors">{t('nav.library')}</Link></li>
              <li>/</li>
              <li className="text-foreground">{catName}</li>
            </ol>
          </nav>

          <Link to="/library" className="mb-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline group">
            <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-x-1" /> {t('library.allCategories')}
          </Link>

          <div className="mt-4 flex items-center gap-4">
            <div className="icon-container"><CatIcon className="h-6 w-6 text-accent" /></div>
            <div>
              <h1 className="font-display text-3xl text-foreground md:text-4xl">{catName}</h1>
              <p className="mt-1 text-muted-foreground">{cat.description}</p>
            </div>
          </div>

          <div className="mt-10 space-y-3">
            {cat.topics.map((topic, i) => (
              <Link key={topic.slug} to={`/library/${cat.slug}/${topic.slug}`} className={`card-hover group flex items-center justify-between p-6 opacity-0 animate-fade-up animation-delay-${(i + 1) * 100}`} style={{ animationFillMode: 'forwards' }}>
                <div>
                  <h2 className="font-display text-lg text-foreground group-hover:text-accent transition-colors duration-300">{topic.title}</h2>
                  <p className="mt-1 text-sm text-muted-foreground line-clamp-1">{topic.content.slice(0, 100)}...</p>
                  {topic.relatedArticles.length > 0 && (
                    <p className="mt-2 text-xs text-accent">
                      {topic.relatedArticles.length} {topic.relatedArticles.length > 1 ? t('library.relatedArticlesPlural') : t('library.relatedArticle')}
                    </p>
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
        (tp) => tp.title.toLowerCase().includes(search.toLowerCase()) || tp.content.toLowerCase().includes(search.toLowerCase())
      ),
    }))
    .filter((cat) => cat.topics.length > 0);

  return (
    <div>
      <SEOHead title={t('library.title')} description={t('library.desc')} />

      <div className="container py-16 md:py-20">
        <header className="animate-fade-up">
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <li><Link to="/" className="hover:text-accent transition-colors">{t('nav.home')}</Link></li>
              <li>/</li>
              <li className="text-foreground">{t('nav.library')}</li>
            </ol>
          </nav>
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent">{t('library.badge')}</span>
          <h1 className="mt-4 font-display text-4xl text-foreground md:text-5xl">{t('library.title')}</h1>
          <p className="mt-3 max-w-xl text-muted-foreground">{t('library.desc')}</p>
        </header>

        <div className="relative mt-10 max-w-md">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input placeholder={t('library.search')} value={search} onChange={(e) => setSearch(e.target.value)} className="pl-9 rounded-xl" />
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredCategories.map((cat, i) => {
            const CatIcon = iconMap[cat.icon] || BookOpen;
            const catName = getCatName(cat.slug, cat.name);
            return (
              <section key={cat.slug} className={`card-hover p-6 opacity-0 animate-fade-up animation-delay-${(i + 1) * 100}`} style={{ animationFillMode: 'forwards' }}>
                <Link to={`/library/${cat.slug}`} className="flex items-center gap-3 group">
                  <div className="icon-container shrink-0"><CatIcon className="h-5 w-5 text-accent" /></div>
                  <h2 className="font-display text-lg text-foreground group-hover:text-accent transition-colors duration-300">{catName}</h2>
                </Link>
                <p className="mt-3 text-sm text-muted-foreground">{cat.description}</p>
                <div className="mt-4 space-y-1">
                  {cat.topics.map((topic) => (
                    <Link key={topic.slug} to={`/library/${cat.slug}/${topic.slug}`} className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm text-foreground transition-all duration-200 hover:bg-accent/10 hover:text-accent">
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
          <p className="mt-16 text-center text-muted-foreground">{t('library.noTopics')}</p>
        )}
      </div>
    </div>
  );
};

export default Library;
