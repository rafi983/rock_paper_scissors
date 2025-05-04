import React from "react";
import Paper from "./paper/Paper";
import Rock from "./rock/Rock";
import Scissors from "./scissors/Scissors";
import Spock from "./spock/Spock";
import Lizard from "./lizard/Lizard";

interface AdvanceModeProps {
  onChoice: (choice: string) => void;
}

const AdvanceMode: React.FC<AdvanceModeProps> = ({ onChoice }) => {
  return (
    <div
      style={{
        backgroundImage: "url('/images/bg-pentagon.svg')",
        backgroundPosition: "center",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        width: "250px",
      }}
    >
      <div className=" mt-4 md:mt-0 flex items-center justify-center -mb-4 md:-mb-16">
        <Scissors onClick={() => onChoice("scissors")} />
      </div>
      <div className="flex items-center justify-center gap-24 md:gap-40">
        <Spock onClick={() => onChoice("spock")} />
        <Paper onClick={() => onChoice("paper")} />
      </div>
      <div className="flex items-center justify-center gap-10 md:gap-10 mt-8">
        <Lizard onClick={() => onChoice("lizard")} />
        <Rock onClick={() => onChoice("rock")} />
      </div>
    </div>
  );
};

export default AdvanceMode;
