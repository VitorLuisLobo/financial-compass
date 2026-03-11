import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, Wallet, TrendingUp } from "lucide-react";
import NewsletterSignup from "@/components/NewsletterSignup";
import SEOHead from "@/components/SEOHead";
import profilePhoto from "@/assets/profile-photo.jpg";
import { allArticles, blogCategories, libraryData } from "@/data/content";

const featuredGuides = [
  { title: "Complete Guide to ETFs", description: "Everything you need to know about exchange-traded funds.", icon: BarChart3, libraryPath: "/library/financial-products/etfs-exchange-traded-funds" },
  { title: "Budget Planning 101", description: "A step-by-step framework for organizing your finances.", icon: Wallet, libraryPath: "/library/financial-organization/budget-planning" },
  { title: "Stock Market Fundamentals", description: "Core concepts every investor should understand.", icon: TrendingUp, libraryPath: "/library/investing-basics/risk-vs-return" },
];

const Index = () => {
  const recentArticles = allArticles.slice(0, 3);

  return (
    <div>
      <SEOHead title="Home" description="Investment advisor sharing insights on finance, investing and financial education. Build knowledge that lasts." />

      {/* Hero */}
      <section className="container py-20 md:py-28">
        <div className="flex flex-col items-center gap-10 md:flex-row md:gap-16">
          <div className="flex-1 animate-fade-up">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">Financial Education</p>
            <h1 className="font-display text-4xl leading-tight text-foreground md:text-5xl lg:text-6xl">
              Invest with clarity,<br />grow with confidence.
            </h1>
            <p className="mt-5 max-w-lg text-lg text-muted-foreground">
              Investment advisor sharing insights on finance, investing and financial education. Building knowledge that lasts.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button variant="hero" size="lg" asChild>
                <Link to="/blog">Read articles <ArrowRight className="ml-1 h-4 w-4" /></Link>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <Link to="/library">Explore financial library</Link>
              </Button>
            </div>
          </div>
          <div className="animate-fade-up animation-delay-200">
            <img src={profilePhoto} alt="Financial advisor profile" className="h-64 w-64 rounded-2xl object-cover shadow-lg md:h-80 md:w-80" loading="lazy" />
          </div>
        </div>
      </section>

      {/* Recent Articles */}
      <section className="bg-secondary/40 py-16">
        <div className="container">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="font-display text-3xl text-foreground">Recent articles</h2>
              <p className="mt-1 text-muted-foreground">Latest insights and analysis.</p>
            </div>
            <Link to="/blog" className="hidden text-sm font-medium text-accent hover:underline md:block">View all →</Link>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {recentArticles.map((article) => (
              <Link key={article.slug} to={`/blog/${article.slug}`} className="group rounded-lg border border-border bg-card p-6 transition-all hover:border-accent/30 hover:shadow-md">
                <span className="text-xs font-medium text-accent">{article.category}</span>
                <h3 className="mt-2 font-display text-lg text-foreground group-hover:text-accent transition-colors">{article.title}</h3>
                <div className="mt-3 flex items-center gap-3 text-xs text-muted-foreground">
                  <time>{article.date}</time>
                  <span>·</span>
                  <span>{article.readTime} read</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Guides - linked to library */}
      <section className="container py-16">
        <h2 className="font-display text-3xl text-foreground">Featured guides</h2>
        <p className="mt-1 text-muted-foreground">Deep dives into essential financial topics.</p>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {featuredGuides.map((guide, i) => (
            <div key={i} className="group rounded-lg border border-border bg-card p-6 transition-all hover:border-accent/30 hover:shadow-md">
              <guide.icon className="h-8 w-8 text-accent" />
              <h3 className="mt-4 font-display text-lg text-foreground">{guide.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{guide.description}</p>
              <Link to={guide.libraryPath} className="mt-4 inline-flex items-center text-sm font-medium text-accent hover:underline">
                Read guide <ArrowRight className="ml-1 h-3 w-3" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Categories - linked to blog with category filter */}
      <section className="bg-secondary/40 py-16">
        <div className="container">
          <h2 className="font-display text-3xl text-foreground">Browse by category</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {blogCategories.map((cat) => (
              <Link key={cat.slug} to={`/blog?category=${encodeURIComponent(cat.name)}`} className="rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground transition-all hover:border-accent hover:text-accent">
                {cat.name}
                <span className="ml-2 text-muted-foreground">({cat.count})</span>
              </Link>
            ))}
          </div>

          {/* Library quick links */}
          <div className="mt-8 rounded-lg border border-border bg-card p-6">
            <h3 className="font-display text-lg text-foreground">Knowledge Library</h3>
            <p className="mt-1 text-sm text-muted-foreground">Explore structured learning paths in the financial library.</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {libraryData.map((cat) => (
                <Link key={cat.slug} to={`/library/${cat.slug}`} className="rounded-md bg-secondary px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:text-accent">
                  {cat.name} ({cat.topics.length})
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="container py-16">
        <div className="mx-auto max-w-lg">
          <NewsletterSignup />
        </div>
      </section>
    </div>
  );
};

export default Index;
