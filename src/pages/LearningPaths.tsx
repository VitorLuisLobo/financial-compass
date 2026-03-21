import { useState } from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, ArrowRight, GraduationCap, TrendingUp, BookOpen, ChevronDown, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import InstagramEmbed from "@/components/InstagramEmbed";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useLanguage } from "@/i18n/LanguageContext";

const LearningPaths = () => {
  const { t } = useLanguage();

  const paths = [
    {
      id: "beginner",
      title: t('lpPage.beginnerTitle'),
      description: t('lpPage.beginnerDesc'),
      icon: GraduationCap,
      color: "accent",
      steps: [
        { title: t('lpStep.financialOrg'), description: t('lpStep.financialOrgDesc'), link: "/library/financial-organization/budget-planning", instagramUrl: "https://www.instagram.com/reel/EXEMPLO_ORCAMENTO/" },
        { title: t('lpStep.emergencyFund'), description: t('lpStep.emergencyFundDesc'), link: "/library/financial-organization/emergency-fund", instagramUrl: "https://www.instagram.com/reel/EXEMPLO_RESERVA/" },
        { title: t('lpStep.savingStrategies'), description: t('lpStep.savingStrategiesDesc'), link: "/library/financial-organization/saving-strategies", instagramUrl: null },
        { title: t('lpStep.cdiSelic'), description: t('lpStep.cdiSelicDesc'), link: "/library/investing-basics/what-is-cdi", instagramUrl: null },
        { title: t('lpStep.firstInvestments'), description: t('lpStep.firstInvestmentsDesc'), link: "/library/financial-products/treasury-bonds", instagramUrl: "https://www.instagram.com/reel/EXEMPLO_PRIMEIROS_INVESTIMENTOS/" },
        { title: t('lpStep.diversification'), description: t('lpStep.diversificationDesc'), link: "/library/risk-management/portfolio-diversification", instagramUrl: "https://www.instagram.com/reel/EXEMPLO_DIVERSIFICACAO/" },
      ],
    },
    {
      id: "investor",
      title: t('lpPage.investorTitle'),
      description: t('lpPage.investorDesc'),
      icon: TrendingUp,
      color: "primary",
      steps: [
        { title: t('lpStep.riskReturn'), description: t('lpStep.riskReturnDesc'), link: "/library/investing-basics/risk-vs-return", instagramUrl: null },
        { title: t('lpStep.fixedIncome'), description: t('lpStep.fixedIncomeDesc'), link: "/library/financial-products/cdb-bank-deposit-certificate", instagramUrl: null },
        { title: t('lpStep.volatility'), description: t('lpStep.volatilityDesc'), link: "/library/risk-management/understanding-volatility", instagramUrl: null },
        { title: t('lpStep.etfs'), description: t('lpStep.etfsDesc'), link: "/library/financial-products/etfs-exchange-traded-funds", instagramUrl: null },
        { title: t('lpStep.fundamental'), description: t('lpStep.fundamentalDesc'), link: "/library/market-analysis/reading-financial-statements", instagramUrl: null },
        { title: t('lpStep.taxEfficient'), description: t('lpStep.taxEfficientDesc'), link: "/library/tax-planning/investment-taxation", instagramUrl: null },
      ],
    },
  ];

  return (
    <div>
      <SEOHead title={t('nav.learning')} description={t('lpPage.desc')} />

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-30" />
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-accent/5 blur-3xl" />
        <div className="container relative py-16 md:py-24">
          <div className="mx-auto max-w-2xl text-center animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent">
              <BookOpen className="h-3.5 w-3.5" />
              {t('lpPage.badge')}
            </span>
            <h1 className="mt-6 font-display text-4xl text-foreground md:text-5xl">
              {t('lpPage.title')} <span className="gradient-text">{t('lpPage.titleAccent')}</span>
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">{t('lpPage.desc')}</p>
          </div>
        </div>
      </section>

      <section className="container pb-20">
        <div className="grid gap-10 lg:grid-cols-2">
          {paths.map((path, pathIndex) => (
            <div key={path.id} className={`card-hover p-8 opacity-0 animate-fade-up animation-delay-${(pathIndex + 1) * 100}`} style={{ animationFillMode: "forwards" }}>
              <div className="flex items-center gap-4">
                <div className="icon-container"><path.icon className="h-6 w-6 text-accent" /></div>
                <div>
                  <h2 className="font-display text-2xl text-foreground">{path.title}</h2>
                  <p className="mt-1 text-sm text-muted-foreground">{path.description}</p>
                </div>
              </div>

              <div className="relative mt-8 ml-5 border-l-2 border-accent/20 pl-8 space-y-4">
                {path.steps.map((step, i) => (
                  <Collapsible key={i} className="group/step relative">
                    <div className="absolute -left-[2.55rem] top-3 flex h-6 w-6 items-center justify-center rounded-full border-2 border-accent bg-background text-xs font-bold text-accent shadow-md shadow-accent/20">
                      {i + 1}
                    </div>
                    <CollapsibleTrigger className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left transition-colors hover:bg-accent/5">
                      <div className="flex-1">
                        <span className="flex items-center gap-2">
                          <span className="font-display text-base text-foreground">{step.title}</span>
                          {step.instagramUrl && (
                            <span className="inline-flex items-center gap-1 rounded-full bg-accent/10 px-2 py-0.5 text-[10px] font-semibold text-accent">
                              <Play className="h-2.5 w-2.5" /> vídeo
                            </span>
                          )}
                        </span>
                      </div>
                      <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 group-data-[state=open]/step:rotate-180" />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="pl-3 pt-2 pb-2">
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                      {step.instagramUrl && (
                        <div className="mt-4">
                          <span className="mb-2 block text-xs font-medium uppercase tracking-wider text-accent">{t('lpPage.supportVideo')}</span>
                          <InstagramEmbed url={step.instagramUrl} maxWidth={400} />
                        </div>
                      )}
                      <Link to={step.link} className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline">
                        {t('lpPage.readFull')} <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </CollapsibleContent>
                  </Collapsible>
                ))}
              </div>

              <div className="mt-8 flex justify-end">
                <Button variant="gradient" size="sm" asChild className="group">
                  <Link to={path.steps[0].link}>
                    {t('lpPage.startPath')}
                    <ArrowRight className="ml-1 h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-gradient-accent py-16">
        <div className="container text-center">
          <h2 className="font-display text-3xl text-foreground">{t('lpPage.notSure')}</h2>
          <p className="mt-3 text-muted-foreground">{t('lpPage.notSureDesc')}</p>
          <Button variant="gradient" size="lg" asChild className="mt-6 group">
            <Link to="/library">
              {t('lpPage.browseLibrary')}
              <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default LearningPaths;
