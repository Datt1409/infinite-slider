import { Source_Sans_3 } from "next/font/google";
import Slider from "./components/Slider";
import { initialCards } from "./utils";
const source_sans = Source_Sans_3({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`${source_sans.className} w-screen h-screen overflow-hidden background-blue`}
    >
      <Slider cards={initialCards} />
    </main>
  );
}
