import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { quizzes } from '@/lib/lessonsData';
import { ChevronRight, CheckCircle, XCircle } from 'lucide-react';
import { Link } from 'wouter';

export default function QuizPage() {
  const { language, t } = useLanguage();
  const [selectedConcept, setSelectedConcept] = useState<string | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);

  const concepts = Object.keys(quizzes).map((key) => ({
    id: key,
    title: {
      inputData: { en: 'How to Input Data', ar: 'كيفية إدخال البيانات' },
      basicOperators: { en: 'Basic Numeric Operators', ar: 'العمليات الحسابية الأساسية' },
      conditions: { en: 'Conditions', ar: 'الشروط' },
      loops: { en: 'Loops', ar: 'الحلقات' },
    }[key as keyof typeof quizzes] || { en: key, ar: key },
  }));

  const currentQuiz = selectedConcept ? quizzes[selectedConcept as keyof typeof quizzes] : null;
  const currentQuestionData = currentQuiz ? currentQuiz[currentQuestion] : null;

  const handleSelectAnswer = (index: number) => {
    if (!showResults) {
      const newAnswers = [...selectedAnswers];
      newAnswers[currentQuestion] = index;
      setSelectedAnswers(newAnswers);
    }
  };

  const handleNext = () => {
    if (currentQuestion < currentQuiz!.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleRetake = () => {
    setCurrentQuestion(0);
    setSelectedAnswers([]);
    setShowResults(false);
  };

  const handleReset = () => {
    setSelectedConcept(null);
    setCurrentQuestion(0);
    setSelectedAnswers([]);
    setShowResults(false);
  };

  const correctCount = selectedAnswers.filter(
    (answer, index) => answer === currentQuiz![index].correctAnswer
  ).length;

  const getQuestion = (item: any) => language === 'ar' ? item.questionAr : item.questionEn;
  const getExplanation = (item: any) => language === 'ar' ? item.explanationAr : item.explanationEn;
  const getOptions = (item: any) => language === 'ar' ? item.options.ar : item.options.en;

  return (
    <div className="min-h-screen py-12 bg-gradient-to-b from-blue-50 to-cyan-50 dark:from-slate-900 dark:to-slate-800">
      <div className="container">
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 text-center gradient-text">
          {t('quiz.title')}
        </h1>
        <p className="text-lg text-muted-foreground text-center mb-12">
          {t('quiz.subtitle')}
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
                  {quizzes[concept.id as keyof typeof quizzes].length} {t('quiz.question')}
                </p>
                <div className="flex items-center text-primary font-semibold">
                  {t('quiz.selectConcept')}
                  <ChevronRight className="h-5 w-5 ml-2" />
                </div>
              </Card>
            ))}
          </div>
        ) : !showResults ? (
          // Quiz Questions
          <div>
            <Button
              variant="outline"
              onClick={handleReset}
              className="mb-8"
            >
              ← {t('nav.home')}
            </Button>

            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-2xl font-display font-bold text-foreground">
                  {t('quiz.question')} {currentQuestion + 1} {t('quiz.of')} {currentQuiz?.length}
                </h2>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-blue-600 to-cyan-500 h-2 rounded-full smooth-transition"
                  style={{ width: `${((currentQuestion + 1) / currentQuiz!.length) * 100}%` }}
                />
              </div>
            </div>

            {/* Question */}
            <Card className="bg-white dark:bg-card p-8 border-l-4 border-primary mb-8">
              <h3 className="text-2xl font-display font-bold text-foreground mb-6">
                {getQuestion(currentQuestionData!)}
              </h3>

              {/* Options */}
              <div className="space-y-4">
                {getOptions(currentQuestionData!).map((option: string, index: number) => (
                  <button
                    key={index}
                    onClick={() => handleSelectAnswer(index)}
                    className={`w-full p-4 rounded-lg border-2 smooth-transition text-left font-medium ${
                      selectedAnswers[currentQuestion] === index
                        ? 'border-primary bg-primary/10'
                        : 'border-border hover:border-primary/50'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </Card>

            {/* Navigation */}
            <div className="flex justify-between items-center">
              <Button
                variant="outline"
                onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
                disabled={currentQuestion === 0}
              >
                ← {t('quiz.question')} {currentQuestion}
              </Button>
              <Button
                onClick={handleNext}
                disabled={selectedAnswers[currentQuestion] === undefined}
                className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600"
              >
                {currentQuestion === currentQuiz!.length - 1 ? t('quiz.finish') : t('quiz.next')}
              </Button>
            </div>
          </div>
        ) : (
          // Results
          <div>
            <Card className="bg-white dark:bg-card p-8 border-l-4 border-primary mb-8">
              <h2 className="text-3xl font-display font-bold text-center mb-6 text-foreground">
                {t('quiz.score')}
              </h2>
              <div className="text-center mb-8">
                <div className="text-6xl font-bold gradient-text mb-4">
                  {correctCount}/{currentQuiz?.length}
                </div>
                <p className="text-xl text-muted-foreground">
                  {Math.round((correctCount / currentQuiz!.length) * 100)}%
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                    <span className="font-semibold text-foreground">{t('quiz.correct')}</span>
                  </div>
                  <p className="text-3xl font-bold text-green-600">{correctCount}</p>
                </div>
                <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg border border-red-200 dark:border-red-800">
                  <div className="flex items-center gap-2 mb-2">
                    <XCircle className="h-6 w-6 text-red-600" />
                    <span className="font-semibold text-foreground">{t('quiz.incorrect')}</span>
                  </div>
                  <p className="text-3xl font-bold text-red-600">
                    {currentQuiz!.length - correctCount}
                  </p>
                </div>
              </div>

              {/* Detailed Results */}
              <div className="space-y-6 mb-8">
                {currentQuiz?.map((question, index) => {
                  const isCorrect = selectedAnswers[index] === question.correctAnswer;
                  return (
                    <div
                      key={question.id}
                      className={`p-6 rounded-lg border-l-4 ${
                        isCorrect
                          ? 'bg-green-50 dark:bg-green-900/20 border-green-500'
                          : 'bg-red-50 dark:bg-red-900/20 border-red-500'
                      }`}
                    >
                      <div className="flex items-start gap-3 mb-3">
                        {isCorrect ? (
                          <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                        ) : (
                          <XCircle className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
                        )}
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground mb-2">
                            {t('quiz.question')} {index + 1}: {getQuestion(question)}
                          </h4>
                          <p className="text-sm text-muted-foreground mb-2">
                            {t('quiz.correct')}: {getOptions(question)[question.correctAnswer]}
                          </p>
                          {!isCorrect && (
                            <p className="text-sm text-muted-foreground mb-2">
                              Your answer: {getOptions(question)[selectedAnswers[index]]}
                            </p>
                          )}
                          <p className="text-sm italic text-foreground">
                            {getExplanation(question)}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Card>

            {/* Actions */}
            <div className="flex justify-center gap-4">
              <Button
                onClick={handleRetake}
                className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600"
              >
                {t('quiz.retake')}
              </Button>
              <Link href="/">
                <Button variant="outline">
                  {t('quiz.goHome')}
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
