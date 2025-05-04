import { useState, useEffect } from "react";
import Header from "./Header"; // Ensure the path is correct
import Paper from "./paper/Paper";
import Rock from "./rock/Rock";
import Scissors from "./scissors/Scissors";
import Rules from "./Rules";
import Picked from "./picked/Picked";
import AdvanceModeComponent from "./AdvanceMode";

const Home = () => {
  const [showRules, setShowRules] = useState(false);
  const [gameMode, setGameMode] = useState("normal"); // 'normal' or 'advance'
  const [userChoice, setUserChoice] = useState<string | null>(null);
  const [houseChoice, setHouseChoice] = useState<string | null>(null);
  const [score, setScore] = useState(() => {
    if (typeof window !== "undefined") {
      const savedScore = localStorage.getItem("rps-score");
      return savedScore ? parseInt(savedScore, 10) : 0;
    }
    return 0;
  });
  const [winner, setWinner] = useState<"user" | "house" | "draw" | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const normalChoices = ["paper", "rock", "scissors"];
  const advanceChoices = ["paper", "rock", "scissors", "lizard", "spock"];

  // Update localStorage when score changes
  useEffect(() => {
    localStorage.setItem("rps-score", score.toString());
  }, [score]);

  const determineNormalWinner = (
    user: string,
    house: string
  ): "user" | "house" | "draw" => {
    if (user === house) return "draw";
    if (
      (user === "rock" && house === "scissors") ||
      (user === "paper" && house === "rock") ||
      (user === "scissors" && house === "paper")
    ) {
      return "user";
    }
    return "house";
  };

  const determineAdvanceWinner = (
    user: string,
    house: string
  ): "user" | "house" | "draw" => {
    if (user === house) return "draw";

    const rules = {
      rock: ["scissors", "lizard"],
      paper: ["rock", "spock"],
      scissors: ["paper", "lizard"],
      lizard: ["spock", "paper"],
      spock: ["scissors", "rock"],
    };

    return rules[user as keyof typeof rules]?.includes(house)
      ? "user"
      : "house";
  };

  const handleChoice = (choice: string) => {
    setUserChoice(choice);
    setWinner(null);

    setTimeout(() => {
      const choices = gameMode === "normal" ? normalChoices : advanceChoices;
      const randomIndex = Math.floor(Math.random() * choices.length);
      const housePick = choices[randomIndex];
      setHouseChoice(housePick);

      const winnerResult =
        gameMode === "normal"
          ? determineNormalWinner(choice, housePick)
          : determineAdvanceWinner(choice, housePick);
      setWinner(winnerResult);

      setScore((prev) => {
        let newScore = prev;
        if (winnerResult === "user") {
          newScore = prev + 1;
        } else if (winnerResult === "house") {
          newScore = Math.max(0, prev - 1);
        }
        return newScore;
      });
    }, 1000);
  };

  const resetGame = () => {
    setUserChoice(null);
    setHouseChoice(null);
    setWinner(null);
  };

  const toggleGameMode = () => {
    setIsAnimating(true); // Start animation
    setTimeout(() => {
      setGameMode((prevMode) => (prevMode === "normal" ? "advance" : "normal"));
      resetGame(); // Reset the game when switching modes
      setIsAnimating(false); // End animation
    }, 300); // Adjust the timeout to match your desired transition duration
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className=" flex flex-col items-center justify-center mt-4">
        <Header score={score} gameMode={gameMode} />
      </div>

      {!userChoice ? (
        <div
          className={`flex flex-col items-center justify-center relative flex-grow transition-opacity duration-300 ${
            isAnimating ? "opacity-50" : "opacity-100"
          }`}
        >
          <div className={gameMode === "normal" ? "block" : "hidden"}>
            <div
              style={{
                backgroundImage: "url('/images/bg-triangle.svg')",
                backgroundPosition: "center",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
              }}
              className="flex flex-col items-center justify-center w-[220px]"
            >
              <div className="flex items-center justify-center gap-10 md:gap-20 -mt-10">
                <Paper onClick={() => handleChoice("paper")} />
                <Scissors onClick={() => handleChoice("scissors")} />
              </div>
              <div className="flex items-center justify-center">
                <Rock onClick={() => handleChoice("rock")} />
              </div>
            </div>
          </div>
          <div className={gameMode === "advance" ? "block" : "hidden"}>
            <AdvanceModeComponent onChoice={handleChoice} />
          </div>
        </div>
      ) : (
        <Picked
          userChoice={userChoice}
          houseChoice={houseChoice}
          onPlayAgain={resetGame}
          winner={winner}
        />
      )}

      <div className=" flex md:justify-between items-center justify-center mt-6 md:mt-0 md:items-end gap-6">
        <button
          onClick={toggleGameMode}
          className="border border-white text-white tracking-widest uppercase py-1 px-8 rounded-lg cursor-pointer mb-10"
        >
          {gameMode === "normal" ? "Advance Mode" : "Normal Mode"}
        </button>
        <button
          onClick={() => setShowRules(true)}
          className="border border-white text-white tracking-widest uppercase py-1 px-8 rounded-lg cursor-pointer mb-10"
        >
          Rules
        </button>
      </div>

      {showRules && (
        <div className="fixed inset-0 bg-gray-900/10 bg-opacity-50 flex items-end justify-end z-50">
          <Rules onClose={() => setShowRules(false)} gameMode={gameMode} />
        </div>
      )}
    </div>
  );
};

export default Home;
