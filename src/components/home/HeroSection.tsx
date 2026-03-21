import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.png";
import { useLanguage } from "@/i18n/LanguageContext";

const HeroSection = () => {
  const { t } = useLanguage();

  const stats = [
    { value: "10+", label: t('hero.stat1') },
    { value: "500+", label: t('hero.stat2') },
    { value: "50+", label: t('hero.stat3') },
  ];

  return (
    <section className="relative min-h-[100vh] flex items-center">
      <div className="absolute inset-0 bg-gradient-to-b from-accent/[0.03] via-transparent to-transparent" />

      <div className="container relative py-20 md:py-0">
        <div className="grid min-h-[85vh] grid-cols-1 items-center gap-16 lg:grid-cols-12 lg:gap-20">
          <div className="flex flex-col lg:col-span-7">
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-muted-foreground opacity-0 animate-fade-up">
              {t('hero.tagline')}
            </p>

            <h1 className="mt-8 opacity-0 animate-fade-up animation-delay-200" style={{ fontFamily: 'var(--font-display)' }}>
              <span className="block text-[3rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5.5rem] xl:text-[6.5rem] font-bold text-foreground leading-[0.95] tracking-tight">
                {t('hero.line1')}
              </span>
              <span className="block text-[3rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5.5rem] xl:text-[6.5rem] font-bold text-foreground leading-[0.95] tracking-tight mt-2">
                {t('hero.line2')}
              </span>
              <span className="block text-[3rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5.5rem] xl:text-[6.5rem] font-bold leading-[0.95] tracking-tight mt-2">
                <span className="text-foreground mx-0 px-0">{t('hero.line3a')}</span>
                <span className="text-accent">{t('hero.line3b')}</span>
              </span>
            </h1>

            <p className="mt-10 max-w-md text-lg text-muted-foreground leading-relaxed opacity-0 animate-fade-up animation-delay-300">
              {t('hero.description')}
            </p>

            <div className="mt-10 flex flex-wrap gap-4 opacity-0 animate-fade-up animation-delay-400">
              <Button asChild size="lg" className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-6 text-base font-semibold transition-all duration-300 group">
                <Link to="/blog">
                  {t('hero.cta1')}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full border-border/60 px-8 py-6 text-base font-medium hover:bg-muted/50 transition-all duration-300">
                <Link to="/library">
                  {t('hero.cta2')}
                </Link>
              </Button>
            </div>

            <div className="mt-16 flex gap-12 opacity-0 animate-fade-up animation-delay-600">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="text-3xl md:text-4xl font-bold text-foreground tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
                    {stat.value}
                  </span>
                  <span className="mt-1 text-xs uppercase tracking-[0.15em] text-muted-foreground">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex items-center justify-center lg:col-span-5 opacity-0 animate-fade-up animation-delay-300">
            <div className="relative w-full max-w-[400px] lg:max-w-[480px]">
              <div className="overflow-hidden rounded-3xl bg-muted/30">
                <img
                  src={profilePhoto}
                  alt="Financial advisor profile"
                  className="w-full h-auto object-contain"
                  style={{ filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.3))' }}
                  loading="eager"
                />
              </div>
              <div className="absolute -bottom-6 left-[10%] right-[10%] h-12 rounded-full bg-accent/5 blur-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
