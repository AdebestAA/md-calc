"use client";
import { ChevronDown, ChevronUp, Share, Star } from "lucide-react";
import React, { useState } from "react";
import FormBMI from "./form";

const Page = () => {
  const [accToShow, setAccToShow] = useState<
    "when to use" | "pearls/pitfalls" | "when use"
  >("when to use");
  return (
    <div className="max-w-4xl mx-auto">
      {/* header  */}
      <header className="lg:flex py-6">
        {/* First Section */}
        <div className="w-[70%] text-gray-one">
          <h1 className="text-3xl font-bold ">
            BMI Calculator (Body Mass Index and BSA)
          </h1>
          <p>Calculates body mass index and body surface area.</p>
        </div>
        {/* second */}
        <div className="w-[30%] flex justify-end gap-x-2">
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
      <main className="lg:flex">
        {/* first section  */}

        <div className="w-[70%]">
          <header className="bg-gray-two text-white p-2">
            <h1 className="font-semibold text-md capitalize">INSTRUCTIONS</h1>
            <p className="text-sm my-2 font-medium">
              Use in conjunction with other measurements such as waist-hip
              ratio, waist circumference, visceral fat measurement, and body
              adiposity index.
            </p>
          </header>
          {/* Accord like items */}

          <aside className="my-4">
            {/* Accord heading */}
            <div className=" text-sm">
              <div className="flex text-sm border rounded mb-6">
                {["When to Use", "Pearls/Pitfalls", "When Use"].map(
                  (item, index) => {
                    return (
                      <button
                        key={index}
                        onClick={() =>
                          setAccToShow(
                            item.toLocaleLowerCase() as
                              | "when to use"
                              | "pearls/pitfalls"
                              | "when use",
                          )
                        }
                        className={`${item.toLocaleLowerCase() == accToShow && "bg-primary text-white"} flex-1 px-3 py-2 border border-gray-800 font-semibold 0  cursor-pointer  flex items-center justify-evenly text-sm`}
                      >
                        <span>{item}</span>
                        <span>
                          {item.toLocaleLowerCase() == accToShow ? (
                            <ChevronUp />
                          ) : (
                            <ChevronDown />
                          )}
                        </span>
                      </button>
                    );
                  },
                )}
              </div>
            </div>

            {/* Accord items */}
            <div className="text-sm">
              {accToShow == "when to use" && (
                <ul className="pl-8 list-disc bg-gray-300 py-4 px-2">
                  <li>
                    <span className="font-semibold">BMI:</span>
                    <span>
                      This calculation is routinely used during clinical
                      evaluations to estimate the appropriateness of an
                      individual&apos;s weight relative to their height, serving
                      as a preliminary step in identifying patients who are
                      underweight or overweight.
                    </span>
                  </li>

                  <li className="mt-2">
                    <span className="font-semibold">BSA:</span>
                    <span>
                      This formula estimates an individual&apos;s total external
                      surface area, aiding in calculating dosages for
                      medications, such as chemotherapy, and measuring cardiac
                      index.
                    </span>
                  </li>
                </ul>
              )}

              {accToShow == "pearls/pitfalls" && (
                <ul className="pl-8 list-disc bg-gray-300 py-4 px-2">
                  <li>
                    Always use the most recent height and weight measurements to
                    ensure accuracy.
                  </li>

                  <li>
                    Remember that both BMI and BSA are part of a larger clinical
                    context and should be used in conjunction with other
                    assessments and patient history.
                  </li>
                  <h1 className="font-semibold my-2">BMI:</h1>
                  <li>Does not distinguish between fat and muscle mass. </li>
                  <li>
                    Tends to overestimate body fat in individuals with very high
                    muscle mass who are otherwise healthy, and can underestimate
                    it in older adults due to age-related muscle loss.{" "}
                  </li>
                  <li>
                    The typical classification may underestimate the risk of
                    cardiovascular disease associated with obesity in Asian
                    populations. Organizations like the Wold Health Organization
                    (WHO) and National Institutes of Health (NIH) recommend
                    lower BMI thresholds for these individuals. Please see
                    Evidence for more details.{" "}
                  </li>
                  <li>
                    BMI is based primarily on data collection from non-Hispanic
                    white populations, making its generalizability prone to
                    inaccuracy.
                  </li>
                  <li>
                    Some organizations, such as the AMA, have recognized the
                    importance of using a variety of measures to determine an
                    appropriate risk assessment and advise clinicians to
                    eliminate the use of BMI as a sole indicator of risk.
                  </li>
                  <li>
                    BMI should be utilized in conjunction with measurements of
                    visceral fat, body adiposity index, waist circumference, and
                    other metabolic/genetic factors when diagnosing obesity
                    (Rubino et al., 2025).
                  </li>
                  <h1 className="font-semibold my-2">BSA:</h1>
                  <li>
                    Multiple formulas for BSA are available. This tool utilizes
                    the Mosteller formula.
                  </li>
                  <li>
                    May be less precise for neonates and infants, as well as for
                    individuals at extreme values of height and weight.
                  </li>
                </ul>
              )}
              {/* when use */}
              {accToShow == "when use" && (
                <article className="pl-8 bg-gray-300 py-4 px-2">
                  BMI provides a quick estimate of adiposity, while the BSA
                  calculation helps estimate an individual&apos;s total external
                  surface area, which is difficult to measure directly.
                </article>
              )}
            </div>
          </aside>

          {/* form */}

          <FormBMI />
        </div>

        {/* Second Section */}
        <div className="w-[30%]">second section</div>
      </main>
    </div>
  );
};

export default Page;
