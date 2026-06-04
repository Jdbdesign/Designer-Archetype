import { useState, useCallback } from "react";
import { ARCHETYPE_ORDER } from "../data/archetypes";

function randomWisdomIndex() {
  return Math.floor(Math.random() * 10);
}

const initialState = {
  screen: "intro",
  currentQuestion: 0,
  answers: [],
  selectedOption: null,
  result: null,
  scores: {},
  isAnimating: false,
  currentWisdomIndex: {},
};

function calculateResult(answers) {
  const scores = {};
  answers.forEach((a) => { scores[a] = (scores[a] || 0) + 1; });
  ARCHETYPE_ORDER.forEach((key) => { if (!scores[key]) scores[key] = 0; });
  const winner = Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
  return { winner, scores };
}

export default function useQuizState() {
  const [state, setState] = useState(initialState);

  const startQuiz = useCallback(() => {
    setState({ ...initialState, screen: "quiz" });
  }, []);

  const selectOption = useCallback((letter, archetypeKey) => {
    setState((prev) => {
      if (prev.selectedOption || prev.isAnimating) return prev;
      return { ...prev, selectedOption: letter };
    });

    setTimeout(() => {
      setState((prev) => {
        const newAnswers = [...prev.answers, archetypeKey];
        const isLast = prev.currentQuestion >= 9;

        if (isLast) {
          return { ...prev, answers: newAnswers, isAnimating: true };
        }
        return {
          ...prev,
          answers: newAnswers,
          isAnimating: true,
          selectedOption: null,
        };
      });

      setTimeout(() => {
        setState((prev) => {
          const isLast = prev.currentQuestion >= 9;
          if (isLast) {
            return { ...prev, screen: "calculating", isAnimating: false };
          }
          return {
            ...prev,
            currentQuestion: prev.currentQuestion + 1,
            isAnimating: false,
            selectedOption: null,
          };
        });
      }, 200);
    }, 500);
  }, []);

  const showResult = useCallback(() => {
    setState((prev) => {
      const { winner, scores } = calculateResult(prev.answers);
      const wisdomIndex = {};
      ARCHETYPE_ORDER.forEach((k) => { wisdomIndex[k] = randomWisdomIndex(); });
      return { ...prev, screen: "result", result: winner, scores, currentWisdomIndex: wisdomIndex };
    });
  }, []);

  const restartQuiz = useCallback(() => {
    setState(initialState);
  }, []);

  const cycleWisdom = useCallback((archetypeKey) => {
    setState((prev) => ({
      ...prev,
      currentWisdomIndex: {
        ...prev.currentWisdomIndex,
        [archetypeKey]: ((prev.currentWisdomIndex[archetypeKey] ?? 0) + 1) % 10,
      },
    }));
  }, []);

  return { state, startQuiz, selectOption, showResult, restartQuiz, cycleWisdom };
}
