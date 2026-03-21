import { BarChart3, LineChart, FileSpreadsheet, TrendingUp, ExternalLink, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";

const Projects = () => {
  const { t } = useLanguage();

  const projects = [
    {
      title: t('projPage.portfolioTitle'),
      description: t('projPage.portfolioDesc'),
      icon: LineChart,
      tags: [t('projPage.simulation'), t('projPage.portfolio'), t('projPage.interactive')],
      status: "Live",
    },
    {
      title: t('projPage.dividendTitle'),
      description: t('projPage.dividendDesc'),
      icon: FileSpreadsheet,
      tags: [t('projPage.spreadsheet'), t('projPage.dividends'), t('projPage.passiveIncome')],
      status: "Live",
    },
    {
      title: t('projPage.dashboardTitle'),
      description: t('projPage.dashboardDesc'),
      icon: BarChart3,
      tags: [t('projPage.dashboard'), t('projPage.realtime'), t('projPage.marketData')],
      status: "Beta",
    },
    {
      title: t('projPage.calcTitle'),
      description: t('projPage.calcDesc'),
      icon: TrendingUp,
      tags: [t('projPage.calculator'), t('projPage.education'), t('projPage.visualization')],
      status: "Live",
    },
  ];

  return (
    <div className="container py-16 md:py-20">
      <div className="animate-fade-up">
        <span className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent">{t('projPage.badge')}</span>
        <h1 className="mt-4 font-display text-4xl text-foreground md:text-5xl">{t('projPage.title')}</h1>
        <p className="mt-3 max-w-xl text-muted-foreground">{t('projPage.desc')}</p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {projects.map((project, i) => (
          <div key={i} className={`card-hover group p-7 opacity-0 animate-fade-up animation-delay-${(i + 1) * 100}`} style={{ animationFillMode: 'forwards' }}>
            <div className="flex items-start justify-between">
              <div className="icon-container"><project.icon className="h-6 w-6 text-accent" /></div>
              <span className={`rounded-full px-3 py-1 text-xs font-medium ${project.status === "Live" ? "bg-accent/10 text-accent" : "bg-secondary text-muted-foreground"}`}>
                {project.status}
              </span>
            </div>
            <h3 className="mt-5 font-display text-xl text-foreground">{project.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="rounded-lg bg-secondary px-2.5 py-1 text-xs text-muted-foreground">{tag}</span>
              ))}
            </div>
            <Button variant="link" className="mt-5 gap-1.5 px-0 text-primary hover:text-primary/80 group/btn">
              {t('projPage.viewProject')} <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
