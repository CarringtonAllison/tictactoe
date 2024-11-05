import { useState } from "react";
import Square from "../square/Square";
import StartButton from "../startButton/StartButton";
import calculateWinner from "../../helpers/calculateWinner";

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [player, setPlayer] = useState("");

  const handleClick = (i: number) => {
    console.log("clicked the square", i);
    if (squares[i] || !player) {
      return;
    }

    if (calculateWinner(squares)) {
      alert("Game Over");
      return;
    }

    const nextSquares = squares.slice();
    nextSquares[i] = player;
    setSquares(nextSquares);
    setPlayer(player === "X" ? "O" : "X");
  };

  //renders rows of squares by 3
  const renderRows = () => {
    const rows = [];
    for (let i = 0; i < squares.length; i += 3) {
      rows.push(
        <div className="board_row" key={i}>
          {squares.slice(i, i + 3).map((value, index) => (
            <Square
              key={i + index}
              value={value}
              onSquareClick={() => handleClick(i + index)}
            />
          ))}
        </div>
      );
    }
    return rows;
  };

  return (
    <>
      <StartButton
        onClick={() => {
          console.log("clicked the start button");
          setPlayer("X");
        }}
      />
      {renderRows()}
    </>
  );
};

export default Board;
