import CardViewer from "./components/CardViewer";
import "./App.css";
import React, { useState, useEffect } from "react";
import { quizs } from "./data/quizs";
import Result from "./components/Result";
function App() {
  const [current, setCurrent] = useState(0);
  const [isEnd, setIsEnd] = useState(false);
  const temp = [...quizs];
  const [quizsState, setQuizsState] = useState([...temp]);

  const onAnswer = (value) => {
    const temp = [...quizsState];
    temp[current].answer = parseInt(value);
    setQuizsState(temp);
  };
  const calcScore = () => {
    let score = 0;
    quizsState.forEach((quiz) => {
      if (quiz.answer !== undefined && quiz.options[quiz.answer].isCorrect) {
        score++;
      }
    });
    return score;
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
  const reset = () => {
    setCurrent(0);

    setIsEnd(false);
    setQuizsState([...quizs]);
  };
  useEffect(() => {
    console.log(quizsState);
    console.log(quizs);
    return () => {};
  }, [quizsState]);
  return (
    <div className="App">
      {isEnd ? (
        <Result score={calcScore()} all={quizsState.length} reset={reset} />
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
