// import React from "react";

import Home from "./components/Home";

const App = () => {
  return (
    <div
      style={{
        background: "var(--Background-Gradient)",
        fontFamily: "var(--font-display)",
      }}
    >
      <div className=" px-6">
        <Home />
      </div>
      <div className=" text-center text-white">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a
          href="https://www.frontendmentor.io/profile/rafi983"
          className=" hover:text-red-500 duration-500"
        >
          RafiZ
        </a>
        .
      </div>
    </div>
  );
};

export default App;
