import { useEffect, useState } from "react";

interface PickedProps {
  userChoice: string;
  houseChoice: string | null;
  onPlayAgain: () => void;
  winner: "user" | "house" | "draw" | null;
}

const Picked = ({
  userChoice,
  houseChoice,
  onPlayAgain,
  winner,
}: PickedProps) => {
  const [housePicked, setHousePicked] = useState(false);

  useEffect(() => {
    if (houseChoice) {
      const timer = setTimeout(() => {
        setHousePicked(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [houseChoice]);

  const getChoiceImage = (choice: string | null) => {
    switch (choice) {
      case "paper":
        return "/images/icon-paper.svg";
      case "rock":
        return "/images/icon-rock.svg";
      case "scissors":
        return "/images/icon-scissors.svg";
      case "spock":
        return "/images/icon-spock.svg";
      case "lizard":
        return "/images/icon-lizard.svg";
      default:
        return "";
    }
  };

  const getChoiceGradient = (choice: string | null) => {
    switch (choice) {
      case "paper":
        return "var(--Paper-Gradient)";
      case "rock":
        return "var(--Rock-Gradient)";
      case "scissors":
        return "var(--Scissors-Gradient)";
      case "spock":
        return "var(--Spock-Gradient)";
      case "lizard":
        return "var(--Lizard-Gradient)";
      default:
        return "";
    }
  };

  return (
    <>
      <div>
        <div className="  justify-center items-center gap-x-[450px] md:mt-0 hidden md:flex">
          <h1 className="uppercase text-white text-2xl ">You Picked</h1>
          <h1 className="uppercase text-white text-2xl ">House Picked</h1>
        </div>
        <div className="flex flex-col items-center justify-center md:gap-x-20">
          <div className="flex items-center justify-center text-center gap-x-10 md:gap-x-20 mt-14">
            {/* User Choice */}
            <div>
              <div className="relative flex justify-center">
                <div
                  className={`relative ${
                    winner === "user" ? "winner-glow" : ""
                  }`}
                >
                  <div
                    className="flex flex-col items-center justify-center p-2 w-[150px] h-[150px] md:w-[210px] md:h-[210px] rounded-full"
                    style={{ background: getChoiceGradient(userChoice) }}
                  >
                    <div className="bg-white flex items-center justify-center p-2 md:w-[150px] md:h-[150px] w-[110px] h-[110px] rounded-full">
                      <img src={getChoiceImage(userChoice)} alt={userChoice} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Result & Play Again Button */}
            {/* Desktop house picked */}
            {housePicked && (
              <div className="text-center hidden md:block">
                <h2 className="text-white text-5xl mb-5">
                  {winner === "draw"
                    ? "DRAW"
                    : winner === "user"
                    ? "YOU WIN"
                    : "YOU LOSE"}
                </h2>
                <button
                  onClick={onPlayAgain}
                  className="bg-white hover:text-red-500 cursor-pointer duration-500 text-gray-800 py-3 px-12 rounded-lg text-lg uppercase tracking-widest"
                >
                  Play Again
                </button>
              </div>
            )}

            {/* House Choice */}
            <div>
              <div className="relative flex justify-center">
                <div
                  className={`relative ${
                    winner === "house" ? "winner-glow" : ""
                  }`}
                >
                  {housePicked && houseChoice ? ( // Added null check here
                    <div
                      className="flex flex-col items-center justify-center p-2 w-[150px] h-[150px] md:w-[210px] md:h-[210px] rounded-full"
                      style={{ background: getChoiceGradient(houseChoice) }}
                    >
                      <div className="bg-white flex items-center justify-center p-2 md:w-[150px] md:h-[150px] w-[110px] h-[110px] rounded-full">
                        <img
                          src={getChoiceImage(houseChoice)}
                          alt={houseChoice}
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="md:w-[150px] md:h-[150px] w-[130px] h-[130px] rounded-full bg-gray-900 opacity-50"></div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className=" flex justify-center items-center gap-x-[70px] mt-4 md:mt-0  md:hidden">
            <h1 className="uppercase text-white text-xl ">You Picked</h1>
            <h1 className="uppercase text-white text-xl ">House Picked</h1>
          </div>

          {/* mobile house picked */}
          {housePicked && (
            <div className="text-center mt-14 md:mt-28 md:hidden">
              <h2 className="text-white text-5xl mb-5">
                {winner === "draw"
                  ? "DRAW"
                  : winner === "user"
                  ? "YOU WIN"
                  : "YOU LOSE"}
              </h2>
              <button
                onClick={onPlayAgain}
                className="bg-white hover:text-red-500 cursor-pointer duration-500 text-gray-800 py-3 px-12 rounded-lg text-lg uppercase tracking-widest"
              >
                Play Again
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Picked;
