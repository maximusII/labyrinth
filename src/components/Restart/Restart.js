import React from "react";
import styles from "./Restart.module.css";

function Restart({ restartButtonHandler }) {
  return (
    <div>
      <button className={styles.restart} onClick={restartButtonHandler}>
        Play again
      </button>
    </div>
  );
}

export default Restart;
