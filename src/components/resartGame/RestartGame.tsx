interface RestartGameProps {
  onRestart: () => void;
}

const RestartGame: React.FC<RestartGameProps> = ({ onRestart }) => {
  console.log("RestartGame button clicked");
  return (
    <button className="ml-10" onClick={onRestart}>
      Restart Game
    </button>
  );
};

export default RestartGame;
