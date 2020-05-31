import React, { useEffect } from "react";
import styles from "./Moves.module.css";
import MoveSquare from "./MoveSquare/MoveSquare";
import { randomInteger } from "../../helpers/helpers";
import rightArrow from "../../img/rightArrow.png";
import leftArrow from "../../img/leftArrow.png";
import downArrow from "../../img/downArrow.png";
import upArrow from "../../img/upArrow.png";

//for bigger than 3x3 field area just change only [numbers] arrays in squares array accordingly
const squares = [
  {
    name: "leftTopSquare",
    numbers: [0],
    allowedArrows: [rightArrow, downArrow],
  },
  {
    name: "topSquare",
    numbers: [1],
    allowedArrows: [leftArrow, rightArrow, downArrow],
  },
  {
    name: "rightTopSquare",
    numbers: [2],
    allowedArrows: [leftArrow, downArrow],
  },
  {
    name: "leftCenterSquare",
    numbers: [3],
    allowedArrows: [rightArrow, upArrow, downArrow],
  },
  {
    name: "centerSquare",
    numbers: [4],
    allowedArrows: [rightArrow, leftArrow, upArrow, downArrow],
  },
  {
    name: "rightCenterSquare",
    numbers: [5],
    allowedArrows: [leftArrow, upArrow, downArrow],
  },
  {
    name: "leftBottomSquare",
    numbers: [6],
    allowedArrows: [rightArrow, upArrow],
  },
  {
    name: "bottomSquare",
    numbers: [7],
    allowedArrows: [leftArrow, rightArrow, upArrow],
  },
  {
    name: "rightBottomSquare",
    numbers: [8],
    allowedArrows: [leftArrow, upArrow],
  },
];

let finalSquare = null;

function modelingArrowsArray(amount, startSquare) {
  const arrOfArrows = [];
  let i = 0;
  let currentSquareNumber = startSquare;

  while (i < amount) {
    let currentSquare = squares.find((el) =>
      el.numbers.includes(currentSquareNumber)
    );
    const currentArrow =
      currentSquare.allowedArrows[
        randomInteger(0, currentSquare.allowedArrows.length - 1)
      ];

    if (currentArrow === rightArrow) {
      currentSquareNumber += 1;
      arrOfArrows.push(currentArrow);
      i += 1;
      continue;
    }

    if (currentArrow === leftArrow) {
      currentSquareNumber -= 1;
      arrOfArrows.push(currentArrow);
      i += 1;
      continue;
    }

    //for bigger than 3x3 field area just change only currentSquareNumber += X and currentSquareNumber -= X, where X - amount of squares in a row(works only for game fields where amount of rows and columns are equal(4x4, 5x5, ...))
    if (currentArrow === upArrow) {
      currentSquareNumber -= 3;
      arrOfArrows.push(currentArrow);
      i += 1;
      continue;
    }

    if (currentArrow === downArrow) {
      currentSquareNumber += 3;
      arrOfArrows.push(currentArrow);
      i += 1;
      continue;
    }
  }

  finalSquare = currentSquareNumber;
  return arrOfArrows;
}

function renderMoveSquare(id, image) {
  return <MoveSquare key={id} value={image} />;
}

function Moves({ moveSquaresAmount, startSquare, resultedSquare }) {
  const squaresArr = [...Array(moveSquaresAmount).keys()];
  const arrOfArrows = modelingArrowsArray(squaresArr.length, startSquare);

  useEffect(() => {
    resultedSquare(finalSquare);
  }, [resultedSquare]);

  return (
    <div className={styles.container}>
      <div className={styles.moves}>
        <div className={styles.move__board}>
          {squaresArr.map((el) => {
            return renderMoveSquare(el, arrOfArrows[el]);
          })}
        </div>
      </div>
    </div>
  );
}

export default Moves;
