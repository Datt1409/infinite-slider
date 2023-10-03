import Image from "next/image";
import React, { useState, useRef, useEffect, useMemo } from "react";
import { findPointerIndex } from "../../utils";
import Button from "./Button";
import Title from "./Title";
import Card from "./Card";

export default function Slider({ cards }) {
  const [currentIndex, setCurrentIndex] = useState(4);
  const [active, setActive] = useState(true);
  const carousel = useRef(null);
  const clonedCards = useMemo(
    () => [...cards.slice(-2), ...cards, ...cards.slice(0, 2)],
    [cards]
  );

  const findPointer = useMemo(
    () => findPointerIndex(clonedCards, 4),
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

  const onTransitonEnd = () => {
    setActive(true);
    if (currentIndex === findPointer.secondIndex) {
      carousel.current.style.transitionDuration = "0ms";
      setCurrentIndex(findPointer.firstIndex);
      // carousel.current.style.transform = `translateX(${4 * 516}px)`;
    } else if (currentIndex === findPointer.firstIndex) {
      carousel.current.style.transitionDuration = "0ms";
      setCurrentIndex(findPointer.secondIndex);
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
        priority={false}
      />
      {/* Title */}
      <Title />

      {/* Cards */}
      <div
        className={`w-full flex flex-row mx-32 gap-9 relative z-10`}
        ref={carousel}
        onTransitionEnd={() => onTransitonEnd()}
      >
        <Card clonedCards={clonedCards} />
      </div>

      {/* Buttons */}
      <Button moveNext={moveNext} movePrev={movePrev} />
    </div>
  );
}
