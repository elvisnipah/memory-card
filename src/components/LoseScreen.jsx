import React from "react";
import Reaper from "../images/reaper.png";

const LoseScreen = ({ restart }) => {
  return (
    <div className="bg-red-700 text-white text-xl font-bold flex flex-col items-center text-center gap-3 p-4 rounded-lg">
      <img src={Reaper} alt="" className="w-[120px]" />
      <p>
        You failed your mission soldier. <br />
        Get back to work.
      </p>
      <button
        className="bg-black p-2 rounded-lg hover:bg-gray-600"
        onClick={restart}
      >
        Restart
      </button>
    </div>
  );
};

export default LoseScreen;
