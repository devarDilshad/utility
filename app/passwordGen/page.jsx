import Image from "next/image";
import PassGen from "../components/PassGen";

export const metadata = {
  title: "Passwotility",
  description:
    " Generate strong and secure passwords instantly with our user-friendly password generator. Safeguard your accounts with randomized, hacker-resistant passwords.",
};
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start px-4 relative">
      <a className="absolute top-8 left-4" href="/">
        <Image src="/back.png" width={24} height={24} alt="back" />
      </a>
      <div className="flex flex-col justify-center items-center gap-10 mt-14">
        <h1 className="text-2xl lg:text-4xl text-white text-center lg:text-start">
          Password Generator
        </h1>
        <PassGen />
      </div>
    </main>
  );
}
