import React from "react";

interface RulesProps {
  onClose: () => void;
  gameMode: string; // Add gameMode prop
}

const Rules: React.FC<RulesProps> = ({ onClose, gameMode }) => {
  const rulesImageSrc =
    gameMode === "normal"
      ? "/images/image-rules.svg"
      : "/images/image-rules-bonus.svg";

  return (
    <>
      <div className=" hidden min-h-screen w-screen md:flex items-center justify-center bg-black/80 bg-opacity-50 fixed inset-0 z-50">
        <div className="bg-white rounded-lg p-6 max-w-xs mx-auto ">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-[var(--Dark-Text)] uppercase">
              rules
            </h1>
            <button onClick={onClose}>
              <img
                src="/images/icon-close.svg"
                alt="Close"
                className="w-4 h-4 cursor-pointer"
              />
            </button>
          </div>
          <div>
            <img src={rulesImageSrc} alt="Game Rules" className="w-full mt-8" />
          </div>
        </div>
      </div>

      {/* // mobile version */}

      <div className="md:hidden bg-white p-6 min-h-screen w-screen flex flex-col items-center justify-center gap-20">
        <h1 className="text-2xl font-bold text-[var(--Dark-Text)] uppercase text-center">
          rules
        </h1>
        <div>
          <img src={rulesImageSrc} alt="Game Rules" className="w-full mt-8" />
        </div>
        <button onClick={onClose}>
          <img
            src="/images/icon-close.svg"
            alt="Close"
            className="w-6 h-6 cursor-pointer"
          />
        </button>
      </div>
    </>
  );
};

export default Rules;
