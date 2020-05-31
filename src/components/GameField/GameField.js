import React, { useState } from "react";
import styles from "./GameField.module.css";
import GameFieldSquare from "./GameFieldSquare/GameFieldSquare";

function handleWinSquare(e, res) {
  if (+e.target.parentNode.value === res || +e.target.value === res) {
    if (!e.target.value) {
      e.target.parentNode.style.background = "#00FF00";
      e.target.parentNode.style.border = "4px solid #00FF00";
    } else {
      e.target.style.background = "#00FF00";
      e.target.style.border = "4px solid #00FF00";
    }
  } else {
    if (!e.target.value) {
      e.target.parentNode.style.background = "#FF0000";
      e.target.parentNode.style.border = "4px solid #FF0000";
      e.target.parentNode.parentNode.childNodes[res].style.background =
        "#00FF00";
      e.target.parentNode.parentNode.childNodes[res].style.border =
        "4px solid #00FF00";
    } else {
      e.target.style.background = "#FF0000";
      e.target.style.border = "4px solid #FF0000";
      e.target.parentNode.childNodes[res].style.background = "#00FF00";
      e.target.parentNode.childNodes[res].style.border = "4px solid #00FF00";
    }
  }
}

function renderSquare(id, isStartSquare) {
  return <GameFieldSquare key={id} value={id} isStartSquare={isStartSquare} />;
}

function GameField({ startSquare, gameSquaresAmount, resultedSquare }) {
  const [oneClick, setOneClick] = useState(false);

  const squaresArr = [...Array(gameSquaresAmount).keys()];

  function onClickHandler(e) {
    if (oneClick) {
      return;
    }
    handleWinSquare(e, resultedSquare);
    setOneClick(true);
  }

  return (
    <div className={styles.container}>
      <div className={styles.game}>
        <div className={styles.game__board} onClick={onClickHandler}>
          {squaresArr.map((el) =>
            el === startSquare
              ? renderSquare(el, true)
              : renderSquare(el, false)
          )}
        </div>
      </div>
    </div>
  );
}

export default GameField;
