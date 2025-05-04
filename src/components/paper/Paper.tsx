import paperImage from "../../../public/images/icon-paper.svg";

import { MouseEventHandler } from "react";

const Paper = ({ onClick }: { onClick: MouseEventHandler<HTMLDivElement> }) => {
  return (
    <div
      className="cursor-pointer hover:scale-105 transition-transform duration-200"
      onClick={onClick}
    >
      <div
        className="flex flex-col items-center justify-center p-2 w-[130px] h-[130px] rounded-full"
        style={{
          background: "var(--Paper-Gradient)",
        }}
      >
        <div className=" bg-white flex flex-col items-center justify-center p-2 w-[100px] h-[100px] rounded-full">
          <img src={paperImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Paper;
