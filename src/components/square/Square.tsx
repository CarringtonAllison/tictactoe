import { MouseEventHandler } from "react";

interface SquareProps {
  value: string;
  onSquareClick?: MouseEventHandler<HTMLButtonElement>;
}

const Square = ({ value, onSquareClick }: SquareProps) => {
  return (
    <button
      className="bg-blue rounded-lg border-yellow border-4 w-20 h-20 px-8 m-1"
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
};

export default Square;
