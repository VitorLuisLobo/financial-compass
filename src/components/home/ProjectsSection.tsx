import { Link } from "react-router-dom";
import { LineChart, FileSpreadsheet, BarChart3, TrendingUp, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const projects = [
  { title: "Portfolio Simulator", description: "Simulate portfolio performance across different market scenarios.", icon: LineChart },
  { title: "Dividend Tracker", description: "Track dividend income and projected future returns.", icon: FileSpreadsheet },
  { title: "Market Dashboard", description: "Key economic indicators and sector performance.", icon: BarChart3 },
  { title: "Compound Calculator", description: "Visualize how contributions compound over time.", icon: TrendingUp },
];

const ProjectsSection = () => (
  <section className="py-28 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/[0.02] to-transparent" />
    {/* Section divider */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

    <div className="container relative">
      <ScrollReveal>
        <div className="flex items-end justify-between mb-14">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Tools</p>
            <h2 className="mt-2 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl" style={{ fontFamily: 'var(--font-display)' }}>
              Projects & Tools
            </h2>
            <p className="mt-3 max-w-md text-muted-foreground">Experiments and resources to help investors make better decisions.</p>
          </div>
          <Link to="/projects" className="hidden items-center gap-2 text-sm font-medium text-accent hover:text-accent/80 transition-colors md:inline-flex group">
            View all <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </ScrollReveal>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {projects.map((project, i) => (
          <ScrollReveal key={project.title} delay={i * 100}>
            <Link
              to="/projects"
              className="group relative flex flex-col rounded-3xl border border-border/60 bg-card/60 backdrop-blur-sm p-7 transition-all duration-500 hover:-translate-y-1 hover:border-accent/20 hover:shadow-2xl overflow-hidden h-full"
            >
              <div className="absolute -bottom-10 -right-10 h-24 w-24 rounded-full bg-accent/0 blur-2xl transition-all duration-500 group-hover:bg-accent/8" />

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 border border-accent/10 transition-colors duration-300 group-hover:bg-accent/15">
                <project.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="mt-5 text-base font-bold text-foreground group-hover:text-accent transition-colors duration-300" style={{ fontFamily: 'var(--font-display)' }}>
                {project.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{project.description}</p>
            </Link>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
