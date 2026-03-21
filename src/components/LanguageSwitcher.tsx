import { useLanguage } from '@/i18n/LanguageContext';
import type { Language } from '@/i18n/translations';

const languages: { code: Language; flag: string; label: string }[] = [
  { code: 'pt', flag: '🇧🇷', label: 'Português' },
  { code: 'en', flag: '🇺🇸', label: 'English' },
  { code: 'es', flag: '🇪🇸', label: 'Español' },
];

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1">
      {languages.map(({ code, flag, label }) => (
        <button
          key={code}
          onClick={() => setLanguage(code)}
          title={label}
          className={`flex h-8 w-8 items-center justify-center rounded-full text-base transition-all duration-200 ${
            language === code
              ? 'bg-muted/60 scale-110 ring-1 ring-border/40'
              : 'opacity-50 hover:opacity-100 hover:bg-muted/30'
          }`}
          aria-label={label}
        >
          {flag}
        </button>
      ))}
    </div>
  );
}
