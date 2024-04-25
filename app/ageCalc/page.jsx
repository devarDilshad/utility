import Image from "next/image";
import AgeCalc from "../components/AgeCalc";

export const metadata = {
  title: "Agetility",
  description:
    "Calculate your age accurately. Instantly determine your age in years, months, and days with just a few clicks.",
};

export default function Home() {
  return (
    <main className="min-h-screen justify-start lg:items-start lg:gap-20 py-1 px-2 lg:p-24 relative">
      <a className="absolute top-8 left-4" href="/">
        <Image src="/back.png" width={24} height={24} alt="back" />
      </a>
      <div className="flex flex-col justify-center items-center lg:justify-start lg:items-start gap-10 mt-14">
        <h1 className="text-2xl lg:text-4xl text-white text-center lg:text-start">
          Age Calc
        </h1>
        <AgeCalc />
      </div>
    </main>
  );
}
