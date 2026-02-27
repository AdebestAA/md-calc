import { ChevronDown, ChevronUp } from "lucide-react";
import React, { useState } from "react";

const FormulaLiterature = () => {
  const [accToShowSecond, setAccToShowSecond] = useState<
    "formula" | "literature" | "creator"
  >("formula");
  return (
    <aside className="mt-8">
      <div className=" text-sm">
        <div className="flex text-sm border rounded mb-6">
          {["Formula", "Literature", "Creator"].map((item, index) => {
            return (
              <button
                key={index}
                onClick={() =>
                  setAccToShowSecond(
                    item.toLocaleLowerCase() as
                      | "formula"
                      | "literature"
                      | "creator",
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

      <section className="text-sm bg-gray-200 px-4 py-6 text-gray-one my-4">
        {accToShowSecond == "formula" && (
          <article className="font-medium">
            <h1 className="font-semibold text-lg text-center uppercase">
              Formula
            </h1>
            CKD-EPI Creatinine Equation (2021) Expressed as a single equation:
            eGFRc = 142 x min(Scr/k, 1)ª x max(Scr/k, 1) 1.200 x 0.9938Age x
            1.012 [if female] where: Sor = standardized serum creatinine in
            mg/dL к = 0.7 (females) or 0.9 (males) a = -0.241 (female) or -0.302
            (male) min(Scr/k, 1) is the minimum of Scr/k or 1.0 max(Scr/k, 1) is
            the maximum of Sor/k or 1.0 Age (years)
            <br />
            <br />
            CKD-EPI Creatinine-Cystatin Equation (2021) eGFRor-cys = 135 x
            min(Scr/K, 1)ª x max(Scr/K, 1)-0.544 x min(Scys/0.8, 1) 0.323 x max
            Scys/ 0.8, 1)-0.778 x 0.9961Age x 0.963 [if female] where: Sor =
            standardized serum creatinine in mg/dL k = 0.7 (females) or 0.9
            (males) a =-0.219 (female) or -0.144 (male) min(Scr/k, 1) is the
            minimum of Scr/k or 1.0 max(Sar/k, 1) is the maximum of Sar/k or 1.0
            Scys = standardized serum cystatin C in mg/L Age (years)
          </article>
        )}
        {accToShowSecond == "literature" && (
          <article>
            <h1 className="font-semibold text-lg text-center uppercase">
              Literature
            </h1>
            Original reference(s) Levey AS, Stevens LA, Schmid CH, et al. A new
            equation to estimate glomerular filtration rate. Ann Intern Med.
            2009;150(9):604-12. Inker LA, Schmid CH, Tighiouart H, et al.
            Estimating glomerular filtration rate from serum creatinine and
            cystatin C. N Engl J Med. 2012;367(1):20-9. Inker LA, Eneanya ND,
            Coresh J, et al. New creatinine- and cystatin c-based equations to
            estimate gfr without race. N Engl J Med. Published online September
            23, 2021.
          </article>
        )}
        {accToShowSecond == "creator" && (
          <article>
            <h1 className="font-bold text-lg text-center mt-4 uppercase">
              About the Creator
            </h1>

            <div>
              <span className="font-semibold text-md">
                Andrew S. Levey, MD. Dr. Levey
              </span>{" "}
              <span>
                serves as Chief of the Division of Nephrology at Tufts Medical
                Center and holds the Dr. Gerald J. and Dorothy R. Friedman
                Professorship at Tufts University School of Medicine. His
                clinical work centers on chronic kidney disease (CKD), diabetic
                kidney disease, and systemic lupus erythematosus. His research
                has focused extensively on methods for estimating kidney
                function, evaluation of emerging therapies, and the development
                of evidence-based clinical practice guidelines for CKD.
              </span>
            </div>
            {/* Second */}
            <div className="mt-4">
              <span className="font-semibold text-md">
                Lesley A. Inker, MD, MS. Dr. Inker
              </span>{" "}
              <span>
                is an Associate Professor at Tufts University School of Medicine
                and an attending physician in the William B. Schwartz, MD
                Division of Nephrology at Tufts Medical Center. She also serves
                as Medical Director of the Kidney and Blood Pressure Center at
                Tufts Medical Center. Her research focuses on GFR measurement
                and estimation, identification of alternative endpoints for
                clinical trials in kidney disease progression, and the
                epidemiology and outcomes of CKD.
              </span>
            </div>
          </article>
        )}
      </section>
    </aside>
  );
};

export default FormulaLiterature;
