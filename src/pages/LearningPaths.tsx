import { useState } from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, ArrowRight, GraduationCap, TrendingUp, BookOpen, ChevronDown, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import InstagramEmbed from "@/components/InstagramEmbed";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const paths = [
  {
    id: "beginner",
    title: "Beginner Path",
    description: "Build a strong financial foundation from scratch. Perfect for those starting their financial journey.",
    icon: GraduationCap,
    color: "accent",
    steps: [
      { title: "Financial Organization", description: "Learn budgeting and expense tracking fundamentals.", link: "/library/financial-organization/budget-planning", instagramUrl: "https://www.instagram.com/reel/EXEMPLO_ORCAMENTO/" },
      { title: "Emergency Fund", description: "Build your safety net before investing.", link: "/library/financial-organization/emergency-fund", instagramUrl: "https://www.instagram.com/reel/EXEMPLO_RESERVA/" },
      { title: "Saving Strategies", description: "Effective methods to save consistently.", link: "/library/financial-organization/saving-strategies", instagramUrl: null },
      { title: "Understanding CDI & Selic", description: "Learn the benchmark rates that drive Brazilian investments.", link: "/library/investing-basics/what-is-cdi", instagramUrl: null },
      { title: "First Investments", description: "Start with safe, liquid fixed income options.", link: "/library/financial-products/treasury-bonds", instagramUrl: "https://www.instagram.com/reel/EXEMPLO_PRIMEIROS_INVESTIMENTOS/" },
      { title: "Portfolio Diversification", description: "Spread risk across different asset classes.", link: "/library/risk-management/portfolio-diversification", instagramUrl: "https://www.instagram.com/reel/EXEMPLO_DIVERSIFICACAO/" },
    ],
  },
  {
    id: "investor",
    title: "Investment Path",
    description: "Deepen your knowledge of markets and build a long-term investment strategy.",
    icon: TrendingUp,
    color: "primary",
    steps: [
      { title: "Risk vs Return", description: "Understand the fundamental trade-off in investing.", link: "/library/investing-basics/risk-vs-return" },
      { title: "Fixed Income Deep Dive", description: "Compare CDB, LCI, and Treasury Bonds.", link: "/library/financial-products/cdb-bank-deposit-certificate" },
      { title: "Understanding Volatility", description: "Learn to navigate market ups and downs.", link: "/library/risk-management/understanding-volatility" },
      { title: "ETFs & Passive Investing", description: "Build diversified portfolios with low-cost funds.", link: "/library/financial-products/etfs-exchange-traded-funds" },
      { title: "Fundamental Analysis", description: "Evaluate companies through financial statements.", link: "/library/market-analysis/reading-financial-statements" },
      { title: "Tax-Efficient Investing", description: "Optimize returns through smart tax planning.", link: "/library/tax-planning/investment-taxation" },
    ],
  },
];

const LearningPaths = () => (
  <div>
    <SEOHead title="Learning Paths" description="Guided learning paths to help you go from financial beginner to confident investor. Step-by-step structured education." />

    {/* Hero */}
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-30" />
      <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-accent/5 blur-3xl" />
      <div className="container relative py-16 md:py-24">
        <div className="mx-auto max-w-2xl text-center animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent">
            <BookOpen className="h-3.5 w-3.5" />
            Guided Learning
          </span>
          <h1 className="mt-6 font-display text-4xl text-foreground md:text-5xl">
            Start Learning About <span className="gradient-text">Investing</span>
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Follow structured paths designed to take you from beginner to confident investor, one step at a time.
          </p>
        </div>
      </div>
    </section>

    {/* Paths */}
    <section className="container pb-20">
      <div className="grid gap-10 lg:grid-cols-2">
        {paths.map((path, pathIndex) => (
          <div
            key={path.id}
            className={`card-hover p-8 opacity-0 animate-fade-up animation-delay-${(pathIndex + 1) * 100}`}
            style={{ animationFillMode: "forwards" }}
          >
            <div className="flex items-center gap-4">
              <div className="icon-container">
                <path.icon className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h2 className="font-display text-2xl text-foreground">{path.title}</h2>
                <p className="mt-1 text-sm text-muted-foreground">{path.description}</p>
              </div>
            </div>

            <div className="relative mt-8 ml-5 border-l-2 border-accent/20 pl-8 space-y-6">
              {path.steps.map((step, i) => (
                <Link
                  key={i}
                  to={step.link}
                  className="group relative block"
                >
                  {/* Step dot */}
                  <div className="absolute -left-[2.55rem] top-1 flex h-6 w-6 items-center justify-center rounded-full border-2 border-accent bg-background text-xs font-bold text-accent shadow-md shadow-accent/20 group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                    {i + 1}
                  </div>
                  <h3 className="font-display text-base text-foreground group-hover:text-accent transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="mt-0.5 text-sm text-muted-foreground">{step.description}</p>
                </Link>
              ))}
            </div>

            <div className="mt-8 flex justify-end">
              <Button variant="gradient" size="sm" asChild className="group">
                <Link to={path.steps[0].link}>
                  Start path
                  <ArrowRight className="ml-1 h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* CTA */}
    <section className="section-gradient-accent py-16">
      <div className="container text-center">
        <h2 className="font-display text-3xl text-foreground">Not sure where to start?</h2>
        <p className="mt-3 text-muted-foreground">Explore the full Financial Library for all topics and concepts.</p>
        <Button variant="gradient" size="lg" asChild className="mt-6 group">
          <Link to="/library">
            Browse the Library
            <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Button>
      </div>
    </section>
  </div>
);

export default LearningPaths;
