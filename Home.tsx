import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { Mail, Phone, Facebook, Instagram } from 'lucide-react';

export default function Home() {
  const { language, t } = useLanguage();
  const isArabic = language === 'ar';

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: 'url(/images/hero-bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background/80" />
        <div className="relative container z-10 text-center animate-fade-in">
          <img
            src="/images/logo.png"
            alt="CodeTraining"
            className="h-24 w-24 mx-auto mb-6 animate-bounce"
          />
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-4 gradient-text">
            {t('hero.title')}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-medium">
            {t('hero.subtitle')}
          </p>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t('hero.description')}
          </p>
          <Link href="/lessons">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-semibold px-8 py-6 text-lg smooth-transition hover-lift"
            >
              {t('hero.cta')}
            </Button>
          </Link>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 md:py-24 bg-gradient-blue-light">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className={isArabic ? 'md:order-2' : ''}>
              <h2 className="text-4xl font-display font-bold mb-6 text-primary">
                {t('vision.title')}
              </h2>
              <p className="text-lg text-foreground leading-relaxed">
                {t('vision.content')}
              </p>
            </div>
            <div className={`bg-white dark:bg-card rounded-lg p-8 shadow-lg smooth-transition hover:shadow-xl ${isArabic ? 'md:order-1' : ''}`}>
              <div className="h-64 bg-gradient-to-br from-blue-200 to-cyan-200 rounded-lg flex items-center justify-center">
                <span className="text-6xl">👁️</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-white dark:bg-card rounded-lg p-8 shadow-lg smooth-transition hover:shadow-xl">
                <div className="h-64 bg-gradient-to-br from-cyan-200 to-blue-200 rounded-lg flex items-center justify-center">
                  <span className="text-6xl">🎯</span>
                </div>
              </div>
            </div>
            <div className={isArabic ? 'md:order-2' : ''}>
              <h2 className="text-4xl font-display font-bold mb-6 text-primary">
                {t('mission.title')}
              </h2>
              <p className="text-lg text-foreground leading-relaxed">
                {t('mission.content')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Developer Section */}
      <section className="py-16 md:py-24 bg-gradient-blue-light">
        <div className="container">
          <h2 className="text-4xl font-display font-bold mb-12 text-center text-primary">
            {t('about.title')}
          </h2>
          <div className="max-w-2xl mx-auto bg-white dark:bg-card rounded-lg p-8 shadow-lg">
            <div className="text-center mb-6">
              <div className="h-32 w-32 mx-auto bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full flex items-center justify-center mb-6">
                <span className="text-6xl">👨‍💻</span>
              </div>
              <h3 className="text-2xl font-display font-bold text-foreground mb-2">
                {t('about.name')}
              </h3>
              <p className="text-lg text-muted-foreground">
                {t('about.bio')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <h2 className="text-4xl font-display font-bold mb-12 text-center text-primary">
            {t('contact.title')}
          </h2>
          <div className="max-w-2xl mx-auto grid md:grid-cols-2 gap-8">
            {/* Email */}
            <div className="bg-white dark:bg-card rounded-lg p-6 shadow-lg smooth-transition hover-lift">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-12 w-12 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-lg flex items-center justify-center">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{t('contact.email')}</h3>
              </div>
              <a
                href="mailto:capoca2004@gmail.com"
                className="text-primary hover:underline font-medium"
              >
                capoca2004@gmail.com
              </a>
            </div>

            {/* Phone */}
            <div className="bg-white dark:bg-card rounded-lg p-6 shadow-lg smooth-transition hover-lift">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-12 w-12 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-lg flex items-center justify-center">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{t('contact.phone')}</h3>
              </div>
              <a
                href="tel:+201090204281"
                className="text-primary hover:underline font-medium"
              >
                +20 109 020 4281
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="mt-12 text-center">
            <h3 className="text-xl font-semibold text-foreground mb-6">{t('contact.social')}</h3>
            <div className="flex justify-center gap-6">
              <a
                href="https://www.facebook.com/share/1BdmHNXFo3/"
                target="_blank"
                rel="noopener noreferrer"
                className="h-12 w-12 bg-gradient-to-br from-blue-600 to-blue-400 rounded-lg flex items-center justify-center text-white smooth-transition hover:scale-110"
                title="Facebook"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="https://www.instagram.com/capo.2004?igsh=MTBvZm9ldXNoM3p6bA=="
                target="_blank"
                rel="noopener noreferrer"
                className="h-12 w-12 bg-gradient-to-br from-pink-600 to-purple-600 rounded-lg flex items-center justify-center text-white smooth-transition hover:scale-110"
                title="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://capo2004.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="h-12 w-12 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-lg flex items-center justify-center text-white smooth-transition hover:scale-110 font-bold"
                title="Portfolio"
              >
                P
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
