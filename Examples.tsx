import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { examples } from '@/lib/lessonsData';
import { ChevronRight } from 'lucide-react';

export default function ExamplesPage() {
  const { language, t } = useLanguage();
  const [selectedConcept, setSelectedConcept] = useState<string | null>(null);
  const [selectedExample, setSelectedExample] = useState<string | null>(null);

  const concepts = Object.keys(examples).map((key) => ({
    id: key,
    title: {
      inputData: { en: 'How to Input Data', ar: 'كيفية إدخال البيانات' },
      basicOperators: { en: 'Basic Numeric Operators', ar: 'العمليات الحسابية الأساسية' },
      conditions: { en: 'Conditions', ar: 'الشروط' },
      loops: { en: 'Loops', ar: 'الحلقات' },
    }[key as keyof typeof examples] || { en: key, ar: key },
  }));

  const currentConcept = selectedConcept ? examples[selectedConcept as keyof typeof examples] : null;
  const currentExample = selectedExample && currentConcept
    ? currentConcept.find(e => e.id === selectedExample)
    : null;

  const getTitle = (item: any) => language === 'ar' ? item.titleAr : item.titleEn;
  const getDescription = (item: any) => language === 'ar' ? item.descriptionAr : item.descriptionEn;
  const getCode = (item: any) => language === 'ar' ? item.codeAr : item.codeEn;
  const getOutput = (item: any) => language === 'ar' ? item.outputAr : item.outputEn;

  return (
    <div className="min-h-screen py-12 bg-background">
      <div className="container">
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 text-center gradient-text">
          {t('examples.title')}
        </h1>
        <p className="text-lg text-muted-foreground text-center mb-12">
          {t('examples.subtitle')}
        </p>

        {!selectedConcept ? (
          // Concepts Selection
          <div className="grid md:grid-cols-2 gap-6">
            {concepts.map((concept) => (
              <Card
                key={concept.id}
                className="p-6 cursor-pointer smooth-transition hover-lift bg-white dark:bg-card border-2 border-transparent hover:border-primary"
                onClick={() => setSelectedConcept(concept.id)}
              >
                <h3 className="text-xl font-display font-bold text-foreground mb-2">
                  {language === 'ar' ? concept.title.ar : concept.title.en}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {examples[concept.id as keyof typeof examples].length} {t('examples.title')}
                </p>
                <div className="flex items-center text-primary font-semibold">
                  {t('examples.selectConcept')}
                  <ChevronRight className="h-5 w-5 ml-2" />
                </div>
              </Card>
            ))}
          </div>
        ) : !selectedExample ? (
          // Examples Selection
          <div>
            <Button
              variant="outline"
              onClick={() => setSelectedConcept(null)}
              className="mb-8"
            >
              ← {t('nav.home')}
            </Button>
            <h2 className="text-3xl font-display font-bold mb-8 text-foreground">
              {concepts.find(c => c.id === selectedConcept)?.title[language === 'ar' ? 'ar' : 'en']}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {currentConcept?.map((example) => (
                <Card
                  key={example.id}
                  className="p-6 cursor-pointer smooth-transition hover-lift bg-white dark:bg-card border-2 border-transparent hover:border-primary"
                  onClick={() => setSelectedExample(example.id)}
                >
                  <h3 className="text-xl font-display font-bold text-foreground mb-2">
                    {getTitle(example)}
                  </h3>
                  <p className="text-muted-foreground">
                    {getDescription(example)}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        ) : (
          // Example Content
          <div>
            <Button
              variant="outline"
              onClick={() => setSelectedExample(null)}
              className="mb-8"
            >
              ← {t('examples.title')}
            </Button>
            <Card className="bg-white dark:bg-card p-8 border-l-4 border-primary mb-6">
              <h2 className="text-3xl font-display font-bold mb-2 text-foreground">
                {getTitle(currentExample!)}
              </h2>
              <p className="text-muted-foreground mb-6">
                {getDescription(currentExample!)}
              </p>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Code */}
              <Card className="bg-slate-900 dark:bg-slate-950 p-6 border-primary">
                <h3 className="text-lg font-semibold text-white mb-4">Code</h3>
                <pre className="text-green-400 text-sm overflow-x-auto">
                  <code>{getCode(currentExample!)}</code>
                </pre>
              </Card>

              {/* Output */}
              <Card className="bg-slate-900 dark:bg-slate-950 p-6 border-primary">
                <h3 className="text-lg font-semibold text-white mb-4">Output</h3>
                <pre className="text-cyan-400 text-sm overflow-x-auto">
                  <code>{getOutput(currentExample!)}</code>
                </pre>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
