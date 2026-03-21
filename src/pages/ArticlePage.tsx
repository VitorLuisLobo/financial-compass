import { Link, useParams } from "react-router-dom";
import { ArrowLeft, BookOpen, Clock, Calendar } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import NewsletterSignup from "@/components/NewsletterSignup";
import InstagramEmbed from "@/components/InstagramEmbed";
import { allArticles, findLibraryTopic, findArticle } from "@/data/content";
import { useLanguage } from "@/i18n/LanguageContext";

const ArticlePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = findArticle(slug || "");
  const { t } = useLanguage();

  if (!article) {
    return (
      <div className="container py-20 text-center">
        <h1 className="font-display text-3xl text-foreground">{t('article.notFound')}</h1>
        <Link to="/blog" className="mt-4 inline-block text-accent hover:underline">{t('article.backToBlog')}</Link>
      </div>
    );
  }

  const relatedArticles = allArticles.filter((a) => a.slug !== article.slug && a.category === article.category).slice(0, 3);

  return (
    <div>
      <SEOHead title={article.title} description={article.excerpt} />

      <article className="container py-16">
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-accent">{t('nav.home')}</Link></li>
            <li>/</li>
            <li><Link to="/blog" className="hover:text-accent">{t('nav.blog')}</Link></li>
            <li>/</li>
            <li><Link to={`/blog?category=${encodeURIComponent(article.category)}`} className="hover:text-accent">{article.category}</Link></li>
            <li>/</li>
            <li className="text-foreground truncate max-w-[200px]">{article.title}</li>
          </ol>
        </nav>

        <Link to="/blog" className="mb-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline">
          <ArrowLeft className="h-3.5 w-3.5" /> {t('article.backToArticles')}
        </Link>

        <header className="mt-4">
          <span className="text-sm font-medium text-accent">{article.category}</span>
          <h1 className="mt-2 font-display text-3xl text-foreground md:text-4xl lg:text-5xl">{article.title}</h1>
          <p className="mt-4 text-lg text-muted-foreground">{article.excerpt}</p>
          <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5" /> {article.date}</span>
            <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {article.readTime} {t('featured.read')}</span>
          </div>
        </header>

        <div className="prose mt-10 max-w-3xl">
          <p className="text-muted-foreground leading-relaxed">{t('article.placeholder1')}</p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            {article.excerpt}
          </p>
        </div>

        {article.instagramUrl && (
          <div className="mt-12 max-w-3xl">
            <div className="mb-6 flex items-center gap-3">
              <div className="h-px flex-1 bg-border" />
              <span className="text-xs font-semibold uppercase tracking-widest text-accent">{t('article.alsoVideo')}</span>
              <div className="h-px flex-1 bg-border" />
            </div>
            <InstagramEmbed url={article.instagramUrl} maxWidth={480} className="mx-auto" />
            <p className="mt-4 text-center text-sm text-muted-foreground">{t('article.preferWatch')}</p>
          </div>
        )}

        {article.relatedLibraryTopics.length > 0 && (
          <aside className="mt-12 rounded-lg border border-accent/20 bg-accent/5 p-6">
            <h2 className="flex items-center gap-2 font-display text-xl text-foreground">
              <BookOpen className="h-5 w-5 text-accent" />
              {t('article.deepenKnowledge')}
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">{t('article.exploreRelated')}</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {article.relatedLibraryTopics.map((topicSlug) => {
                const found = findLibraryTopic(topicSlug);
                if (!found) return null;
                return (
                  <Link key={topicSlug} to={`/library/${found.category.slug}/${topicSlug}`} className="flex items-start gap-3 rounded-md border border-border bg-card p-4 transition-all hover:border-accent/30 hover:shadow-sm">
                    <BookOpen className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <div>
                      <p className="text-sm font-medium text-foreground">{found.topic.title}</p>
                      <p className="mt-0.5 text-xs text-muted-foreground">{found.category.name}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </aside>
        )}

        {relatedArticles.length > 0 && (
          <section className="mt-12">
            <h2 className="font-display text-xl text-foreground">{t('article.moreIn')} {article.category}</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {relatedArticles.map((ra) => (
                <Link key={ra.slug} to={`/blog/${ra.slug}`} className="group rounded-lg border border-border bg-card p-5 transition-all hover:border-accent/30 hover:shadow-md">
                  <span className="text-xs font-medium text-accent">{ra.category}</span>
                  <h3 className="mt-1 font-display text-base text-foreground group-hover:text-accent transition-colors">{ra.title}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">{ra.readTime} {t('featured.read')}</p>
                </Link>
              ))}
            </div>
          </section>
        )}

        <div className="mt-12 mx-auto max-w-lg">
          <NewsletterSignup />
        </div>
      </article>
    </div>
  );
};

export default ArticlePage;
