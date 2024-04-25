"use client";
import { useState } from "react";

const DiscountCalc = () => {
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
    <form
      onSubmit={(e) => calcDiscount(e)}
      className="flex flex-col gap-6 border-neutral-700 bg-neutral-800/40 px-6 py-10 rounded backdrop-blur-xl"
    >
      <ul className=" text-white">
        <li className="flex rounded-md -mt-1">
          <button
            type="button"
            className={`border-[1px] ltr:rounded-l-md px-3 ease-in-out duration-200 rtl:rounded-r-md ${
              percentage ? "border-white" : "border-gray-600"
            }`}
            onClick={() => setPercentage(true)}
          >
            <i className="text-white">%</i>
          </button>
          <button
            type="button"
            className={`border-[1px] ltr:rounded-r-md px-3 ease-in-out duration-200 rtl:rounded-l-md ${
              !percentage ? "border-white" : "border-gray-600"
            }`}
            onClick={() => setPercentage(false)}
          >
            <i className="text-white">$</i>
          </button>
        </li>
      </ul>
      {/* Price */}
      <div>
        <label
          htmlFor="original-price-input"
          className="block mb-2 text-sm font-medium text-white"
        >
          Original Price:
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none text-white">
            $
          </div>
          <input
            onChange={(e) => setPrice(e.target.value)}
            type="number"
            min={1}
            id="original-price-input"
            aria-describedby="helper-text-explanation"
            className="border text-sm rounded-lg block w-full ps-4 p-2.5  bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
            placeholder="90.00  "
            step="0.01"
            required
            autoComplete="off"
          />
        </div>
      </div>

      {/* dicount */}
      <div>
        <label
          htmlFor="discount-input"
          className="block mb-2 text-sm font-medium text-white"
        >
          Discount:
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none text-white">
            {percentage ? "%" : "$"}
          </div>
          <input
            onChange={(e) => setDiscount(e.target.value)}
            type="number"
            min={0}
            step="0.01"
            id="discount-input"
            aria-describedby="helper-text-explanation"
            className=" border text-sm rounded-lg   block w-full ps-4 p-2.5  bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
            placeholder="15.0"
            required
            autoComplete="off"
          />
        </div>
      </div>
      <button
        type="submit"
        className="border focus:outline-none focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 bg-gray-800 text-white border-gray-600 hover:bg-gray-700 hover:border-gray-600 focus:ring-blue-500 focus:border-blue-500"
      >
        Calculate
      </button>
      <div className="px-1 space-y-2 text-white">
        <h4 className="flex justify-between items-center">
          You Pay : <span className=" border-b"> {discountedPrice} $ </span>
        </h4>
        <h4 className="flex justify-between items-center">
          You Save : <span className=" border-b"> {saving} $ </span>
        </h4>
      </div>
    </form>
  );
};

export default DiscountCalc;
