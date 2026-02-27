"use client";
import { ChevronDown, ChevronUp, Share, Star } from "lucide-react";
import React, { useState } from "react";
import FormBMI from "./form";
import AccordComp from "./components/accord-comp";

const Page = () => {
  const [accToShow, setAccToShow] = useState<
    "when to use" | "pearls/pitfalls" | "when use"
  >("when to use");

  return (
    <div className="max-w-4xl  mx-auto ">
      {/* header  */}
      <header className="lg:flex md:flex-row  flex-col-reverse  py-6 lg:mx-0 mx-2">
        <div className="w-full md:hidden  flex justify-end gap-x-2">
          <button className="flex text-gray-one items-center gap-x-1">
            <span>
              <Star size={17} />
            </span>{" "}
            <span>Favorite</span>
          </button>
          <button className="flex text-gray-one items-center gap-x-1">
            <span>
              <Share size={17} />
            </span>{" "}
            <span>Share</span>
          </button>
        </div>
        {/* First Section */}
        <div className="md:w-[70%] w-full   text-gray-one">
          <h1 className="md:text-3xl text-xl font-bold ">
            BMI Calculator (Body Mass Index and BSA)
          </h1>
          <p>Calculates body mass index and body surface area.</p>
        </div>
        {/* second */}

        <div className="w-[30%] md:flex hidden justify-end gap-x-2">
          <button className="flex text-gray-one items-center gap-x-1">
            <span>
              <Star size={17} />
            </span>{" "}
            <span>Favorite</span>
          </button>
          <button className="flex text-gray-one items-center gap-x-1">
            <span>
              <Share size={17} />
            </span>{" "}
            <span>Share</span>
          </button>
        </div>
      </header>

      {/* Content */}
      <main className="lg:flex md:mx-0 mx-2 gap-x-4">
        {/* first section  */}

        <div className="md:w-[70%] w-full">
          <header className="bg-gray-two text-white p-2">
            <h1 className="font-semibold text-md capitalize">INSTRUCTIONS</h1>
            <p className="text-sm my-2 font-medium">
              Use in conjunction with other measurements such as waist-hip
              ratio, waist circumference, visceral fat measurement, and body
              adiposity index.
            </p>
          </header>

          {/* form */}

          <FormBMI />
          {/* Accord like items */}

          <>
            <AccordComp />
          </>
        </div>

        {/* Second Section */}
        <>
          <div className=" md:w-[30%]  w-full h-fit bg-gray-200 text-sm p-2  lg:my-0 my-4">
            <h1 className="font-bold text-center mt-4">About the Creator</h1>

            <div>
              <span className="font-semibold text-md">
                Adolphe Quetelet. Quetelet (1796-1874)
              </span>{" "}
              <span>
                was a Belgian mathematician, astronomer, and statistician who
                pioneered the application of statistical methods to human
                characteristics. His work on “average man” concepts led to the
                Quetelet Index, which later became the foundation of modern body
                mass index (BMI) as a standardized population-level measure of
                relative weight.
              </span>
            </div>
            {/* Second */}
            <div className="mt-4">
              <span className="font-semibold text-md">
                Robert D. Mosteller, MD. Mosteller (1936-2017)
              </span>{" "}
              <span>
                was an American physician who published a simplified body
                surface area (BSA) calculation to make BSA estimation practical
                at the bedside and easy to implement in clinical tools. The
                “Mosteller formula” became widely adopted because it is simple
                and performs similarly to more complex BSA equations used in
                clinical dosing conventions.
              </span>
            </div>
          </div>
        </>
      </main>
    </div>
  );
};

export default Page;
