import React from "react";
import Image from "next/image";

export default function Title() {
  return (
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
  );
}
