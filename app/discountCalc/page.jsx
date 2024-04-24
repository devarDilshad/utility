"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [percentage, setPercentage] = useState(true);
  const [price, setPrice] = useState(0.0);
  const [discount, setDiscount] = useState(0.0);
  const [discountedPrice, setDiscountedPrice] = useState(0.0);
  const [saving, setSaving] = useState(0.0);

  function truncDigits(inputNumber, digits) {
    const fact = 10 ** digits;
    return Math.floor(inputNumber * fact) / fact;
  }

  const calcDiscount = (e) => {
    e.preventDefault();
    if (percentage) {
      let discountPrice = price - (price * discount) / 100;
      discountPrice = truncDigits(discountPrice, 2);
      let save = price - discountPrice;
      save = truncDigits(save, 2);
      setDiscountedPrice(discountPrice);
      setSaving(save);
    } else {
      let discountPrice = price - discount;
      discountPrice = truncDigits(discountPrice, 2);
      let save = price - discountPrice;
      save = truncDigits(save, 2);
      setDiscountedPrice(discountPrice);
      setSaving(save);
    }
  };
  return (
    <main className="flex min-h-screen flex-col items-center lg:gap-20 py-1 px-6 lg:p-24">
      <div className="flex flex-col justify-center items-center gap-10 mt-14">
        <h1 className="text-2xl lg:text-4xl text-white text-center lg:text-start">
          <a href="/">🔙</a>{" "}
          Discount Calculator
        </h1>

        <form
          onSubmit={(e) => calcDiscount(e)}
          className="flex flex-col gap-6 border-neutral-700 bg-neutral-800/40 px-6 py-10 rounded backdrop-blur-xl"
        >
          <ul className="">
            <li className="flex rounded-md -mt-1">
              <button
                type="button"
                className={`border-[1px] ltr:rounded-l-md px-3 ease-in-out duration-200 rtl:rounded-r-md ${
                  percentage ? "border-white" : "border-gray-600"
                }`}
                onClick={() => setPercentage(true)}
              >
                <i className="">%</i>
              </button>
              <button
                type="button"
                className={`border-[1px] ltr:rounded-r-md px-3 ease-in-out duration-200 rtl:rounded-l-md ${
                  !percentage ? "border-white" : "border-gray-600"
                }`}
                onClick={() => setPercentage(false)}
              >
                <i className="">$</i>
              </button>
            </li>
          </ul>
          {/* Price */}
          <div>
            <label
              htmlFor="number-input"
              className="block mb-2 text-sm font-medium text-white"
            >
              Original Price:
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none">
                $
              </div>
              <input
                onChange={(e) => setPrice(e.target.value)}
                type="text"
                id="zip-input"
                aria-describedby="helper-text-explanation"
                className="border text-sm rounded-lg block w-full ps-4 p-2.5  bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                placeholder="90.00  "
                pattern="^[+]?([.]\d+|\d+[.]?\d*)$"
                required
              />
            </div>
          </div>

          {/* dicount */}
          <div>
            <label
              htmlFor="number-input"
              className="block mb-2 text-sm font-medium text-white"
            >
              Discount:
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none">
                {percentage ? "%" : "$"}
              </div>
              <input
                onChange={(e) => setDiscount(e.target.value)}
                type="text"
                id="zip-input"
                aria-describedby="helper-text-explanation"
                className=" border text-sm rounded-lg   block w-full ps-4 p-2.5  bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                placeholder="15.0"
                pattern="^[+]?([.]\d+|\d+[.]?\d*)$"
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="border focus:outline-none focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 bg-gray-800 text-white border-gray-600 hover:bg-gray-700 hover:border-gray-600 focus:ring-blue-500 focus:border-blue-500"
          >
            Calculate
          </button>
          <div className="px-1 space-y-2">
            <h4 className="flex justify-between items-center">
              You Pay : <span className=" border-b"> {discountedPrice} $ </span>
            </h4>
            <h4 className="flex justify-between items-center">
              You Save : <span className=" border-b"> {saving} $ </span>
            </h4>
          </div>
        </form>
      </div>
    </main>
  );
}
