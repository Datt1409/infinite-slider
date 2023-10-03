import Image from "next/image";
import React, { useState, useRef, useEffect, useMemo } from "react";
import { findMiddleIndex, findMovePrevIndex, findRightIndex } from "../utils";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

export default function Slider({ cards }) {
  const [currentIndex, setCurrentIndex] = useState(4);
  const [active, setActive] = useState(true);

  const carousel = useRef(null);

  const clonedCards = useMemo(() => [...cards, ...cards, ...cards], [cards]);

  const moveNextFirstPosition = useMemo(
    () => findMiddleIndex(clonedCards, 1),
    [clonedCards]
  );

  const moveNextSecondPosition = useMemo(
    () => findRightIndex(clonedCards, 1),
    [clonedCards]
  );

  const findMovePrev = useMemo(
    () => findMovePrevIndex(clonedCards, 4),
    [clonedCards]
  );

  const movePrev = () => {
    if (active) {
      carousel.current.style.transition = "transform 0.3s ease";
      setCurrentIndex((prev) => prev - 1);
      setActive(false);
    }
  };
  const moveNext = () => {
    if (active) {
      carousel.current.style.transition = "transform 0.3s ease";
      setCurrentIndex((prev) => prev + 1);
      setActive(false);
    }
  };

  const isDisabled = (direction) => {
    if (direction === "prev") {
      return currentIndex <= 0;
    }

    return false;
  };
  const onTransitonEnd = () => {
    setActive(true);
    if (currentIndex === moveNextSecondPosition) {
      carousel.current.style.transitionDuration = "0ms";
      setCurrentIndex(moveNextFirstPosition);
      // carousel.current.style.transform = `translateX(${4 * 516}px)`;
    } else if (currentIndex === findMovePrev.firstIndex) {
      carousel.current.style.transitionDuration = "0ms";
      setCurrentIndex(findMovePrev.secondIndex);
    }
  };

  useEffect(() => {
    carousel.current.style.transform = `translateX(-${currentIndex * 516}px)`;
  }, [currentIndex, clonedCards]);

  return (
    <div className="w-full h-full relative flex flex-col z-10">
      <Image
        src="/img_globe.png"
        width={1127}
        height={759}
        className="absolute bottom-0 right-0 opacity-30 -z-10"
        alt=""
      />
      {/* Title */}
      <div className="w-full flex flex-col text-white pt-24 pb-10 px-32 relative">
        <Image
          src="/logo.png"
          width={152}
          height={152}
          alt="Logo"
          className="opacity-50 absolute"
        />
        <h3 className="text-xl font-semibold uppercase leading-7 tracking-[3.2px] mt-5">
          Mor Software
        </h3>
        <h1 className="text-6xl font-bold leading-[72px] mt-[10px]">
          Explore with Mor
        </h1>
      </div>

      {/* Cards */}
      <div
        className="w-full flex flex-row mx-32 gap-9 relative z-10"
        ref={carousel}
        onTransitionEnd={() => onTransitonEnd()}
      >
        {clonedCards.map((card, i) => (
          <div
            key={i}
            style={{
              backgroundImage: `url(${card.url})`,
            }}
            className="w-[480px] h-[335px] relative bg-cover flex-shrink-0"
          >
            <div className="absolute bottom-5 ml-6">
              <p className="text-white pb-1 text-sm font-normal tracking-[0.3px]">
                {card.day}
              </p>
              <h6 className="text-white text-2xl font-bold tracking-[0.23px]">
                {card.title}
              </h6>
            </div>
          </div>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex flex-row justify-between px-32 mt-10">
        <div className="flex flex-row">
          <button
            className="enabled:hover:bg-gradient-to-r from-[#d7ac38] to-[#ed3334] enabled:hover:text-white disabled:bg-slate-300 disabled:cursor-not-allowed
             bg-white rounded-full w-[42px] h-[42px] items-center flex justify-center cursor-pointer text-center mr-2"
            onClick={movePrev}
            disabled={isDisabled("prev")}
          >
            <AiOutlineLeft size={16} />
          </button>
          <button
            className="bg-white rounded-full w-[42px] h-[42px] items-center flex justify-center cursor-pointer 
            text-center enabled:hover:bg-gradient-to-r from-[#d7ac38] to-[#ed3334] enabled:hover:text-white disabled:bg-slate-300 disabled:cursor-not-allowed"
            onClick={moveNext}
            // disabled={isDisabled("next")}
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
    </div>
  );
}
