import calculateWinner from "../../helpers/calculateWinner";

interface StatusProps {
  squares: string[];
  player: string;
}

const Status: React.FC<StatusProps> = ({ squares, player }) => {
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else {
    status = `Current player: ${player}`;
  }

  return <div>{status}</div>;
};

export default Status;
