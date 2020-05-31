import React from "react";
import styles from "./MoveSquare.module.css";

function MoveSquare({ value }) {
  return (
    <div className={styles.move__square}>
      <img src={value} alt="Arrow" />
    </div>
  );
}

export default MoveSquare;
