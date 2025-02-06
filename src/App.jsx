import {
  Playground,
  InfoSection,
  ButtonSection,
  Instruction,
} from "./sections/sections";

import { useEffect, useState } from "react";
import { getData } from "./components/datafetch";
import Header from "./components/Header";

const App = () => {
  const [playerScore, setPlayerScore] = useState(0);
  const [compScore, setCompScore] = useState(0);
  const [playerCards, setPlayerCards] = useState([]);
  const [computerCards, setComputerCards] = useState([]);
  const [playerChoice, setPlayerChoice] = useState("");
  const [compChoice, setCompChoice] = useState("");

  useEffect(() => {
    async function playerData() {
      const { fireData, waterData, grassData } = await getData();
      console.log(fireData);
      setPlayerCards([fireData, waterData, grassData]);
    }

    async function computerData() {
      const { fireData, waterData, grassData } = await getData();
      setComputerCards([fireData, waterData, grassData]);
    }

    playerData();
    computerData();
  }, []);

  useEffect(() => {
    handleRoundWinner();
  }, [playerChoice]);

  function handlePlayerChoice(choice) {
    handleCompChoice();
    setPlayerChoice(choice);
  }

  function handleCompChoice() {
    const random = Math.floor(Math.random() * 3);
    setCompChoice(random);
  }

  function handleRoundWinner() {
    if (
      (playerChoice === 1 && compChoice === 0) ||
      (playerChoice === 2 && compChoice === 1) ||
      (playerChoice === 0 && compChoice === 2)
    ) {
      setPlayerScore((p) => p + 1);
    } else if (
      (playerChoice === 0 && compChoice === 1) ||
      (playerChoice === 1 && compChoice === 2) ||
      (playerChoice === 2 && compChoice === 0)
    ) {
      setCompScore((c) => c + 1);
    }
  }

  return (
    <div className="relative">
      <Header />
      <section>
        <Instruction />
      </section>
      <div>
        {playerChoice} -{compChoice}
      </div>
      <section className="mt-11">
        <InfoSection playerScore={playerScore} compScore={compScore} />
      </section>
      <section>
        <Playground
          playerCards={playerCards}
          computerCards={computerCards}
          handlePlayerChoice={handlePlayerChoice}
        />
      </section>
      <section>
        <ButtonSection />
      </section>
    </div>
  );
};

export default App;
