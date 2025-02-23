import React, { useState } from "react";
import { IoIosArrowDropdown } from "react-icons/io";

const Instruction = () => {
  const [display, setDisplay] = useState(false);

  const toggleDisplay = () => {
    setDisplay((d) => !d);
  };

  return (
    <div className="relative m-auto flex w-1/2 flex-col items-center justify-center">
      <div
        onClick={() => toggleDisplay()}
        className="relative flex h-6 w-1/6 rounded-lg bg-gray-300 text-center"
      >
        <p className="absolute text-xl font-medium">Instructions</p>
        <IoIosArrowDropdown size={25} className="absolute right-0" />
      </div>
      <p
        className={`${display ? "block" : "hidden"} absolute top-6 text-center text-lg font-medium`}
      >
        Water 🌊 beats Fire 🔥 <br />
        Fire 🔥 beats Grass 🌱 <br />
        Grass 🌱 beats Water 🌊
        <br />
        The first to win 3 rounds is declared the overall winner🎊
      </p>
    </div>
  );
};

export default Instruction;
