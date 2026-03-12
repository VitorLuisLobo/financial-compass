import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, Wallet, TrendingUp, BookOpen, Users, Award } from "lucide-react";
import NewsletterSignup from "@/components/NewsletterSignup";
import SEOHead from "@/components/SEOHead";
import profilePhoto from "@/assets/profile-photo.png";
import { allArticles, blogCategories, libraryData } from "@/data/content";

const featuredGuides = [
  { title: "Complete Guide to ETFs", description: "Everything you need to know about exchange-traded funds.", icon: BarChart3, libraryPath: "/library/financial-products/etfs-exchange-traded-funds" },
  { title: "Budget Planning 101", description: "A step-by-step framework for organizing your finances.", icon: Wallet, libraryPath: "/library/financial-organization/budget-planning" },
  { title: "Stock Market Fundamentals", description: "Core concepts every investor should understand.", icon: TrendingUp, libraryPath: "/library/investing-basics/risk-vs-return" },
];

const stats = [
  { value: "10+", label: "Years Experience", icon: Award },
  { value: "500+", label: "Students Taught", icon: Users },
  { value: "50+", label: "Articles Published", icon: BookOpen },
];

const Index = () => {
  const recentArticles = allArticles.slice(0, 3);
  const heroImageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroImageRef.current) {
        const scrollY = window.scrollY;
        heroImageRef.current.style.transform = `translateY(${scrollY * 0.15}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <SEOHead title="Home" description="Investment advisor sharing insights on finance, investing and financial education. Build knowledge that lasts." />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-40" />
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />

        <div className="container relative py-16 md:py-24 lg:py-32">
          <div className="flex flex-col items-center gap-10 md:flex-row md:items-center md:gap-12 lg:gap-16">
            {/* Left — Photo */}
            <div className="relative flex items-center justify-center w-full max-w-sm md:w-1/2 md:max-w-none animate-fade-up">
              {/* Decorative blobs behind photo */}
              <div className="absolute -bottom-8 -right-8 h-48 w-48 rounded-full bg-accent/8 blur-3xl" />
              <div className="absolute -top-6 -left-6 h-32 w-32 rounded-full bg-primary/6 blur-2xl" />

              <div className="relative">
                <img
                  ref={heroImageRef}
                  src={profilePhoto}
                  alt="Financial advisor profile"
                  className="relative w-full h-[380px] md:h-[480px] lg:h-[540px] object-contain will-change-transform"
                  style={{ filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.12))' }}
                  loading="eager"
                />
                {/* Bottom gradient fade for smooth integration */}
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-background/50 to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Right — Content */}
            <div className="flex flex-col items-center text-center md:w-1/2 md:items-start md:text-left">
              {/* Badge */}
              <div className="animate-fade-up animation-delay-100">
                <span className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent backdrop-blur-sm">
                  <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                  Financial Advisor & Educator
                </span>
              </div>

              <h1 className="mt-6 font-display text-4xl leading-tight text-foreground md:text-5xl lg:text-6xl animate-fade-up animation-delay-200">
                Invest with clarity,
                <br />
                <span className="gradient-text">grow with confidence.</span>
              </h1>
              <p className="mt-5 max-w-lg text-lg text-muted-foreground animate-fade-up animation-delay-300">
                Investment advisor sharing insights on finance, investing and financial education. Building knowledge that lasts.
              </p>

              {/* CTA Buttons */}
              <div className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start animate-fade-up animation-delay-400">
                <Button variant="gradient" size="lg" asChild className="group">
                  <Link to="/blog">
                    Read articles
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button variant="hero-outline" size="lg" asChild className="group">
                  <Link to="/library">
                    Explore financial library
                    <ArrowRight className="ml-1 h-4 w-4 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>

              {/* Stats */}
              <div className="mt-10 flex flex-wrap justify-center gap-4 md:justify-start animate-fade-up animation-delay-500">
                {stats.map((stat) => (
                  <div key={stat.label} className="stat-pill flex items-center gap-3">
                    <stat.icon className="h-5 w-5 text-accent" />
                    <div className="text-left">
                      <p className="text-lg font-bold text-foreground">{stat.value}</p>
                      <p className="text-xs text-muted-foreground">{stat.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Articles */}
      <section className="section-gradient-accent py-20">
        <div className="container">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-accent">Latest</p>
              <h2 className="mt-1 font-display text-3xl text-foreground md:text-4xl">Recent articles</h2>
              <p className="mt-2 text-muted-foreground">Latest insights and analysis.</p>
            </div>
            <Link to="/blog" className="hidden items-center gap-1 text-sm font-medium text-accent hover:underline md:inline-flex group">
              View all
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {recentArticles.map((article, i) => (
              <Link
                key={article.slug}
                to={`/blog/${article.slug}`}
                className={`card-hover group p-6 opacity-0 animate-fade-up animation-delay-${(i + 1) * 100}`}
                style={{ animationFillMode: 'forwards' }}
              >
                <span className="inline-flex rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">{article.category}</span>
                <h3 className="mt-3 font-display text-lg text-foreground group-hover:text-accent transition-colors duration-300">{article.title}</h3>
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

      {/* Featured Guides */}
      <section className="container py-20">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent">Deep Dives</p>
        <h2 className="mt-1 font-display text-3xl text-foreground md:text-4xl">Featured guides</h2>
        <p className="mt-2 text-muted-foreground">Deep dives into essential financial topics.</p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {featuredGuides.map((guide, i) => (
            <div key={i} className={`card-hover group p-7 opacity-0 animate-fade-up animation-delay-${(i + 1) * 100}`} style={{ animationFillMode: 'forwards' }}>
              <div className="icon-container">
                <guide.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="mt-5 font-display text-lg text-foreground">{guide.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{guide.description}</p>
              <Link to={guide.libraryPath} className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-accent transition-all duration-300 hover:gap-2">
                Read guide <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="section-gradient-accent py-20">
        <div className="container">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">Explore</p>
          <h2 className="mt-1 font-display text-3xl text-foreground md:text-4xl">Browse by category</h2>
          <div className="mt-8 flex flex-wrap gap-3">
            {blogCategories.map((cat) => (
              <Link
                key={cat.slug}
                to={`/blog?category=${encodeURIComponent(cat.name)}`}
                className="rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground transition-all duration-300 hover:border-accent hover:text-accent hover:shadow-md hover:scale-[1.03]"
              >
                {cat.name}
                <span className="ml-2 text-muted-foreground">({cat.count})</span>
              </Link>
            ))}
          </div>

          {/* Library quick links */}
          <div className="mt-10 card-hover p-7">
            <div className="flex items-center gap-3">
              <div className="icon-container">
                <BookOpen className="h-5 w-5 text-accent" />
              </div>
              <div>
                <h3 className="font-display text-lg text-foreground">Knowledge Library</h3>
                <p className="text-sm text-muted-foreground">Explore structured learning paths in the financial library.</p>
              </div>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {libraryData.map((cat) => (
                <Link
                  key={cat.slug}
                  to={`/library/${cat.slug}`}
                  className="rounded-lg bg-secondary px-3.5 py-2 text-xs font-medium text-foreground transition-all duration-300 hover:text-accent hover:bg-accent/10"
                >
                  {cat.name} ({cat.topics.length})
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="container py-20">
        <div className="mx-auto max-w-lg">
          <NewsletterSignup />
        </div>
      </section>
    </div>
  );
};

export default Index;
