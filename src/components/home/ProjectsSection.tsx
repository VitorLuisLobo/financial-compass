import { Link } from "react-router-dom";
import { LineChart, FileSpreadsheet, BarChart3, TrendingUp, ArrowUpRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const projects = [
  { title: "Portfolio Simulator", description: "Simulate portfolio performance across different market scenarios.", icon: LineChart },
  { title: "Dividend Tracker", description: "Track dividend income and projected future returns.", icon: FileSpreadsheet },
  { title: "Market Dashboard", description: "Key economic indicators and sector performance.", icon: BarChart3 },
  { title: "Compound Calculator", description: "Visualize how contributions compound over time.", icon: TrendingUp },
];

const ProjectsSection = () => (
  <section className="py-36">
    <div className="container">
      <ScrollReveal>
        <div className="flex items-end justify-between mb-16">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">Tools</p>
            <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
              Projects & Tools
            </h2>
          </div>
          <Link to="/projects" className="hidden items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors md:inline-flex group">
            View all <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
        <div className="h-px w-full bg-border/60 mb-12" />
      </ScrollReveal>

      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project, i) => (
          <ScrollReveal key={project.title} delay={i * 80}>
            <Link
              to="/projects"
              className="group flex items-start gap-6 rounded-2xl border border-border/40 bg-card/30 p-8 transition-all duration-500 hover:bg-card/80 hover:border-border hover:-translate-y-1 hover:shadow-xl h-full"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10">
                <project.icon className="h-5 w-5 text-accent" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-foreground group-hover:text-accent transition-colors duration-300" style={{ fontFamily: 'var(--font-display)' }}>
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{project.description}</p>
              </div>
              <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:text-accent mt-1" />
            </Link>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
