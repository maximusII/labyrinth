import React from "react";
import styles from "./GameFieldSquare.module.css";
import startImage from "../../../img/start.png";

function GameFieldSquare({ value, isStartSquare }) {
  return (
    <button className={styles.game__square} value={value}>
      {isStartSquare ? <img src={startImage} alt="Start" /> : null}
    </button>
  );
}

export default GameFieldSquare;
