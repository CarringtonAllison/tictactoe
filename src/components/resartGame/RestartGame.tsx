interface RestartGameProps {
  onRestart: () => void;
}

const RestartGame: React.FC<RestartGameProps> = ({ onRestart }) => {
  console.log("RestartGame button clicked");
  return <button onClick={onRestart}>RestartGame</button>;
};

export default RestartGame;
