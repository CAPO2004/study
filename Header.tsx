import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import { Button } from '@/components/ui/button';
import { Moon, Sun, Globe } from 'lucide-react';
import { Link } from 'wouter';

export default function Header() {
  const { language, toggleLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo and Brand */}
        <Link href="/" className="flex items-center gap-3 smooth-transition hover:opacity-80">
          <img src="/images/logo.png" alt="CodeTraining" className="h-10 w-10" />
          <span className="font-display font-bold text-xl gradient-text hidden sm:inline">
            {t('hero.title')}
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm font-medium smooth-transition hover:text-primary">
            {t('nav.home')}
          </Link>
          <Link href="/lessons" className="text-sm font-medium smooth-transition hover:text-primary">
            {t('nav.lessons')}
          </Link>
          <Link href="/examples" className="text-sm font-medium smooth-transition hover:text-primary">
            {t('nav.examples')}
          </Link>
          <Link href="/quiz" className="text-sm font-medium smooth-transition hover:text-primary">
            {t('nav.quiz')}
          </Link>
        </nav>

        {/* Controls */}
        <div className="flex items-center gap-2">
          {/* Theme Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="smooth-transition"
            title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
          >
            {theme === 'dark' ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>

          {/* Language Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleLanguage}
            className="smooth-transition"
            title={language === 'en' ? 'العربية' : 'English'}
          >
            <Globe className="h-5 w-5" />
            <span className="ml-1 text-xs font-bold">{language.toUpperCase()}</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
