import CardViewer from "./components/CardViewer";
import "./App.css";
import React, { useState } from "react";
import { quizs } from "./data/quizs";
import Result from "./components/Result";
function App() {
  const [current, setCurrent] = useState(0);
  const [isEnd, setIsEnd] = useState(false);
  const [quizsState, setQuizsState] = useState(quizs);
  const [userScore, setUserScore] = useState(0);
  const onAnswer = (value) => {
    quizsState[current].answer = value;
    setQuizsState([...quizsState]);

    if (quizsState[current].options[value].isCorrect) {
      setUserScore(userScore + 1);
    }
  };

  const goback = () => {
    if (current) {
      setCurrent(current - 1);
    }
  };
  const goforward = () => {
    if (current >= quizs.length - 1) {
      setIsEnd(true);
    } else {
      setCurrent(current + 1);
    }
  };
  const resetButton = () => {
    setCurrent(0);
    setUserScore(0);
    setIsEnd(false);
    setQuizsState(quizs);
  };
  // restart funstion - pass with props
  return (
    <div className="App">
      {isEnd ? (
        <Result
          userScore={userScore}
          all={quizsState.length}
          resetButton={resetButton}
        />
      ) : (
        <CardViewer
          card={quizsState[current]}
          goback={goback}
          goforward={goforward}
          index={current}
          all={quizsState.length}
          onAnswer={onAnswer}
        />
      )}
    </div>
  );
}

export default App;
