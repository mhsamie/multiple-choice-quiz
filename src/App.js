import CardViewer from "./components/CardViewer";
import "./App.css";
import React, { useState } from "react";
import { quizs } from "./data/quizs";
import Result from "./components/Result";
function App() {
  const [current, setCurrent] = useState(0);
  const [isEnd, setIsEnd] = useState(false);
  const [quizsState, setQuizsState] = useState(quizs);

  const onAnswer = (value) => {
    quizsState[current].answer = value;
    setQuizsState([...quizsState]);
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
  // restart funstion - pass with props
  return (
    <div className="App">
      {isEnd ? (
        <Result />
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
