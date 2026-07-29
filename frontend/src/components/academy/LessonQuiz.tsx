"use client";

import { useState } from "react";
import { CheckCircle2, XCircle, Trophy, RefreshCw, ChevronRight } from "lucide-react";

export interface QuizQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  explanation?: string;
}

interface LessonQuizProps {
  questions: QuizQuestion[];
  lessonTitle: string;
}

type AnswerState = "unanswered" | "correct" | "wrong";

export default function LessonQuiz({ questions, lessonTitle }: LessonQuizProps) {
  const [currentQ, setCurrentQ] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [answers, setAnswers] = useState<AnswerState[]>(Array(questions.length).fill("unanswered"));
  const [showExplanation, setShowExplanation] = useState(false);
  const [quizComplete, setQuizComplete] = useState(false);

  const question = questions[currentQ];
  const answerState = answers[currentQ];
  const score = answers.filter((a) => a === "correct").length;

  const handleSelect = (optionIndex: number) => {
    if (answerState !== "unanswered") return;
    setSelectedOption(optionIndex);
    const isCorrect = optionIndex === question.correctIndex;
    const newAnswers = [...answers];
    newAnswers[currentQ] = isCorrect ? "correct" : "wrong";
    setAnswers(newAnswers);
    setShowExplanation(true);
  };

  const handleNext = () => {
    if (currentQ < questions.length - 1) {
      setCurrentQ(currentQ + 1);
      setSelectedOption(null);
      setShowExplanation(false);
    } else {
      setQuizComplete(true);
    }
  };

  const handleReset = () => {
    setCurrentQ(0);
    setSelectedOption(null);
    setAnswers(Array(questions.length).fill("unanswered"));
    setShowExplanation(false);
    setQuizComplete(false);
  };

  const getScoreMessage = () => {
    if (score === questions.length) return { emoji: "🏆", msg: "Perfect score! You've mastered this topic.", color: "text-yellow-500" };
    if (score >= questions.length * 0.8) return { emoji: "🎉", msg: "Excellent! Great understanding of the topic.", color: "text-green-500" };
    if (score >= questions.length * 0.6) return { emoji: "👍", msg: "Good effort! Review a few points and try again.", color: "text-blue-500" };
    return { emoji: "📚", msg: "Keep studying! Re-read the lesson and try again.", color: "text-foreground-muted" };
  };

  // Results screen
  if (quizComplete) {
    const { emoji, msg, color } = getScoreMessage();
    return (
      <div className="not-prose rounded-2xl border border-border-light bg-background-card p-6 sm:p-8">
        <div className="text-center">
          <div className="mb-4 text-6xl">{emoji}</div>
          <h3 className="mb-2 text-2xl font-bold">Quiz Complete!</h3>
          <p className={`text-lg font-semibold ${color}`}>
            {score} / {questions.length} correct
          </p>
          <p className="mt-2 text-sm text-foreground-muted">{msg}</p>
        </div>

        {/* Score breakdown */}
        <div className="mt-6 space-y-2">
          {questions.map((q, i) => (
            <div key={i} className="flex items-center gap-3 rounded-lg bg-background-secondary/50 px-4 py-2.5 text-sm">
              {answers[i] === "correct" ? (
                <CheckCircle2 className="h-4 w-4 shrink-0 text-green-500" />
              ) : (
                <XCircle className="h-4 w-4 shrink-0 text-red-500" />
              )}
              <span className="text-foreground-muted truncate">{q.question}</span>
            </div>
          ))}
        </div>

        <button
          onClick={handleReset}
          className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl border border-accent bg-accent-light px-4 py-3 text-sm font-semibold text-accent transition-all hover:bg-accent hover:text-foreground-inverse dark:bg-accent-light/10"
        >
          <RefreshCw className="h-4 w-4" />
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="not-prose rounded-2xl border border-border-light bg-background-card p-6 sm:p-8">
      {/* Quiz Header */}
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Trophy className="h-5 w-5 text-accent" />
          <h3 className="text-lg font-bold">Test Your Knowledge</h3>
        </div>
        <span className="rounded-full bg-background-secondary px-3 py-1 text-xs font-semibold text-foreground-muted">
          {currentQ + 1} / {questions.length}
        </span>
      </div>

      {/* Progress Bar */}
      <div className="mb-6 h-1.5 w-full rounded-full bg-background-secondary">
        <div
          className="h-1.5 rounded-full bg-accent transition-all duration-500"
          style={{ width: `${((currentQ + (answerState !== "unanswered" ? 1 : 0)) / questions.length) * 100}%` }}
        />
      </div>

      {/* Question */}
      <p className="mb-5 text-base font-semibold leading-relaxed sm:text-lg">{question.question}</p>

      {/* Options */}
      <div className="space-y-3">
        {question.options.map((option, i) => {
          const isSelected = selectedOption === i;
          const isCorrect = i === question.correctIndex;
          let optionClass = "border-border-light bg-background-secondary/50 hover:border-accent hover:bg-accent-light/30 dark:hover:bg-accent-light/10";

          if (answerState !== "unanswered") {
            if (isCorrect) {
              optionClass = "border-green-500 bg-green-50 dark:bg-green-900/20";
            } else if (isSelected && !isCorrect) {
              optionClass = "border-red-400 bg-red-50 dark:bg-red-900/20";
            } else {
              optionClass = "border-border-light bg-background-secondary/30 opacity-60";
            }
          }

          return (
            <button
              key={i}
              onClick={() => handleSelect(i)}
              disabled={answerState !== "unanswered"}
              className={`flex w-full items-center gap-3 rounded-xl border px-4 py-3.5 text-left text-sm transition-all disabled:cursor-default ${optionClass}`}
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-current text-xs font-bold">
                {String.fromCharCode(65 + i)}
              </span>
              <span className="flex-1">{option}</span>
              {answerState !== "unanswered" && isCorrect && (
                <CheckCircle2 className="h-4 w-4 shrink-0 text-green-500" />
              )}
              {answerState !== "unanswered" && isSelected && !isCorrect && (
                <XCircle className="h-4 w-4 shrink-0 text-red-500" />
              )}
            </button>
          );
        })}
      </div>

      {/* Explanation */}
      {showExplanation && (
        <div className={`mt-5 rounded-xl border p-4 text-sm leading-relaxed ${
          answerState === "correct"
            ? "border-green-500/30 bg-green-50 text-green-800 dark:bg-green-900/20 dark:text-green-300"
            : "border-red-400/30 bg-red-50 text-red-800 dark:bg-red-900/20 dark:text-red-300"
        }`}>
          <p className="font-semibold mb-1">
            {answerState === "correct" ? "✅ Correct!" : "❌ Not quite."}
          </p>
          {question.explanation && <p>{question.explanation}</p>}
        </div>
      )}

      {/* Next Button */}
      {answerState !== "unanswered" && (
        <button
          onClick={handleNext}
          className="btn-primary mt-5 w-full justify-center"
        >
          {currentQ < questions.length - 1 ? "Next Question" : "See Results"}
          <ChevronRight className="h-4 w-4" />
        </button>
      )}
    </div>
  );
}
