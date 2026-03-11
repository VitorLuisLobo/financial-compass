import { BarChart3, LineChart, FileSpreadsheet, TrendingUp, ExternalLink, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Investment Portfolio Simulator",
    description: "An interactive tool to simulate portfolio performance across different asset allocations and market scenarios. Test strategies before committing real capital.",
    icon: LineChart,
    tags: ["Simulation", "Portfolio", "Interactive"],
    status: "Live",
  },
  {
    title: "Dividend Tracker Spreadsheet",
    description: "A comprehensive spreadsheet for tracking dividend income, yield on cost, and projected future income from your dividend portfolio.",
    icon: FileSpreadsheet,
    tags: ["Spreadsheet", "Dividends", "Passive Income"],
    status: "Live",
  },
  {
    title: "Market Analysis Dashboard",
    description: "Real-time dashboard tracking key economic indicators, sector performance, and market sentiment for the Brazilian financial market.",
    icon: BarChart3,
    tags: ["Dashboard", "Real-time", "Market Data"],
    status: "Beta",
  },
  {
    title: "Compound Interest Calculator",
    description: "Visual calculator showing how different contribution amounts, rates of return, and time horizons affect your wealth accumulation.",
    icon: TrendingUp,
    tags: ["Calculator", "Education", "Visualization"],
    status: "Live",
  },
];

const Projects = () => (
  <div className="container py-16 md:py-20">
    <div className="animate-fade-up">
      <span className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent">Portfolio</span>
      <h1 className="mt-4 font-display text-4xl text-foreground md:text-5xl">Projects</h1>
      <p className="mt-3 max-w-xl text-muted-foreground">
        Tools, experiments, and resources I've built to help investors make better decisions.
      </p>
    </div>

    <div className="mt-12 grid gap-6 md:grid-cols-2">
      {projects.map((project, i) => (
        <div
          key={i}
          className={`card-hover group p-7 opacity-0 animate-fade-up animation-delay-${(i + 1) * 100}`}
          style={{ animationFillMode: 'forwards' }}
        >
          <div className="flex items-start justify-between">
            <div className="icon-container">
              <project.icon className="h-6 w-6 text-accent" />
            </div>
            <span
              className={`rounded-full px-3 py-1 text-xs font-medium ${
                project.status === "Live"
                  ? "bg-accent/10 text-accent"
                  : "bg-secondary text-muted-foreground"
              }`}
            >
              {project.status}
            </span>
          </div>
          <h3 className="mt-5 font-display text-xl text-foreground">{project.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="rounded-lg bg-secondary px-2.5 py-1 text-xs text-muted-foreground">
                {tag}
              </span>
            ))}
          </div>
          <Button variant="ghost" className="mt-5 gap-1.5 px-0 text-accent hover:text-accent/80 group/btn">
            View project <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
          </Button>
        </div>
      ))}
    </div>
  </div>
);

export default Projects;
