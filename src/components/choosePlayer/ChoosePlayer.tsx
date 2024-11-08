interface ChoosePlayerProps {
  onClick: (player: string) => void;
}

const ChoosePlayer: React.FC<ChoosePlayerProps> = ({ onClick }) => {
  return (
    <>
      <button onClick={() => onClick("X")}>X</button>
      <h2 className="px-5 ">Choose Player</h2>
      <button onClick={() => onClick("O")}>O</button>
    </>
  );
};

export default ChoosePlayer;
