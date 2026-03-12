import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, Wallet, TrendingUp, BookOpen, Users, Award, GraduationCap, LineChart, FileSpreadsheet, Briefcase, CheckCircle2 } from "lucide-react";
import NewsletterSignup from "@/components/NewsletterSignup";
import SEOHead from "@/components/SEOHead";
import profilePhoto from "@/assets/profile-photo.png";
import { allArticles, blogCategories, libraryData } from "@/data/content";

const stats = [
  { value: "10+", label: "Years Experience", icon: Award },
  { value: "500+", label: "Investors Educated", icon: Users },
  { value: "50+", label: "Articles Published", icon: BookOpen },
];

const libraryCategories = [
  { name: "Investing Basics", slug: "investing-basics", icon: TrendingUp },
  { name: "Financial Products", slug: "financial-products", icon: Briefcase },
  { name: "Financial Organization", slug: "financial-organization", icon: Wallet },
  { name: "Market Analysis", slug: "market-analysis", icon: BarChart3 },
  { name: "Risk Management", slug: "risk-management", icon: LineChart },
  { name: "Tax & Planning", slug: "tax-planning", icon: FileSpreadsheet },
];

const learningPaths = [
  {
    title: "Beginner Path",
    icon: GraduationCap,
    steps: ["Financial organization", "Emergency fund", "First investments", "Portfolio diversification"],
    link: "/learning-paths",
  },
  {
    title: "Investment Path",
    icon: TrendingUp,
    steps: ["Understanding risk", "Asset allocation", "Long term investing", "Passive investing"],
    link: "/learning-paths",
  },
];

const projects = [
  { title: "Portfolio Simulator", description: "Simulate portfolio performance across different market scenarios.", icon: LineChart },
  { title: "Dividend Tracker", description: "Track dividend income and projected future returns.", icon: FileSpreadsheet },
  { title: "Market Dashboard", description: "Key economic indicators and sector performance.", icon: BarChart3 },
  { title: "Compound Calculator", description: "Visualize how contributions compound over time.", icon: TrendingUp },
];

const Index = () => {
  const recentArticles = allArticles.slice(0, 3);
  const heroImageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroImageRef.current) {
        heroImageRef.current.style.transform = `translateY(${window.scrollY * 0.15}px)`;
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
              <div className="absolute -bottom-8 -right-8 h-48 w-48 rounded-full bg-accent/8 blur-3xl" />
              <div className="absolute -top-6 -left-6 h-32 w-32 rounded-full bg-primary/6 blur-2xl" />
              <div className="relative mt-8 md:mt-12">
                <img
                  ref={heroImageRef}
                  src={profilePhoto}
                  alt="Financial advisor profile"
                  className="relative w-full h-[420px] md:h-[540px] lg:h-[600px] object-contain will-change-transform"
                  style={{
                    filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.12))',
                    maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
                  }}
                  loading="eager"
                />
              </div>
            </div>

            {/* Right — Content */}
            <div className="flex flex-col items-center text-center md:w-1/2 md:items-start md:text-left">
              <div className="animate-fade-up animation-delay-100">
                <span className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent backdrop-blur-sm">
                  <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                  Financial Advisor & Educator
                </span>
              </div>

              <h1 className="mt-6 font-display text-4xl leading-tight text-foreground md:text-5xl lg:text-6xl animate-fade-up animation-delay-200">
                Invest with clarity,
                <br />
                grow with <span className="text-accent">confidence.</span>
              </h1>
              <p className="mt-5 max-w-lg text-lg text-muted-foreground animate-fade-up animation-delay-300">
                Investment advisor sharing insights on finance, investing and financial education. Building knowledge that lasts.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start animate-fade-up animation-delay-400">
                <Button variant="gradient" size="lg" asChild className="group">
                  <Link to="/blog">
                    Read Articles
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button variant="hero-outline" size="lg" asChild className="group">
                  <Link to="/library">
                    Explore Financial Library
                    <ArrowRight className="ml-1 h-4 w-4 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credibility Stats */}
      <section className="container -mt-6 relative z-10">
        <div className="grid gap-4 md:grid-cols-3">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`card-hover flex items-center gap-4 p-6 opacity-0 animate-fade-up animation-delay-${(i + 1) * 100}`}
              style={{ animationFillMode: 'forwards' }}
            >
              <div className="icon-container shrink-0">
                <stat.icon className="h-6 w-6 text-accent" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Articles */}
      <section className="section-gradient-accent py-20 mt-12">
        <div className="container">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-accent">Latest</p>
              <h2 className="mt-1 font-display text-3xl text-foreground md:text-4xl">Featured Articles</h2>
              <p className="mt-2 text-muted-foreground">Latest insights and analysis on finance and investing.</p>
            </div>
            <Link to="/blog" className="hidden items-center gap-1 text-sm font-medium text-accent hover:underline md:inline-flex group">
              View all <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
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
                <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{article.excerpt}</p>
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

      {/* Financial Library */}
      <section className="container py-20">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">Knowledge Hub</p>
          <h2 className="mt-1 font-display text-3xl text-foreground md:text-4xl">Explore the Financial Library</h2>
          <p className="mx-auto mt-2 max-w-xl text-muted-foreground">Structured knowledge organized by topic, not date. Dive into any category to build lasting understanding.</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {libraryCategories.map((cat, i) => (
            <Link
              key={cat.slug}
              to={`/library/${cat.slug}`}
              className={`card-hover group flex items-center gap-4 p-6 opacity-0 animate-fade-up animation-delay-${(i + 1) * 100}`}
              style={{ animationFillMode: 'forwards' }}
            >
              <div className="icon-container shrink-0">
                <cat.icon className="h-5 w-5 text-accent" />
              </div>
              <div>
                <h3 className="font-display text-lg text-foreground group-hover:text-accent transition-colors duration-300">{cat.name}</h3>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  {libraryData.find(c => c.slug === cat.slug)?.topics.length || 0} topics
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Learning Paths */}
      <section className="section-gradient-accent py-20">
        <div className="container">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">Guided Learning</p>
            <h2 className="mt-1 font-display text-3xl text-foreground md:text-4xl">Start Learning About Investing</h2>
            <p className="mx-auto mt-2 max-w-xl text-muted-foreground">Follow structured paths designed to take you from beginner to confident investor.</p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {learningPaths.map((path, i) => (
              <div
                key={path.title}
                className={`card-hover p-7 opacity-0 animate-fade-up animation-delay-${(i + 1) * 100}`}
                style={{ animationFillMode: 'forwards' }}
              >
                <div className="flex items-center gap-3">
                  <div className="icon-container">
                    <path.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-display text-xl text-foreground">{path.title}</h3>
                </div>
                <div className="mt-5 space-y-3">
                  {path.steps.map((step, j) => (
                    <div key={j} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-accent/60" />
                      {step}
                    </div>
                  ))}
                </div>
                <Link to={path.link} className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-accent transition-all duration-300 hover:gap-2">
                  Start this path <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="container py-20">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">Tools</p>
            <h2 className="mt-1 font-display text-3xl text-foreground md:text-4xl">Projects & Tools</h2>
            <p className="mt-2 text-muted-foreground">Experiments and resources to help investors make better decisions.</p>
          </div>
          <Link to="/projects" className="hidden items-center gap-1 text-sm font-medium text-accent hover:underline md:inline-flex group">
            View all <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((project, i) => (
            <Link
              key={project.title}
              to="/projects"
              className={`card-hover group p-6 opacity-0 animate-fade-up animation-delay-${(i + 1) * 100}`}
              style={{ animationFillMode: 'forwards' }}
            >
              <div className="icon-container">
                <project.icon className="h-5 w-5 text-accent" />
              </div>
              <h3 className="mt-4 font-display text-base text-foreground group-hover:text-accent transition-colors duration-300">{project.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{project.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="section-gradient-accent py-20">
        <div className="container">
          <div className="mx-auto max-w-lg">
            <NewsletterSignup />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
