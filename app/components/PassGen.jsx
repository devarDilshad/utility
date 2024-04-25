"use client";
import React, { useState } from "react";
import axios from "axios";
import Image from "next/image";
import copy from "copy-to-clipboard";

import { Flip, ToastContainer, toast } from "react-toastify";

const PassGen = () => {
  const [numberOfChars, setNumberOfChars] = useState(10);
  const [includeNum, setIncludeNum] = useState(true);
  const [includeSpecialChar, setIncludeSpecialChar] = useState(true);
  const [generatedPassword, setGeneratedPassword] = useState("");

  const notify = () =>
    toast.success("Copied password!", {
      position: "top-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Flip,
    });

  const genPassword = async (e) => {
    e.preventDefault();
    const options = {
      method: "GET",
      url: "https://password-generator-by-api-ninjas.p.rapidapi.com/v1/passwordgenerator",
      params: {
        length: numberOfChars,
        exclude_numbers: !includeNum,
        exclude_special_chars: !includeSpecialChar,
      },
      headers: {
        "X-RapidAPI-Key": "c73b46d1f7msh324fa9003dd8277p1e8c16jsn0f9237434e51",
        "X-RapidAPI-Host": "password-generator-by-api-ninjas.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      setGeneratedPassword(response.data.random_password);
    } catch (error) {
      console.error(error);
    }
  };

  const increment = () => {
    if (numberOfChars < 18) setNumberOfChars(numberOfChars + 1);
  };
  const decrement = () => {
    if (numberOfChars > 4) setNumberOfChars(numberOfChars - 1);
  };

  const copyToClipboard = () => {
    copy(generatedPassword);
    notify();
  };

  return (
    <div>
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Flip}
      />

      <form
        onSubmit={(e) => genPassword(e)}
        className="flex flex-col overflow-hidden gap-6 text-white bg-gray-100 border-neutral-700 bg-neutral-800/20 px-6 py-10 rounded backdrop-blur-xl relative"
      >
        {/* No. Chars */}
        <div className="flex justify-between items-center">
          <h2>Length</h2>
          {/* numbuer input */}
          <div className="relative flex items-center max-w-[8rem]">
            <button
              onClick={decrement}
              disabled={numberOfChars < 5}
              type="button"
              id="decrement-button"
              data-input-counter-decrement="quantity-input"
              className=" bg-gray-700  border-gray-600 hover:bg-rose-400 border rounded-s-lg p-3 h-10 focus:ring-gray-700 focus:ring-2 focus:outline-none"
            >
              <svg
                className="w-3 h-3 text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 2"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h16"
                />
              </svg>
            </button>
            <input
              type="text"
              id="quantity-input"
              data-input-counter
              aria-describedby="helper-text-explanation"
              className=" border-x-0 h-10 text-center text-sm block w-full py-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500 rounded-none"
              value={numberOfChars}
              readOnly
            />
            <button
              onClick={increment}
              disabled={numberOfChars > 17}
              type="button"
              id="increment-button"
              data-input-counter-increment="quantity-input"
              className=" bg-gray-700 ho border-gray-600 hover:bg-blue-600 border rounded-e-lg p-3 h-10  focus:ring-gray-700 focus:ring-2 focus:outline-none"
            >
              <svg
                className="w-3 h-3  text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 18"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 1v16M1 9h16"
                />
              </svg>
            </button>
          </div>
        </div>
        {/* exclude_numbers */}
        <div className="flex justify-between items-center">
          <h2>Numbers</h2>
          <ul className="flex rounded-md -mt-1">
            <li>
              <button
                type="button"
                className={`border-[1px] ltr:rounded-r-md px-3 ease-in-out duration-200 rtl:rounded-l-md ${
                  !includeNum ? "bg-rose-700" : "border-gray-600"
                }`}
                onClick={() => setIncludeNum(false)}
              >
                <Image
                  src={"/no.png"}
                  width={24}
                  height={24}
                  alt="check"
                  className=""
                />
              </button>
            </li>
            <li className="">
              <button
                type="button"
                className={`border-[1px] ltr:rounded-l-md px-3 ease-in-out duration-200 rtl:rounded-r-md ${
                  includeNum ? "bg-sky-800" : "border-gray-600"
                }`}
                onClick={() => setIncludeNum(true)}
              >
                <Image
                  src={"/checks.png"}
                  width={24}
                  height={24}
                  alt="check"
                  className="p-1"
                />
              </button>
            </li>
          </ul>
        </div>
        {/* exclude_special_chars */}
        <div className="flex justify-between items-center gap-10">
          <h2>Special Characters</h2>
          <ul className="flex rounded-md -mt-1">
            <li>
              <button
                type="button"
                className={`border-[1px] ltr:rounded-r-md px-3 ease-in-out duration-200 rtl:rounded-l-md ${
                  !includeSpecialChar ? "bg-rose-700" : "border-gray-600"
                }`}
                onClick={() => setIncludeSpecialChar(false)}
              >
                <Image
                  src={"/no.png"}
                  width={24}
                  height={24}
                  alt="check"
                  className=""
                />
              </button>
            </li>
            <li className="">
              <button
                type="button"
                className={`border-[1px] ltr:rounded-l-md px-3 ease-in-out duration-200 rtl:rounded-r-md ${
                  includeSpecialChar ? "bg-sky-800" : "border-gray-600"
                }`}
                onClick={() => setIncludeSpecialChar(true)}
              >
                <Image
                  src={"/checks.png"}
                  width={24}
                  height={24}
                  alt="check"
                  className="p-1"
                />
              </button>
            </li>
          </ul>
        </div>
        <button
          type="submit"
          className=" border focus:outline-none focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 bg-blue-600 text-white border-gray-600 hover:bg-gray-700 hover:border-gray-600 focus:ring-blue-500 focus:border-blue-500"
        >
          Generate
        </button>
        <div className="flex flex-col justify-center items-center gap-4">
          <h4 className=" border-b text-center p-1">Generated Password</h4>
          <div className=" border text-wrap focus:outline-none focus:ring-4 w-full font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 bg-gray-800 text-white border-gray-600  focus:ring-blue-500 focus:border-blue-500 relative">
            <p className="min-h-6"> {generatedPassword} </p>
            <button
              type="button"
              className="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 bg-slate-700 rounded-r-lg px-3 focus:bg-slate-300"
              onClick={copyToClipboard}
            >
              <Image
                src={"/copied-icon.svg"}
                width={24}
                height={24}
                alt="copy icon"
              />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PassGen;
