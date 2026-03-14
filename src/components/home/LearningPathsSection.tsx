import { Link } from "react-router-dom";
import { GraduationCap, TrendingUp, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

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

const LearningPathsSection = () => (
  <section className="py-28 relative">
    {/* Section divider line */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

    <div className="container">
      <ScrollReveal className="text-center mb-14">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Guided Learning</p>
        <h2 className="mt-2 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl" style={{ fontFamily: 'var(--font-display)' }}>
          Start Learning About Investing
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
          Follow structured paths designed to take you from beginner to confident investor.
        </p>
      </ScrollReveal>

      <div className="grid gap-8 md:grid-cols-2">
        {learningPaths.map((path, i) => (
          <ScrollReveal key={path.title} delay={i * 150}>
            <div className="group relative rounded-3xl border border-border/60 bg-card/60 backdrop-blur-sm p-8 md:p-10 transition-all duration-500 hover:border-accent/20 hover:shadow-2xl overflow-hidden h-full">
              {/* Background number */}
              <span className="absolute top-6 right-8 text-[6rem] font-extrabold text-foreground/[0.03] leading-none select-none">
                {String(i + 1).padStart(2, '0')}
              </span>

              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 border border-accent/10">
                  <path.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-foreground" style={{ fontFamily: 'var(--font-display)' }}>{path.title}</h3>
              </div>

              <div className="mt-8 space-y-4">
                {path.steps.map((step, j) => (
                  <div key={j} className="flex items-center gap-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/10 text-xs font-bold text-accent border border-accent/15">
                      {j + 1}
                    </div>
                    <span className="text-sm text-muted-foreground font-medium">{step}</span>
                  </div>
                ))}
              </div>

              <Link
                to={path.link}
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-accent transition-all duration-300 hover:gap-3"
              >
                Start this path <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default LearningPathsSection;
