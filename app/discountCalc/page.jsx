import Image from "next/image";
import DiscountCalc from "../components/DiscountCalc";

export const metadata = {
  title: "Discountility",
  description:
    "Maximize your savings effortlessly with our discount calculator utility. Instantly compute discounts and find the best deals with ease.",
};
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center lg:gap-20 py-1 px-6 lg:p-24 relative">
      <a className="absolute top-8 left-4" href="/">
        <Image src="/back.png" width={24} height={24} alt="back" />
      </a>
      <div className="flex flex-col justify-center items-center gap-10 mt-14 ">
        <h1 className="text-2xl lg:text-4xl text-white text-center lg:text-start">
          Discount Calculator
        </h1>
        <DiscountCalc />
      </div>
    </main>
  );
}
