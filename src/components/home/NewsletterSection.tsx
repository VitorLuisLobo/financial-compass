import ScrollReveal from "@/components/ScrollReveal";
import NewsletterSignup from "@/components/NewsletterSignup";
import { useLanguage } from "@/i18n/LanguageContext";

const NewsletterSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-36">
      <div className="container">
        <ScrollReveal>
          <div className="rounded-3xl border border-border/40 bg-card/30 px-8 py-20 md:px-20 text-center">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">{t('newsletter.label')}</p>
            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
              {t('newsletter.title')}
            </h2>
            <p className="mx-auto mt-4 max-w-md text-muted-foreground">
              {t('newsletter.desc')}
            </p>
            <div className="mx-auto mt-10 max-w-md">
              <NewsletterSignup />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default NewsletterSection;
