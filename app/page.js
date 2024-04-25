import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start lg:gap-10 py-20 px-1 lg:px-4 lg:py-10 xl:p-14">
      <div className="z-10 max-w-7xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b bg-gradient-to-b pb-6 pt-8 px-2 backdrop-blur-2xl text-white border-neutral-800 bg-zinc-800/30 from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:p-4 lg:bg-zinc-800/30">
          utilities on the fly! click & use
        </p>
        <div className="fixed bottom-0 left-0 flex h-28 w-full items-end justify-center bg-gradient-to-t from-black via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none text-white flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By Devar
          </a>
        </div>
      </div>

      <div className="flex flex-row justify-center items-center gap-1 mt-14 ">
        <div>
          <Image
            src="/util.svg"
            alt="discount"
            className="invert"
            width={40}
            height={40}
            priority
          />
        </div>
        <h1 className="text-3xl lg:text-4xl text-white max-w-max">
          Boost Productivity
        </h1>
      </div>

      <div className="mb-96 grid text-center lg:max-w-7xl lg:w-full lg:mb-0 md:grid-cols-2 lg:grid-cols-4 lg:text-left my-8 text-white">
        <a
          href="/discountCalc"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:bg-gray-100 hover:border-neutral-700 hover:bg-neutral-800/30"
        >
          <h2
            className={`mb-3 text-2xl font-semibold flex justify-center lg:justify-start items-center gap-1`}
          >
            Discount Price
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              <Image
                src="/discount.svg"
                alt="discount"
                className="invert"
                width={24}
                height={24}
                priority
              />
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Maximize your savings effortlessly with our discount calculator
            utility. Instantly compute discounts and find the best deals with
            ease.
          </p>
        </a>

        <a
          href="/passwordGen"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-neutral-700 hover:bg-neutral-800 hover:bg-opacity-30"
        >
          <h2
            className={`mb-3 text-2xl font-semibold justify-center lg:justify-start items-center gap-1`}
          >
            Password Generator{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Generate strong and secure passwords instantly with our
            user-friendly password generator. Safeguard your accounts with
            randomized, hacker-resistant passwords.
          </p>
        </a>

        <a
          href="/ageCalc"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-neutral-700 hover:bg-neutral-800/30"
        >
          <h2
            className={`mb-3 text-2xl font-semibold flex justify-center lg:justify-start items-center gap-1`}
          >
            Age Calculator
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
            Calculate your age accurately. Instantly determine your age in years, months, and
            days with just a few clicks.
          </p>
        </a>

        <a
          href="/#"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-neutral-700 hover:bg-neutral-800/30"
        >
          <h2
            className={`mb-3 text-2xl font-semibold flex justify-center lg:justify-start items-center gap-1`}
          >
            Not What you need&nbsp;{" "}
            <span className=" whitespace-nowrap"> :(</span>
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none"></span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
            Email us to add the tool in your mind that might be usfull to you
            and many of us, one that makes our life easier
          </p>
        </a>
      </div>
    </main>
  );
}
