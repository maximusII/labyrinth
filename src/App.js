import React, { useState } from "react";
import "./App.css";
import { randomInteger } from "../src/helpers/helpers";
import Header from "./components/Header/Header";
import GameField from "./components/GameField/GameField";
import Moves from "./components/Moves/Moves";
import Restart from "./components/Restart/Restart";

function App() {
  const gameSquaresAmount = 9; //if you change this value, change also [numbers] arrays in squares array in Moves component accordingly
  const moveSquaresAmount = 10;

  const [resultedSquare, setResultedSquare] = useState(null);

  function restartButtonHandler() {
    window.location.reload();
  }

  const defineResultSquare = (num) => {
    setResultedSquare(num);
  };

  let randomSquare = randomInteger(0, gameSquaresAmount - 1);

  return (
    <>
      <Header />
      <GameField
        startSquare={randomSquare}
        gameSquaresAmount={gameSquaresAmount}
        resultedSquare={resultedSquare}
      />
      <Moves
        startSquare={randomSquare}
        moveSquaresAmount={moveSquaresAmount}
        resultedSquare={defineResultSquare}
      />
      <Restart restartButtonHandler={restartButtonHandler} />
    </>
  );
}

export default App;
