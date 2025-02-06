import PlayerInfo from "../components/PlayerInfo";

const InfoSection = ({ playerScore, compScore }) => {
  return (
    <div className="flex justify-around">
      <PlayerInfo name="Zap" score={playerScore} />
      <PlayerInfo name="Computer" score={compScore} />
    </div>
  );
};

export default InfoSection;
