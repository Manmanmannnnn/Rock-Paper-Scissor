import Card from "../components/Card";

const Playground = ({
  playerCards,
  computerCards,
  handlePlayerChoice,
  playerChoice,
  compChoice,
  handleGameWinner,
  winnerAnnounce,
}) => {
  function renderChoice(player, playerChoice) {
    const chosenCard = player[playerChoice];
    if (!chosenCard) return;
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-solid border-gray-400 p-3">
        <p className="text-center text-2xl">
          {chosenCard.name} <br />
          <span className="italic">type:{chosenCard.types[0].type.name}</span>
        </p>
        <img
          className="m-auto w-4/5"
          src={chosenCard.sprites.front_default}
          alt=""
        />
      </div>
    );
  }

  return (
    <main className="relative m-auto flex min-h-96 w-full flex-col items-center justify-center border-2 border-solid border-red-500">
      <h2 className="h-30 text-6xl">Arena</h2>
      <div>{handleGameWinner()}</div>

      <div className="flex min-h-[40vh] w-3/5 justify-around">
        <div className="w-2/5">{renderChoice(playerCards, playerChoice)}</div>
        <p className="pt-10 font-mono text-5xl">VS</p>
        <div className="w-2/5">{renderChoice(computerCards, compChoice)}</div>
      </div>
      <p>{winnerAnnounce}</p>

      <div className="flex min-h-[20vh] w-full justify-center gap-40">
        <div className="flex gap-4">
          {playerCards.map((el, index) => {
            return (
              <Card
                handlePlayerChoice={handlePlayerChoice}
                index={index}
                name={el.name}
                image={el.sprites.front_default}
                type={el.types}
                key={el.id}
              />
            );
          })}
        </div>
        <div className="flex gap-4">
          {computerCards.map((el) => {
            return (
              <Card
                name={el.name}
                key={el.id}
                image={el.sprites.front_default}
                type={el.types}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Playground;
