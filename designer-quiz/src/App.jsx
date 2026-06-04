import "./styles/globals.css";
import "./styles/variables.css";
import useQuizState from "./hooks/useQuizState";
import CustomCursor from "./components/CustomCursor";
import IntroScreen from "./screens/IntroScreen";
import QuizScreen from "./screens/QuizScreen";
import CalculatingScreen from "./screens/CalculatingScreen";
import ResultScreen from "./screens/ResultScreen";
import { ARCHETYPES } from "./data/archetypes";

export default function App() {
  const { state, startQuiz, selectOption, showResult, restartQuiz, cycleWisdom } = useQuizState();
  const archetypePrimary = state.result ? ARCHETYPES[state.result]?.primary : undefined;

  return (
    <>
      <CustomCursor archetypePrimary={archetypePrimary} />

      {state.screen === "intro" && (
        <IntroScreen onStart={startQuiz} />
      )}

      {state.screen === "quiz" && (
        <QuizScreen state={state} onSelectOption={selectOption} />
      )}

      {state.screen === "calculating" && (
        <CalculatingScreen onDone={showResult} />
      )}

      {state.screen === "result" && (
        <ResultScreen
          result={state.result}
          scores={state.scores}
          currentWisdomIndex={state.currentWisdomIndex}
          onRetake={restartQuiz}
          onCycleWisdom={cycleWisdom}
        />
      )}
    </>
  );
}
