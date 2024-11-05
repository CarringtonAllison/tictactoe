interface StartButtonProps {
  onClick: () => void;
}

const StartButton: React.FC<StartButtonProps> = ({ onClick }) => {
  return <button onClick={onClick}>StartButton</button>;
};

export default StartButton;
