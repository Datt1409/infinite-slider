import { Source_Sans_3 } from "next/font/google";
import Slider from "./components/Slider";
import { initialCards } from "@/utils";
const source_sans = Source_Sans_3({ subsets: ["latin"] });

export default function Home() {
  const cardWith = 480;
  const cardHeight = 335;
  const gap = 9;

  return (
    <main
      className={`${source_sans.className} w-screen h-screen overflow-hidden background-blue`}
    >
      <Slider
        cards={initialCards}
        cardWith={cardWith}
        gap={gap}
        cardHeight={cardHeight}
      />
    </main>
  );
}
