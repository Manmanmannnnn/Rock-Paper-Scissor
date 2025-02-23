import { Playground, InfoSection, Instruction } from "./sections/sections";

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
  const [resetIndicator, setResetIndicator] = useState(0);
  const [winnerAnnounce, setWinnerAnnounce] = useState("");

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
  }, [resetIndicator]);

  useEffect(() => {
    handleRoundWinner();
  }, [playerChoice, compChoice]);

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
      setWinnerAnnounce("You won the round");
      setTimeout(() => setWinnerAnnounce(""), 2000);
    } else if (
      (playerChoice === 0 && compChoice === 1) ||
      (playerChoice === 1 && compChoice === 2) ||
      (playerChoice === 2 && compChoice === 0)
    ) {
      setWinnerAnnounce("Computer won the round");
      setTimeout(() => setWinnerAnnounce(""), 2000);
      setCompScore((c) => c + 1);
    } else if (
      (playerChoice === 0 && compChoice === 0) ||
      (playerChoice === 1 && compChoice === 1) ||
      (playerChoice === 2 && compChoice === 2)
    ) {
      setWinnerAnnounce("Its a tie!");
      setTimeout(() => setWinnerAnnounce(""), 2000);
    } else {
      setWinnerAnnounce("");
    }
  }

  function resetGame() {
    setResetIndicator((r) => r + 1);
    setPlayerScore(0);
    setCompScore(0);
    setPlayerChoice("");
    setCompChoice("");
    setWinnerAnnounce("");
  }

  function handleGameWinner() {
    if (playerScore === 3 || compScore === 3) {
      return (
        <div className="flex flex-col items-center p-3">
          <p className="text-4xl font-bold">
            {playerScore === 3
              ? "🎊 Player Won the Game! 🎊"
              : "🎊 Computer Won the Game! 🎊"}
          </p>
          <button
            className="rounded-2xl p-2 text-lg font-medium duration-700 hover:bg-slate-700 hover:text-gray-300"
            onClick={() => resetGame()}
          >
            Play Again
          </button>
        </div>
      );
    }
    return;
  }

  return (
    <div className="relative h-screen overflow-hidden">
      <Header />
      <section>
        <Instruction />
      </section>

      <section className="mt-11">
        <InfoSection playerScore={playerScore} compScore={compScore} />
      </section>
      <section>
        <Playground
          handleGameWinner={handleGameWinner}
          playerCards={playerCards}
          computerCards={computerCards}
          handlePlayerChoice={handlePlayerChoice}
          playerChoice={playerChoice}
          compChoice={compChoice}
          winnerAnnounce={winnerAnnounce}
        />
      </section>
    </div>
  );
};

export default App;
