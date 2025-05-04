import scissorsImage from "../../../public/images/icon-scissors.svg";
import { MouseEventHandler } from "react";

const Scissors = ({
  onClick,
}: {
  onClick: MouseEventHandler<HTMLDivElement>;
}) => {
  return (
    <div>
      <div
        className="cursor-pointer hover:scale-105 transition-transform duration-200"
        onClick={onClick}
      >
        <div
          className="flex flex-col items-center justify-center p-2 w-[130px] h-[130px] rounded-full"
          style={{
            background: "var(--Scissors-Gradient)",
          }}
        >
          <div className=" bg-white flex flex-col items-center justify-center p-2 w-[100px] h-[100px] rounded-full">
            {/* <div className=" bg-red-500 w-20 h-10"></div> */}
            <img src={scissorsImage} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scissors;
