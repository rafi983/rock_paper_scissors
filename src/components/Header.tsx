import { useState, useEffect } from "react";

interface HeaderProps {
  score: number;
  gameMode: string;
}

const Header = ({ score, gameMode }: HeaderProps) => {
  const [logoSrc, setLogoSrc] = useState(() =>
    gameMode === "normal" ? "./images/logo.svg" : "./images/logo-bonus.svg"
  );
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true); // Trigger animation on gameMode change
    setTimeout(() => {
      setLogoSrc(
        gameMode === "normal" ? "./images/logo.svg" : "./images/logo-bonus.svg"
      );
      setAnimate(false); // Reset animation state
    }, 200); // Duration should match your CSS transition
  }, [gameMode]);

  return (
    <div>
      <div className=" border-2 p-4 rounded-xl border-[var(--Header-Outline)] flex items-center justify-between w-[350px] md:w-[600px] md:mb-2">
        <div
          className={`transition-opacity duration-300 ease-in-out ${
            animate ? "opacity-50" : "opacity-100"
          }`}
        >
          <img
            className=" w-[120px] md:w-full"
            src={logoSrc}
            alt="logo image"
          />
        </div>
        <div className=" bg-white flex flex-col rounded-lg items-center justify-center py-2 px-6 md:py-4 md:px-10 ">
          <p className=" text-sm uppercase leading-4 text-[var(--Score-Text)] tracking-widest">
            Score
          </p>
          <h1 className=" text-6xl font-bold text-[var(--Dark-Text)]">
            {score}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
