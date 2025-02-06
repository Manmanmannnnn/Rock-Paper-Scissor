const PlayerInfo = ({ name, score }) => {
  return (
    <div className="w-80 rounded-lg bg-green-300 text-2xl font-bold">
      <p>
        Name: <span>{name}</span>
      </p>
      <p>
        Score: <span>{score}</span>
      </p>
    </div>
  );
};

export default PlayerInfo;
