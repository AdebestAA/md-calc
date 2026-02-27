import { ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const bmiFactsAndFigures = [
  {
    bmi: "<18.5",
    category: "Underweight",
    class: null,
  },
  {
    bmi: "18.5-24.9",
    category: "Normal weight",
    class: null,
  },
  {
    bmi: "25.0-29.9",
    category: "Overweight",
    class: null,
  },
  {
    bmi: "30.0-34.9",
    category: "Obese",
    class: "Class 1",
  },
  {
    bmi: "35.0-39.9",
    category: "Obese",
    class: "Class 2",
  },
  {
    bmi: "≥40.0",
    category: "Obese",
    class: "Class 3",
  },
];
const AccordComp = () => {
  const [accToShowSecond, setAccToShowSecond] = useState<
    "next stage" | "evidence" | "creator insight"
  >("next stage");

  const [factAndFiguresData, setFactAndFiguresData] =
    useState(bmiFactsAndFigures);

  useEffect(() => {
    console.log(accToShowSecond);
  }, [accToShowSecond]);
  return (
    <aside className="mt-8">
      <div className=" text-sm">
        <div className="flex text-sm border rounded mb-6">
          {["Next Stage", "Evidence", "Creator Insight"].map((item, index) => {
            return (
              <button
                key={index}
                onClick={() =>
                  setAccToShowSecond(
                    item.toLocaleLowerCase() as
                      | "next stage"
                      | "evidence"
                      | "creator insight",
                  )
                }
                className={`${item.toLocaleLowerCase() == accToShowSecond && "bg-primary text-white"} flex-1 px-3 py-2 border border-gray-800 font-semibold 0  cursor-pointer  flex items-center justify-evenly text-sm`}
              >
                <span>{item}</span>
                <span>
                  {item.toLocaleLowerCase() == accToShowSecond ? (
                    <ChevronUp />
                  ) : (
                    <ChevronDown />
                  )}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <section className="text-sm bg-gray-200 px-4 py-6 text-gray-one my-4 leading-7">
        {accToShowSecond == "next stage" && (
          <article className="font-medium">
            {/* <h1 className="font-bold text-md uppercase ">ADVICE</h1>
            <ul className="list-disc list-outside pl-5">
              <li>
                For patients identified as underweight or overweight, consider
                further nutritional or physical assessments and referrals as
                appropriate.
              </li>
              <li>
                Individuals diagnosed with overweight or obesity should be
                counseled on diet and exercise.
              </li>
              <li>
                In cases involving drug dosing, especially chemotherapy, regular
                monitoring and dose adjustments based on changes in BSA are
                necessary to optimize therapeutic outcomes.
              </li>
            </ul> */}
            <p className="mt-4">
              <span className="font-bold text-md ">High BMI:</span>
              assess overall cardiometabolic risk (blood pressure, glycemic
              status, lipids), lifestyle factors, and consider weight-management
              counseling.
            </p>
            <p className="mt-4">
              {" "}
              <span className="font-bold text-md ">Low BMI:</span> evaluate
              nutritional status and potential underlying chronic disease.
            </p>
            <p className="mt-4">
              {" "}
              <span className="font-bold text-md ">BSA-based dosing:</span>
              confirm regimen-specific rules (rounding/capping) and
              organ-function considerations before final dosing.
            </p>
            <br />
            <br />
            <h1 className="font-bold text-md uppercase">MANAGEMENT</h1>
            Management should not depend solely on BMI or BSA measurements, but
            on these values in conjunction with other body measurements and the
            overall clinical picture.
            <br />
            <br />
            <h1 className="font-bold text-md uppercase">CRITICAL ACTIONS</h1>A
            diagnosis of obesity can be made with a BMI of ≥30 kg/m2 alone; no
            further confirmatory testing or measurement is required (
            <Link
              className="text-blue-500 font-normal"
              href={"https://pubmed.ncbi.nlm.nih.gov/39824205/"}
            >
              Rubino et al., 2025
            </Link>
            ).
          </article>
        )}
        {accToShowSecond == "evidence" && (
          <article className="font-semibold ">
            <h1 className="font-bold text-md uppercase">FORMULA</h1>
            <div>
              Body mass index, kg/m2 = weight, kg / (height, m)2 Body surface
              area (the Mosteller formula), m2 = [ Height, cm x Weight, kg /
              3600 ]1/2
            </div>
            <h1 className="font-bold text-md uppercase mt-4">
              Facts & Figures
            </h1>

            <main className="w-full ">
              <header className="flex justify-between w-full font-bold">
                <h1 className="w-[33%] ">
                  BMI, kg/m<sup>2</sup>
                </h1>
                <h1 className="w-[33%]">Weight</h1>
                <div className="w-[33%]  h-2"></div>
              </header>
              <div>
                {factAndFiguresData.map((item, index) => {
                  return (
                    <div key={index} className="flex justify-between w-full  ">
                      <h1 className="w-[33%] ">{item.bmi}</h1>
                      <h1 className="w-[33%] ">{item.category}</h1>
                      <h1 className="w-[33%] ">{item.class}</h1>
                    </div>
                  );
                })}
              </div>
            </main>

            <p className="my-4">
              *Since the typical classification may underestimate the risk of
              cardiovascular disease associated with obesity in Asian
              populations, organizations like the WHO and NIH recommend lower
              BMI thresholds for these individuals. In this context,
              "overweight" is defined as a BMI of 23-24.9 kg/m² and "obesity" as
              a BMI of ≥25 kg/m².
            </p>
          </article>
        )}
        {accToShowSecond == "creator insight" && (
          <article>
            <h1 className="font-bold text-lg text-center mt-4 uppercase">
              About the Creator
            </h1>

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
          </article>
        )}
      </section>
    </aside>
  );
};

export default AccordComp;
