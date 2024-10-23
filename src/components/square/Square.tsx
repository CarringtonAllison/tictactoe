import { MouseEventHandler } from "react";

interface SquareProps {
  value: string;
  onSquareClick?: MouseEventHandler<HTMLButtonElement>;
}

const Square = ({ value, onSquareClick }: SquareProps) => {
  return (
    <button className="board-cell" onClick={onSquareClick}>
      {value}
    </button>
  );
};

export default Square;
