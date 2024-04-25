"use client";
import { useState } from "react";
import Image from "next/image";

const AgeCalc = () => {
  const [myYear, setMyYear] = useState("");
  const [myMonth, setMyMonth] = useState("");
  const [myDay, setMyDay] = useState("");

  const [calculatedYear, setCalculatedYear] = useState("--");
  const [calculatedMonth, setCalculatedMonth] = useState("--");
  const [calculatedDay, setCalculatedDay] = useState("--");

  const d = new Date();
  const year = d.getFullYear();
  const month = d.getMonth() + 1;
  const day = d.getDate();

  const calculateAge = async (e) => {
    e.preventDefault();
    if (myMonth > month) {
      setCalculatedYear(year - myYear - 1);
    } else {
      setCalculatedYear(year - myYear);
    }
    if (myMonth > month) {
      setCalculatedMonth(12 - (myMonth - month) - 1);
    } else {
      setCalculatedMonth(month - myMonth);
    }
    if (myDay > day) {
      setCalculatedDay(12 - (myDay - day));
    } else {
      setCalculatedDay(day - myDay);
    }
  };
  return (
    <div>
      <div className="w-full max-w-[21rem] grid grid-cols-1 gap-6 bg-gray-100 border-neutral-700 bg-neutral-800/40 px-6 py-10 rounded-lg rounded-br-[30%] backdrop-blur-3xl">
        <form
          className="grid grid-cols-1 gap-4"
          onSubmit={(e) => calculateAge(e)}
        >
          {/* = */}
          <div className="grid grid-cols-1 min-[320px]:grid-cols-3 justify-center items-center gap-4">
            <div>
              <label
                htmlFor="number-input"
                className="block mb-2 uppercase text-sm font-medium text-white"
              >
                DAY
              </label>

              <input
                value={myDay}
                onChange={(e) => setMyDay(e.target.value)}
                type="number"
                autoComplete="off"
                max={31}
                min={1}
                id="zip-input"
                aria-describedby="helper-text-explanation"
                className="border px-4 max-w-20 text-sm rounded-lg block p-2 pl-1.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                placeholder="1-31"
                required
              />
            </div>
            <div>
              <label
                htmlFor="number-input"
                className="block mb-2 uppercase text-sm font-medium text-white"
              >
                month
              </label>

              <input
                value={myMonth}
                onChange={(e) => setMyMonth(e.target.value)}
                type="number"
                autoComplete="off"
                max={12}
                min={1}
                id="zip-input"
                aria-describedby="helper-text-explanation"
                className="border px-4 max-w-20  text-sm rounded-lg block p-2 pl-1.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                placeholder="12"
                required
              />
            </div>
            <div>
              <label
                htmlFor="number-input"
                className="block mb-2 uppercase text-sm font-medium text-white"
              >
                year
              </label>

              <input
                value={myYear}
                onChange={(e) => setMyYear(e.target.value)}
                type="number"
                max={2024}
                min={0}
                autoComplete="off"
                id="zip-input"
                aria-describedby="helper-text-explanation"
                className=" border px-4 max-w-20   text-sm rounded-lg block p-2 pl-1.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                placeholder="2010"
                required
              />
            </div>
          </div>

          <div className="w-full h-[1px] bg-gray-700 relative my-10">
            <button
              type="submit"
              className="absolute z-10 peer -top-full right-0 flex justify-center items-center hover:bg-rose-500 -translate-y-1/2 w-10 h-10 border focus:outline-none focus:ring-4 font-medium rounded-full text-white border-gray-600 bg-gray-700 duration-200 hover:border-gray-600 focus:ring-blue-500 focus:border-blue-500"
            >
              <Image
                src="/arrowdown.svg"
                width={16}
                height={16}
                alt="arrow-down"
              />
            </button>
            <div className="absolute w-0 right-0 h-[1px] bg-gray-700 peer-hover:bg-red-700 peer-hover:w-full duration-1000" />
          </div>
        </form>

        <div>
          <h4 className="text-3xl md:text-5xl font-bold text-rose-500 italic">
            {calculatedYear} &nbsp;
            <span className="text-white">
              {calculatedYear > 1 ? "years" : "year"}
            </span>
          </h4>
          <h4 className="text-3xl md:text-5xl font-bold text-rose-500 italic">
            {calculatedMonth} &nbsp;
            <span className="text-white">
              {calculatedMonth > 1 ? "months" : "month"}
            </span>
          </h4>
          <h4 className="text-3xl md:text-5xl font-bold text-rose-500 italic">
            {calculatedDay} &nbsp;
            <span className="text-white">
              {calculatedDay > 1 ? "days" : "day"}
            </span>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default AgeCalc;
