import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, Wallet, TrendingUp, BookOpen, Users, Award, GraduationCap, LineChart, FileSpreadsheet, Briefcase, CheckCircle2 } from "lucide-react";
import NewsletterSignup from "@/components/NewsletterSignup";
import SEOHead from "@/components/SEOHead";
import ScrollReveal from "@/components/ScrollReveal";
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
      <section className="relative overflow-hidden min-h-[92vh] flex items-center">
        {/* Layered background */}
        <div className="absolute inset-0 hero-mesh" />
        <div className="absolute inset-0 grid-pattern" />
        
        {/* Floating orbs */}
        <div className="absolute top-[15%] right-[10%] h-[400px] w-[400px] hero-orb bg-accent/[0.08]" />
        <div className="absolute bottom-[10%] left-[5%] h-[350px] w-[350px] hero-orb hero-orb-2 bg-secondary/[0.06]" />
        <div className="absolute top-[40%] left-[40%] h-[300px] w-[300px] hero-orb bg-primary/[0.05]" style={{ animationDelay: '-2s', animationDuration: '12s' }} />

        {/* Radial center spotlight */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-b from-accent/[0.05] via-transparent to-transparent rounded-full blur-3xl" />

        <div className="container relative py-20 md:py-28 lg:py-32">
          <div className="flex flex-col items-center gap-14 md:flex-row md:items-center md:gap-16 lg:gap-24">
            {/* Left — Photo */}
            <div className="relative flex items-center justify-center w-full max-w-xs md:w-[40%] md:max-w-none opacity-0 animate-fade-up">
              {/* Glow behind photo */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-[70%] w-[70%] rounded-full bg-gradient-to-br from-accent/15 via-secondary/10 to-primary/10 blur-[60px]" />
              </div>
              <div className="relative">
                <img
                  ref={heroImageRef}
                  src={profilePhoto}
                  alt="Financial advisor profile"
                  className="relative w-full h-[380px] md:h-[500px] lg:h-[560px] object-contain will-change-transform"
                  style={{
                    filter: 'drop-shadow(0 30px 60px rgba(0,0,0,0.4))',
                    maskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)',
                  }}
                  loading="eager"
                />
              </div>
            </div>

            {/* Right — Content */}
            <div className="flex flex-col items-center text-center md:w-[60%] md:items-start md:text-left">
              {/* Badge */}
              <div className="opacity-0 animate-fade-up animation-delay-100">
                <span className="inline-flex items-center gap-2.5 rounded-full border border-accent/20 bg-accent/[0.08] px-5 py-2 text-sm font-medium text-accent backdrop-blur-md">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                  </span>
                  Financial Advisor & Educator
                </span>
              </div>

              {/* Headline */}
              <h1 className="mt-8 leading-[1.05] tracking-tight opacity-0 animate-fade-up animation-delay-200" style={{ fontFamily: "'Inter', var(--font-body)" }}>
                <span className="block text-5xl md:text-6xl lg:text-[4.5rem] font-extrabold text-foreground hero-title-glow">
                  Invest with clarity,
                </span>
                <span className="block text-5xl md:text-6xl lg:text-[4.5rem] font-extrabold mt-1">
                  <span className="text-foreground">grow with </span>
                  <span className="relative">
                    <span className="hero-gradient-text">confidence.</span>
                    <span className="absolute -bottom-3 left-0 h-[3px] rounded-full bg-gradient-to-r from-accent via-secondary/60 to-transparent animate-hero-underline" style={{ width: '100%' }} />
                  </span>
                </span>
              </h1>

              {/* Subtitle */}
              <p className="mt-7 max-w-xl text-lg md:text-xl text-muted-foreground leading-relaxed font-light opacity-0 animate-fade-up animation-delay-300">
                Sharing insights on finance, investing and financial education.
                <span className="text-foreground/70 font-normal"> Building knowledge that lasts.</span>
              </p>

              {/* Separator line */}
              <div className="mt-8 h-px w-0 bg-gradient-to-r from-border via-accent/30 to-border animate-line-grow opacity-0 animate-fade-in animation-delay-400" />

              {/* CTAs */}
              <div className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start opacity-0 animate-fade-up animation-delay-500">
                <Button variant="gradient" size="lg" asChild className="btn-shimmer group text-base px-9 py-6 shadow-lg shadow-accent/20 hover:shadow-2xl hover:shadow-accent/30 transition-all duration-500 rounded-2xl">
                  <Link to="/blog">
                    Read Articles
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                  </Link>
                </Button>
                <Button variant="hero-outline" size="lg" asChild className="group text-base px-9 py-6 rounded-2xl backdrop-blur-sm bg-background/50 hover:bg-background/80 transition-all duration-500">
                  <Link to="/library">
                    Explore Library
                    <ArrowRight className="ml-2 h-4 w-4 opacity-0 -translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
                  </Link>
                </Button>
              </div>

              {/* Trust row */}
              <div className="mt-10 flex flex-wrap items-center justify-center md:justify-start gap-x-8 gap-y-3 opacity-0 animate-fade-up animation-delay-600">
                {[
                  { label: "10+ Years Experience", icon: Award },
                  { label: "500+ Investors Educated", icon: Users },
                  { label: "50+ Articles", icon: BookOpen },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <item.icon className="h-4 w-4 text-accent/70" />
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background via-background/80 to-transparent" />
      </section>

      {/* Credibility Stats */}
      <ScrollReveal className="container -mt-6 relative z-10">
        <div className="grid gap-4 md:grid-cols-3">
          {stats.map((stat, i) => (
            <ScrollReveal
              key={stat.label}
              delay={i * 100}
              className="card-hover flex items-center gap-4 p-6"
            >
              <div className="icon-container shrink-0">
                <stat.icon className="h-6 w-6 text-accent" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </ScrollReveal>

      {/* Featured Articles */}
      <section className="section-gradient-accent py-20 mt-12">
        <div className="container">
          <ScrollReveal>
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
          </ScrollReveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {recentArticles.map((article, i) => (
              <ScrollReveal key={article.slug} delay={i * 120}>
                <Link
                  to={`/blog/${article.slug}`}
                  className="card-hover group p-6 block h-full"
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
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Financial Library */}
      <section className="container py-20">
        <ScrollReveal className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">Knowledge Hub</p>
          <h2 className="mt-1 font-display text-3xl text-foreground md:text-4xl">Explore the Financial Library</h2>
          <p className="mx-auto mt-2 max-w-xl text-muted-foreground">Structured knowledge organized by topic, not date. Dive into any category to build lasting understanding.</p>
        </ScrollReveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {libraryCategories.map((cat, i) => (
            <ScrollReveal key={cat.slug} delay={i * 80}>
              <Link
                to={`/library/${cat.slug}`}
                className="card-hover group flex items-center gap-4 p-6"
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
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Learning Paths */}
      <section className="section-gradient-accent py-20">
        <div className="container">
          <ScrollReveal className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">Guided Learning</p>
            <h2 className="mt-1 font-display text-3xl text-foreground md:text-4xl">Start Learning About Investing</h2>
            <p className="mx-auto mt-2 max-w-xl text-muted-foreground">Follow structured paths designed to take you from beginner to confident investor.</p>
          </ScrollReveal>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {learningPaths.map((path, i) => (
              <ScrollReveal key={path.title} delay={i * 150}>
                <div className="card-hover p-7 h-full">
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
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="container py-20">
        <ScrollReveal>
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
        </ScrollReveal>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((project, i) => (
            <ScrollReveal key={project.title} delay={i * 100}>
              <Link
                to="/projects"
                className="card-hover group p-6 block h-full"
              >
                <div className="icon-container">
                  <project.icon className="h-5 w-5 text-accent" />
                </div>
                <h3 className="mt-4 font-display text-base text-foreground group-hover:text-accent transition-colors duration-300">{project.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{project.description}</p>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="section-gradient-accent py-20">
        <div className="container">
          <ScrollReveal className="mx-auto max-w-lg">
            <NewsletterSignup />
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Index;
