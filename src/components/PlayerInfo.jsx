const PlayerInfo = ({ name, score }) => {
  return (
    <div className="w-80 text-2xl font-bold">
      <p>
        Name: <span>{name}</span>
      </p>
      <p className="text-xl font-medium">
        Score: <span>{score}</span>
      </p>
    </div>
  );
};

export default PlayerInfo;
