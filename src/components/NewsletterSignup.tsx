import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Check } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const { t } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-3 py-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-accent/20 bg-accent/10">
          <Check className="h-5 w-5 text-accent" />
        </div>
        <p className="text-base font-semibold text-foreground">{t('newsletter.subscribed')}</p>
        <p className="text-sm text-muted-foreground">{t('newsletter.checkInbox')}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-3">
      <Input
        type="email"
        placeholder={t('newsletter.placeholder')}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="flex-1 rounded-full border-border/60 bg-background/50 px-5 text-foreground placeholder:text-muted-foreground/50 focus:border-accent"
      />
      <Button type="submit" className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90 px-6 group">
        {t('newsletter.subscribe')}
        <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </Button>
    </form>
  );
};

export default NewsletterSignup;
