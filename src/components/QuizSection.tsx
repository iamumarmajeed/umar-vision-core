import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, CheckCircle, XCircle, RotateCcw } from "lucide-react";
import { QuizQuestion, getShuffledQuestions } from "@/data/quizQuestions";

export const QuizSection = () => {
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(0);

  useEffect(() => {
    setQuestions(getShuffledQuestions());
  }, []);

  const currentQuestion = questions[currentIndex];

  const handleAnswerSelect = (optionIndex: number) => {
    if (showResult) return;
    
    setSelectedAnswer(optionIndex);
    setShowResult(true);
    setAnswered(answered + 1);
    
    if (optionIndex === currentQuestion?.correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    setSelectedAnswer(null);
    setShowResult(false);
    setCurrentIndex((currentIndex + 1) % questions.length);
  };

  const handleReset = () => {
    setQuestions(getShuffledQuestions());
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setAnswered(0);
  };

  if (!currentQuestion) {
    return (
      <section id="quiz" className="py-20 px-4 md:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center animate-loading">
            <Brain className="w-16 h-16 mx-auto mb-4 text-primary" />
            <p className="text-xl text-muted-foreground">Loading quiz questions...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="quiz" className="py-20 px-4 md:px-8">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12 fade-in-up">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Brain className="w-10 h-10 text-primary animate-pulse-glow" />
            <h2 className="text-4xl md:text-5xl font-bold gradient-text">Test Your Skills</h2>
          </div>
          <p className="text-xl text-muted-foreground">
            Challenge yourself with questions on DSA, System Design, ML, and more!
          </p>
        </div>

        {/* Score Display */}
        <div className="flex justify-center gap-6 mb-8">
          <div className="text-center">
            <p className="text-sm text-muted-foreground">Score</p>
            <p className="text-3xl font-bold text-primary">{score}/{answered}</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-muted-foreground">Accuracy</p>
            <p className="text-3xl font-bold text-primary">
              {answered > 0 ? Math.round((score / answered) * 100) : 0}%
            </p>
          </div>
        </div>

        {/* Quiz Card */}
        <Card className="glass hover-lift card-3d animate-glow-border">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardDescription className="text-primary font-semibold">
                {currentQuestion.category}
              </CardDescription>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleReset}
                className="gap-2"
              >
                <RotateCcw className="w-4 h-4" />
                Reset
              </Button>
            </div>
            <CardTitle className="text-2xl md:text-3xl leading-relaxed">
              {currentQuestion.question}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {currentQuestion.options.map((option, index) => {
              const isSelected = selectedAnswer === index;
              const isCorrect = index === currentQuestion.correctAnswer;
              const showCorrect = showResult && isCorrect;
              const showIncorrect = showResult && isSelected && !isCorrect;

              return (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={showResult}
                  className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-300 card-3d ${
                    showCorrect
                      ? "border-green-500 bg-green-500/10"
                      : showIncorrect
                      ? "border-red-500 bg-red-500/10"
                      : isSelected
                      ? "border-primary bg-primary/10"
                      : "border-border hover:border-primary hover:bg-primary/5"
                  } ${showResult ? "cursor-not-allowed" : "cursor-pointer"}`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-lg">{option}</span>
                    {showCorrect && <CheckCircle className="w-6 h-6 text-green-500" />}
                    {showIncorrect && <XCircle className="w-6 h-6 text-red-500" />}
                  </div>
                </button>
              );
            })}

            {/* Explanation */}
            {showResult && (
              <div className="mt-6 p-4 rounded-lg bg-primary/5 border border-primary/20 animate-fade-in">
                <p className="text-sm font-semibold text-primary mb-2">Explanation:</p>
                <p className="text-muted-foreground">{currentQuestion.explanation}</p>
              </div>
            )}

            {/* Next Button */}
            {showResult && (
              <Button
                onClick={handleNext}
                className="w-full mt-4 bg-primary hover:bg-primary/90 animate-pulse-glow"
                size="lg"
              >
                Next Question →
              </Button>
            )}
          </CardContent>
        </Card>

      </div>
    </section>
  );
};
