import { useState } from "react";
import Square from "../square/Square";
import ChoosePlayer from "../choosePlayer/ChoosePlayer";
import calculateWinner from "../../helpers/calculateWinner";
import Status from "../status/Status";

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [player, setPlayer] = useState("");
  const [playerChosen, setPlayerChosen] = useState(false);

  const handleClick = (i: number) => {
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

  const handlePlayerClick = (player: string) => {
    setPlayer(player);
    setPlayerChosen(true);
  };

  //renders rows of squares by 3
  const renderRows = () => {
    const rows = [];
    for (let i = 0; i < squares.length; i += 3) {
      rows.push(
        <div className="flex flex-wrap justify-center" key={i}>
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
      <div className="max-w-7xl text-center p-8 m-0">
        <h1 className="text-5xl">Tic Tac Toe</h1>
        <div className="flex justify-center items-center m-4 h-16">
          {!playerChosen ? (
            <ChoosePlayer onClick={handlePlayerClick} />
          ) : (
            <Status squares={squares} player={player} />
          )}
        </div>
        <div className="max-w-7xl">{renderRows()}</div>
      </div>
    </>
  );
};

export default Board;
