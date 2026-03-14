import { Link } from "react-router-dom";
import { TrendingUp, Briefcase, Wallet, BarChart3, LineChart, FileSpreadsheet, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { libraryData } from "@/data/content";

const libraryCategories = [
  { name: "Investing Basics", slug: "investing-basics", icon: TrendingUp },
  { name: "Financial Products", slug: "financial-products", icon: Briefcase },
  { name: "Financial Organization", slug: "financial-organization", icon: Wallet },
  { name: "Market Analysis", slug: "market-analysis", icon: BarChart3 },
  { name: "Risk Management", slug: "risk-management", icon: LineChart },
  { name: "Tax & Planning", slug: "tax-planning", icon: FileSpreadsheet },
];

const LibrarySection = () => (
  <section className="py-28 relative overflow-hidden">
    {/* Subtle bg accent */}
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/[0.02] to-transparent" />

    <div className="container relative">
      <ScrollReveal className="text-center mb-14">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Knowledge Hub</p>
        <h2 className="mt-2 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl" style={{ fontFamily: 'var(--font-display)' }}>
          Explore the Financial Library
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
          Structured knowledge organized by topic, not date. Dive into any category to build lasting understanding.
        </p>
      </ScrollReveal>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {libraryCategories.map((cat, i) => (
          <ScrollReveal key={cat.slug} delay={i * 80}>
            <Link
              to={`/library/${cat.slug}`}
              className="group relative flex items-start gap-5 rounded-3xl border border-border/60 bg-card/60 backdrop-blur-sm p-7 transition-all duration-500 hover:-translate-y-1 hover:border-accent/20 hover:shadow-2xl overflow-hidden"
            >
              {/* Hover glow */}
              <div className="absolute -top-10 -right-10 h-24 w-24 rounded-full bg-accent/0 blur-2xl transition-all duration-500 group-hover:bg-accent/10" />

              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-accent/10 border border-accent/10 transition-colors duration-300 group-hover:bg-accent/15">
                <cat.icon className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground group-hover:text-accent transition-colors duration-300" style={{ fontFamily: 'var(--font-display)' }}>
                  {cat.name}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {libraryData.find(c => c.slug === cat.slug)?.topics.length || 0} topics
                </p>
                <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-accent opacity-0 transition-all duration-300 group-hover:opacity-100">
                  Explore <ArrowRight className="h-3 w-3" />
                </span>
              </div>
            </Link>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default LibrarySection;
