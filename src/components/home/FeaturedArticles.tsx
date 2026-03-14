import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { allArticles } from "@/data/content";

const FeaturedArticles = () => {
  const articles = allArticles.slice(0, 3);
  const featured = articles[0];
  const rest = articles.slice(1);

  return (
    <section className="py-28">
      <div className="container">
        <ScrollReveal>
          <div className="flex items-end justify-between mb-14">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Latest</p>
              <h2 className="mt-2 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl" style={{ fontFamily: 'var(--font-display)' }}>
                Featured Articles
              </h2>
              <p className="mt-3 max-w-md text-muted-foreground">Latest insights and analysis on finance and investing.</p>
            </div>
            <Link to="/blog" className="hidden items-center gap-2 text-sm font-medium text-accent hover:text-accent/80 transition-colors md:inline-flex group">
              View all <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </ScrollReveal>

        {/* Bento layout: 1 large left + 2 stacked right */}
        <div className="grid gap-6 lg:grid-cols-5">
          {/* Featured large card */}
          <ScrollReveal className="lg:col-span-3">
            <Link
              to={`/blog/${featured.slug}`}
              className="group relative block h-full overflow-hidden rounded-3xl border border-border/60 bg-card/80 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-accent/20 hover:shadow-2xl"
            >
              <div className="flex h-full flex-col justify-between p-8 md:p-10">
                <div>
                  <span className="inline-flex rounded-full bg-accent/10 px-4 py-1.5 text-xs font-semibold text-accent tracking-wide uppercase">
                    {featured.category}
                  </span>
                  <h3 className="mt-6 text-2xl md:text-3xl font-bold text-foreground group-hover:text-accent transition-colors duration-300 leading-tight" style={{ fontFamily: 'var(--font-display)' }}>
                    {featured.title}
                  </h3>
                  <p className="mt-4 text-base text-muted-foreground leading-relaxed line-clamp-3">{featured.excerpt}</p>
                </div>
                <div className="mt-8 flex items-center justify-between">
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <time>{featured.date}</time>
                    <span className="h-1 w-1 rounded-full bg-muted-foreground/50" />
                    <span>{featured.readTime} read</span>
                  </div>
                  <span className="flex items-center gap-1 text-sm font-medium text-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    Read <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </div>
              {/* Corner glow */}
              <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-accent/5 blur-3xl transition-all duration-500 group-hover:bg-accent/10" />
            </Link>
          </ScrollReveal>

          {/* Right stacked cards */}
          <div className="flex flex-col gap-6 lg:col-span-2">
            {rest.map((article, i) => (
              <ScrollReveal key={article.slug} delay={i * 120} className="flex-1">
                <Link
                  to={`/blog/${article.slug}`}
                  className="group flex h-full flex-col justify-between rounded-3xl border border-border/60 bg-card/80 backdrop-blur-sm p-7 transition-all duration-500 hover:-translate-y-1 hover:border-accent/20 hover:shadow-2xl"
                >
                  <div>
                    <span className="inline-flex rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent tracking-wide uppercase">
                      {article.category}
                    </span>
                    <h3 className="mt-4 text-lg font-bold text-foreground group-hover:text-accent transition-colors duration-300" style={{ fontFamily: 'var(--font-display)' }}>
                      {article.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{article.excerpt}</p>
                  </div>
                  <div className="mt-5 flex items-center gap-3 text-xs text-muted-foreground">
                    <time>{article.date}</time>
                    <span className="h-1 w-1 rounded-full bg-muted-foreground/50" />
                    <span>{article.readTime} read</span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Mobile view all link */}
        <div className="mt-8 text-center md:hidden">
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-medium text-accent">
            View all articles <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedArticles;
