import Card from "../components/Card";

const Playground = ({ playerCards, computerCards, handlePlayerChoice }) => {
  return (
    <main className="m-auto flex min-h-96 w-full justify-around border-2 border-solid border-red-500">
      <div>
        {playerCards.map((el, index) => {
          return (
            <Card
              handlePlayerChoice={handlePlayerChoice}
              index={index}
              name={el.name}
              image={el.sprites.front_default}
              type={el.types[0].type.name}
              key={el.id}
            />
          );
        })}
      </div>

      <div>
        {computerCards.map((el) => {
          return (
            <Card
              name={el.name}
              key={el.id}
              image={el.sprites.front_default}
              type={el.types[0].type.name}
            />
          );
        })}
      </div>
    </main>
  );
};

export default Playground;
