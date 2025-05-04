import spockImage from "../../../public/images/icon-spock.svg";
import { MouseEventHandler } from "react";

const Spock = ({ onClick }: { onClick: MouseEventHandler<HTMLDivElement> }) => {
  return (
    <div>
      <div
        className="cursor-pointer hover:scale-105 transition-transform duration-200"
        onClick={onClick}
      >
        <div
          className="flex flex-col items-center justify-center p-2 w-[130px] h-[130px] rounded-full"
          style={{
            background: "var(--Spock-Gradient)",
          }}
        >
          <div className=" bg-white flex flex-col items-center justify-center p-2 w-[100px] h-[100px] rounded-full">
            <img src={spockImage} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Spock;
