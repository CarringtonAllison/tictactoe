import calculateWinner from "../../utils/calculateWinner";
import RestartGame from "../resartGame/RestartGame";

interface StatusProps {
  squares: string[];
  player: string;
  restartGame: () => void;
}

const Status: React.FC<StatusProps> = ({ squares, player, restartGame }) => {
  const winner = calculateWinner(squares);

  return (
    <>
      {winner ? (
        <div className="flex justify-center items-center m-4 h-16">
          <p className="">{`Winner: ${winner}`}</p>
          <RestartGame onRestart={restartGame} />
        </div>
      ) : (
        <> "{player}" it is now your turn.</>
      )}
    </>
  );
};

export default Status;
