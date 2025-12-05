import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { lessons } from '@/lib/lessonsData';
import { ChevronRight } from 'lucide-react';

export default function LessonsPage() {
  const { language, t } = useLanguage();
  const [selectedConcept, setSelectedConcept] = useState<string | null>(null);
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);

  const concepts = Object.entries(lessons).map(([key, value]) => ({
    id: key,
    titleEn: value.titleEn,
    titleAr: value.titleAr,
  }));

  const currentConcept = selectedConcept ? lessons[selectedConcept] : null;
  const currentTopic = selectedTopic && currentConcept
    ? currentConcept.topics.find(t => t.id === selectedTopic)
    : null;

  const getTitle = (item: any) => language === 'ar' ? item.titleAr : item.titleEn;
  const getContent = (item: any) => language === 'ar' ? item.contentAr : item.contentEn;

  return (
    <div className="min-h-screen py-12 bg-gradient-blue-light">
      <div className="container">
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 text-center gradient-text">
          {t('lessons.title')}
        </h1>
        <p className="text-lg text-muted-foreground text-center mb-12">
          {t('lessons.subtitle')}
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
                  {getTitle(concept)}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {lessons[concept.id].topics.length} {t('lessons.topics')}
                </p>
                <div className="flex items-center text-primary font-semibold">
                  {t('lessons.selectTopic')}
                  <ChevronRight className="h-5 w-5 ml-2" />
                </div>
              </Card>
            ))}
          </div>
        ) : !selectedTopic ? (
          // Topics Selection
          <div>
            <Button
              variant="outline"
              onClick={() => setSelectedConcept(null)}
              className="mb-8"
            >
              ← {t('nav.home')}
            </Button>
            <h2 className="text-3xl font-display font-bold mb-8 text-foreground">
              {getTitle(lessons[selectedConcept])}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {lessons[selectedConcept].topics.map((topic) => (
                <Card
                  key={topic.id}
                  className="p-6 cursor-pointer smooth-transition hover-lift bg-white dark:bg-card border-2 border-transparent hover:border-primary"
                  onClick={() => setSelectedTopic(topic.id)}
                >
                  <h3 className="text-xl font-display font-bold text-foreground mb-4">
                    {getTitle(topic)}
                  </h3>
                  <p className="text-muted-foreground line-clamp-3">
                    {getContent(topic)}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        ) : (
          // Topic Content
          <div>
            <Button
              variant="outline"
              onClick={() => setSelectedTopic(null)}
              className="mb-8"
            >
              ← {t('lessons.title')}
            </Button>
            <Card className="bg-white dark:bg-card p-8 border-l-4 border-primary">
              <h2 className="text-4xl font-display font-bold mb-6 text-foreground">
                {getTitle(currentTopic!)}
              </h2>
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-lg text-foreground leading-relaxed whitespace-pre-wrap">
                  {getContent(currentTopic!)}
                </p>
              </div>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}
