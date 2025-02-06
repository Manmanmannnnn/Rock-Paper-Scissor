import React, { useState } from "react";
import { IoIosArrowDropdown } from "react-icons/io";

const Instruction = () => {
  const [display, setDisplay] = useState(false);

  const toggleDisplay = () => {
    setDisplay((d) => !d);
  };

  return (
    <div className="relative flex w-full flex-col items-center justify-center">
      <div
        onClick={() => toggleDisplay()}
        className="relative h-6 w-3/5 rounded-lg bg-gray-300"
      >
        <IoIosArrowDropdown size={25} className="absolute right-0" />
      </div>
      <p className={`${display ? "block" : "hidden"} absolute top-6`}>
        <span className="italic">Rules:</span>Fire beats Water. Water beats
        Plant.Plant beats Fire
      </p>
    </div>
  );
};

export default Instruction;
