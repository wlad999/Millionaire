import React, { useState, useEffect } from "react";
import Game from "../game";
import StartPage from "../startPage";
import jsonData from "../../services/data";
import "./index.css";

function Container() {
  const [start, setStart] = useState(false);
  const [data, setData] = useState(null);
  const [stepNumber, setStepNumber] = useState(1);
  const [earned, setEarned] = useState(0);
  const [firstGame, setFirstGame] = useState(true);

  const dataForQuestion = {
    stepNumber,
    data,
    setData,
    setStart,
    setStepNumber,
    setEarned,
  };

  useEffect(() => {
    setData(JSON.parse(jsonData));
  }, [start]);

  return (
    <div className="main">
      <main className="main-container">
        {start ? (
          <Game
            dataQuestion={dataForQuestion}
            data={data}
            stepNumber={stepNumber}
          />
        ) : (
          <StartPage
            setStart={setStart}
            earned={earned}
            data={data}
            firstGame={firstGame}
            setFirstGame={setFirstGame}
            setEarned={setEarned}
          />
        )}
      </main>
    </div>
  );
}

export default Container;
