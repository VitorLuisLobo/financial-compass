import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { allArticles } from "@/data/content";

const FeaturedArticles = () => {
  const articles = allArticles.slice(0, 3);

  return (
    <section className="py-36">
      <div className="container">
        <ScrollReveal>
          <div className="flex items-end justify-between mb-16">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">Latest</p>
              <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
                Featured Articles
              </h2>
            </div>
            <Link to="/blog" className="hidden items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors md:inline-flex group">
              View all <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="h-px w-full bg-border/60 mb-12" />
        </ScrollReveal>

        <div className="grid gap-8 md:grid-cols-3">
          {articles.map((article, i) => (
            <ScrollReveal key={article.slug} delay={i * 100}>
              <Link
                to={`/blog/${article.slug}`}
                className="group flex flex-col h-full rounded-2xl border border-border/40 bg-card/50 p-8 transition-all duration-500 hover:-translate-y-1 hover:border-border hover:shadow-xl"
              >
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
                  {article.category}
                </span>
                <h3 className="mt-4 text-xl font-bold text-foreground group-hover:text-accent transition-colors duration-300 leading-snug" style={{ fontFamily: 'var(--font-display)' }}>
                  {article.title}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed line-clamp-3 flex-1">
                  {article.excerpt}
                </p>
                <div className="mt-6 flex items-center justify-between">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <time>{article.date}</time>
                    <span className="h-1 w-1 rounded-full bg-muted-foreground/40" />
                    <span>{article.readTime} read</span>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:text-accent" />
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-10 text-center md:hidden">
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground">
            View all articles <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedArticles;
