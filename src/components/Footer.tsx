import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border/20">
      <div className="container py-16">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xs">
            <h3 className="text-lg font-bold text-foreground" style={{ fontFamily: 'var(--font-display)' }}>
              Gabriela Rodrigues
            </h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              {t('footer.desc')}
            </p>
          </div>

          <div className="flex gap-16">
            <div>
              <h4 className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground mb-4">{t('footer.navigate')}</h4>
              <div className="flex flex-col gap-3">
                {[
                  { label: t('footer.blog'), path: "/blog" },
                  { label: t('footer.library'), path: "/library" },
                  { label: t('footer.learningPaths'), path: "/learning-paths" },
                  { label: t('footer.projects'), path: "/projects" },
                ].map((item) => (
                  <Link key={item.path} to={item.path} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground mb-4">{t('footer.connect')}</h4>
              <div className="flex flex-col gap-3">
                <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {t('footer.about')}
                </Link>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {t('footer.contact')}
                </Link>
                <a href="mailto:contact@financehub.com" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Email
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-border/20 text-xs text-muted-foreground/50">
          © {new Date().getFullYear()} Gabriela Rodrigues. {t('footer.rights')}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
