interface ChoosePlayerProps {
  onClick: (player: string) => void;
}

const ChoosePlayer: React.FC<ChoosePlayerProps> = ({ onClick }) => {
  return (
    <div className="flex justify-center items-center m-7">
      <button onClick={() => onClick("X")}>X</button>
      <h2 className="px-5 ">Choose Player</h2>
      <button onClick={() => onClick("O")}>O</button>
    </div>
  );
};

export default ChoosePlayer;
