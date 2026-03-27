import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, TrendingUp, PiggyBank, Target, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";
import ScrollReveal from "@/components/ScrollReveal";

const StartHere = () => {
  const { t } = useLanguage();

  const steps = [
    {
      number: "01",
      icon: PiggyBank,
      title: t('start.step1Title'),
      desc: t('start.step1Desc'),
      link: "/library/financial-organization",
      cta: t('start.explore'),
    },
    {
      number: "02",
      icon: BookOpen,
      title: t('start.step2Title'),
      desc: t('start.step2Desc'),
      link: "/library/investing-basics",
      cta: t('start.explore'),
    },
    {
      number: "03",
      icon: TrendingUp,
      title: t('start.step3Title'),
      desc: t('start.step3Desc'),
      link: "/learning-paths",
      cta: t('start.startPath'),
    },
    {
      number: "04",
      icon: Target,
      title: t('start.step4Title'),
      desc: t('start.step4Desc'),
      link: "/library/financial-products",
      cta: t('start.explore'),
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/[0.03] via-transparent to-transparent" />
        <div className="container relative text-center">
          <ScrollReveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent">
              {t('start.badge')}
            </span>
            <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
              {t('start.title')}
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed">
              {t('start.desc')}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Steps */}
      <section className="pb-20">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2">
            {steps.map((step, i) => (
              <ScrollReveal key={step.number} delay={i * 100}>
                <div className="group flex flex-col h-full rounded-2xl border border-border/40 bg-card/30 p-8 transition-all duration-500 hover:bg-card/80 hover:border-border hover:-translate-y-1">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-3xl font-bold text-accent/20" style={{ fontFamily: 'var(--font-display)' }}>
                      {step.number}
                    </span>
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10">
                      <step.icon className="h-5 w-5 text-accent" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground" style={{ fontFamily: 'var(--font-display)' }}>
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">
                    {step.desc}
                  </p>
                  <Link
                    to={step.link}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline group"
                  >
                    {step.cta}
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram CTA */}
      <section className="py-20">
        <div className="container">
          <ScrollReveal>
            <div className="rounded-3xl border border-border/40 bg-card/30 px-8 py-16 md:px-20 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 mb-6">
                <Instagram className="h-6 w-6 text-accent" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
                {t('start.instaCta')}
              </h2>
              <p className="mx-auto mt-4 max-w-md text-muted-foreground">
                {t('start.instaDesc')}
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90 px-8 group">
                  <a href="https://www.instagram.com/gabrodriguesm/" target="_blank" rel="noopener noreferrer">
                    {t('start.followInsta')}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full border-border/60 px-8 hover:bg-muted/50">
                  <Link to="/blog">
                    {t('start.readBlog')}
                  </Link>
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default StartHere;
