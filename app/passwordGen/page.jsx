import Image from "next/image";
import PassGen from "../components/PassGen";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start px-4">
      <div className="flex flex-col justify-center items-center gap-10 mt-14">
        <h1 className="text-2xl lg:text-4xl text-white text-center lg:text-start">
          <a href="/" >🔙</a> Password Generator
        </h1>
        <PassGen />
      </div>
    </main>
  );
}
