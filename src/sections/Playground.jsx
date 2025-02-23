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
      <div className="flex flex-col items-center justify-center p-3">
        <img
          className="m-auto w-3/5"
          src={chosenCard.sprites.front_default}
          alt=""
        />
        <p className="text-center text-xl font-bold">
          {chosenCard.name} <br />
        </p>
      </div>
    );
  }

  return (
    <main className="relative m-auto flex min-h-96 w-full flex-col items-center justify-center">
      <div className="absolute top-0">{handleGameWinner()}</div>

      <div className="flex min-h-[40vh] w-3/5 items-center justify-around">
        <div className="w-2/5">{renderChoice(playerCards, playerChoice)}</div>
        <p className="font-mono text-5xl">VS</p>
        <div className="w-2/5">{renderChoice(computerCards, compChoice)}</div>
      </div>
      <p className="absolute bottom-52 p-3 font-serif text-3xl font-bold transition-all duration-1000">
        {winnerAnnounce}
      </p>

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
