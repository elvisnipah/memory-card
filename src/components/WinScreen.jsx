import React from "react";
import Vakarian from "../images/vakarian.png";

const WinScreen = ({ restart }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 text-center p-8 border-2 border-red-700 rounded-xl bg-black text-white">
      <img src={Vakarian} alt="" className="w-[320px]" />
      <p className="font-bold text-xl">
        Well done on completing your task Spectre. <br />
        Would you like to try again?
      </p>
      <button
        className="bg-red-700 p-3 font-bold hover:text-black hover:bg-white"
        onClick={restart}
      >
        Try Again
      </button>
    </div>
  );
};

export default WinScreen;
