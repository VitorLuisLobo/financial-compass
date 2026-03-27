import { Link } from "react-router-dom";
import { BookOpen, TrendingUp, Mail, ArrowRight, Instagram, Compass, Library } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import profilePhoto from "@/assets/profile-photo.png";

const Links = () => {
  const { t } = useLanguage();

  const links = [
    { icon: Compass, label: t('links.startHere'), to: "/comece-aqui", internal: true },
    { icon: BookOpen, label: t('links.blog'), to: "/blog", internal: true },
    { icon: Library, label: t('links.library'), to: "/library", internal: true },
    { icon: TrendingUp, label: t('links.learningPaths'), to: "/learning-paths", internal: true },
    { icon: Mail, label: t('links.contact'), to: "/contact", internal: true },
    { icon: Instagram, label: t('links.instagram'), to: "https://www.instagram.com/gabrodriguesm/", internal: false },
  ];

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-16">
      <div className="w-full max-w-sm px-4">
        {/* Profile */}
        <div className="text-center mb-8">
          <img
            src={profilePhoto}
            alt="Gabriela Rodrigues"
            className="mx-auto h-24 w-24 rounded-full object-cover border-2 border-accent/20"
          />
          <h1 className="mt-4 text-xl font-bold text-foreground" style={{ fontFamily: 'var(--font-display)' }}>
            Gabriela Rodrigues
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            {t('links.bio')}
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-3">
          {links.map((link) => {
            const content = (
              <div className="group flex items-center gap-3 rounded-2xl border border-border/40 bg-card/30 p-4 transition-all duration-300 hover:bg-card/80 hover:border-border hover:-translate-y-0.5 cursor-pointer">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10">
                  <link.icon className="h-5 w-5 text-accent" />
                </div>
                <span className="flex-1 text-sm font-medium text-foreground">{link.label}</span>
                <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform duration-300 group-hover:translate-x-1 group-hover:text-accent" />
              </div>
            );

            return link.internal ? (
              <Link key={link.to} to={link.to}>{content}</Link>
            ) : (
              <a key={link.to} href={link.to} target="_blank" rel="noopener noreferrer">{content}</a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Links;
