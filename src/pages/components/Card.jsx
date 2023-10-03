import React from "react";

export default function Card({ clonedCards }) {
  console.log(clonedCards);
  return (
    <>
      {clonedCards.map((card, i) => (
        <div
          key={i}
          style={{
            backgroundImage: `url(${card.url})`,
          }}
          className={`w-[480px] h-[335px] relative bg-cover flex-shrink-0`}
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
    </>
  );
}
