import React from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

export default function Button({ movePrev, moveNext, isDisabled }) {
  return (
    <div className="flex flex-row justify-between px-32 mt-10">
      <div className="flex flex-row">
        <button
          className="hover:bg-gradient-to-r from-[#d7ac38] to-[#ed3334] hover:text-white bg-white rounded-full w-[42px] h-[42px] items-center flex justify-center cursor-pointer text-center mr-2"
          onClick={() => movePrev()}
        >
          <AiOutlineLeft size={16} />
        </button>
        <button
          className="bg-white rounded-full w-[42px] h-[42px] items-center flex justify-center cursor-pointer text-center hover:bg-gradient-to-r from-[#d7ac38] to-[#ed3334] hover:text-white"
          onClick={() => moveNext()}
        >
          <AiOutlineRight size={16} />
        </button>
      </div>

      <div className="bg-gradient-to-r from-[#d7ac38] to-[#ed3334] w-[190px] h-[56px] items-center justify-evenly rounded-full flex flex-row cursor-pointer gap-2">
        <p className="text-[15px] font-bold text-white pl-2">
          Explore all News
        </p>
        <div className="bg-white rounded-full w-[40px] h-[40px] mr-1 items-center flex justify-center text-center text-[#ed3334]">
          <AiOutlineRight size={16} />
        </div>
      </div>
    </div>
  );
}
