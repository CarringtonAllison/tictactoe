import { useState } from "react";
import Square from "../square/Square";

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));

  const handleClick = (i: number) => {
    console.log("clicked");
    const nextSquares = squares.slice();
    nextSquares[i] = "X";
    setSquares(nextSquares);
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

  return <>{renderRows()}</>;
};

export default Board;
