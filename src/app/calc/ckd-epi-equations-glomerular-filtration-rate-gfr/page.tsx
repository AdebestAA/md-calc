"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import axios, { AxiosError } from "axios";
import { ChevronDown, ChevronUp, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { z } from "zod";
import FormulaLiterature from "./components/formula-literature";

const formSchema = z.object({
  sex: z.enum(["male", "female"], {
    message: "Sex is required",
  }),
  age: z
    .number()
    .min(1, "value must be greater than zero")
    .max(120, "Invalid age"),
  creatinine: z.string({ message: "field can't be empty" }),
});

export type FormValues = z.infer<typeof formSchema>;

const equations = [
  "2021 CKD-EPI Creatinine",
  "2021 CKD-EPI Creatinine-Cystatin C",
  "2009 CKD-EPI Creatinine",
  "2012 CKD-EPI Cystatin C",
  "2012 CKD-EPI Creatinine-Cystatin C",
];

export default function CKDEpiCalculator() {
  const [sex, setSex] = useState("female");
  const [equation, setEquation] = useState("2021 CKD-EPI Creatinine");

  const [accToShow, setAccToShow] = useState<
    "when to use" | "pearls/pitfalls" | "when use"
  >("when to use");
  const { watch, setValue, register, formState, reset } = useForm<
    z.infer<typeof formSchema>
  >({
    resolver: zodResolver(formSchema),
    defaultValues: {
      sex: "female",
      age: 18,
      creatinine: "",
    },
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [returnedData, setReturnedData] = useState<{
    success: boolean;
    data?: { result: number | null; stage: string | null };
  }>();

  const values = watch();

  console.log(values);

  const handleSubmit = async (
    age: number,
    sex: string,
    creatinine: number | string,
  ) => {
    setLoading(true);
    // setError("");
    setSuccess("");

    try {
      const response = await axios.post(
        "/api/calc/glomerular-filtration-rate-gfr",
        {
          age,
          sex,
          creatinine,
        },
      );

      //   alert("");
      console.log(response.data);
      setReturnedData(response.data);
      // reset();
    } catch (err) {
      const error = err as AxiosError<any>;

      if (error.response) {
        // Server responded with error
        alert(error.response.data?.message || "Server error");
      } else if (error.request) {
        // No response received
        alert("Network error. Check your connection.");
      } else {
        // Other error
        alert(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (loading || values.creatinine == "" || returnedData?.success) {
      return;
    }

    // console.log(age, sex, Number(creatinine), formState.isValid);

    if (!formState.isValid) {
      console.log("not validated");
      return;
    }

    console.log("passed");

    // set a 2-second debounce

    const timer = setTimeout(() => {
      const age = watch("age");
      const sex = watch("sex");
      const creatinine = watch("creatinine");

      handleSubmit(age, sex, creatinine);
    }, 1000);

    return () => clearTimeout(timer);
  }, [values, formState.isValid, loading]);

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center py-6">
      <div className="w-full max-w-4xl  rounded overflow-hidden px-2">
        {/* Header */}
        <div className="p-6 ">
          <h1 className="md:text-4xl text-2xl font-bold text-gray-800">
            CKD-EPI Equations for Glomerular Filtration Rate (GFR)
          </h1>
          <p className="text-sm text-gray-600 mt-1">
            Estimates GFR in CKD patients using serum creatinine, cystatin C, or
            both.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-2">
          {/* Left main content */}
          <div className="md:col-span-2  ">
            {/* Important section */}
            <div className=" space-y-4">
              <div className="border rounded bg-[#fa6750]  text-white ">
                <div className="text-sm font-semibold px-3 py-1">IMPORTANT</div>
                <div className="p-3 text-sm leading-relaxed">
                  The 2021 CKD-EPI equation is now the recommended standard.
                  This version does not include race, as do the 2009 and 2012
                  CKD-EPI creatinine and creatinine-cystatin C equations. See
                  here for more on our approach to addressing race and bias on
                  DxRx™. With the 2021 equation, for the same creatinine value,
                  the 2021 equation will estimate a lower GFR for Black patients
                  and a higher GFR for non-Black patients.
                </div>
              </div>

              <div className="border rounded bg-[#5c7088] text-white">
                <div className="  text-sm font-semibold px-3 py-1">
                  INSTRUCTIONS
                </div>
                <div className="p-3 text-sm leading-relaxed">
                  For use in patients with stable kidney function. While the
                  combined creatinine and cystatin C equation can add accuracy,
                  cystatin c is not available in all laboratories and the
                  creatinine-based equation is adequate for many clinical
                  purposes. 2021 CKD-EPI creatinine is currently recommended by
                  the ASN and NKF for GFR reporting in the United States.
                </div>
              </div>

              {/* Tabs */}
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
                          className={`${item.toLocaleLowerCase() == accToShow && "bg-primary"} flex-1 px-3 py-3 border border-gray-800 font-semibold 0  cursor-pointer`}
                        >
                          {item}
                        </button>
                      );
                    },
                  )}
                </div>
                {accToShow == "when to use" && (
                  <ul className="pl-8 list-disc bg-gray-300 py-4 px-2">
                    <li>
                      Patients with chronic kidney disease (not acute), to
                      measure kidney function. CKD-EPI Creatinine is more
                      commonly available.
                    </li>

                    <li>
                      2021 CKD-EPI creatinine-cystatin is recommended as a
                      confirmatory test in patients at extremes of body type
                      (e.g. obese patients, high or low muscle mass).
                    </li>
                  </ul>
                )}

                {accToShow == "pearls/pitfalls" && (
                  <ul className="pl-8 list-disc bg-gray-300 py-4 px-2">
                    <li>
                      In 2021 new equations were created to remove the race
                      components from the prior CKD-Epi equations and should be
                      the new standard equations; we continue to offer the prior
                      equations for comparison/trending.
                    </li>

                    <li>
                      Creatinine-based estimates of kidney function by
                      glomerular filtration rate (GFR) are less accurate in
                      certain populations including patients with diabetes
                      (before progression to overt nephropathy with diminished
                      GFR), pregnant women, those with unusual body mass (e.g.
                      obese, severely malnourished, amputees, paraplegics, etc)
                    </li>
                    <li>Not for use in patients on dialysis.</li>
                  </ul>
                )}
                {/* when use */}
                {accToShow == "when use" && (
                  <article className="pl-8 bg-gray-300 py-4 px-2">
                    The CKD-EPI equation performs superiorly to the MDRD
                    Equation in patients with normal or mildly reduced estimated
                    GFR (eGFR), and just as well in patients with an eGFR of 60
                    mL/min/m2. It is used most widely by nephrologists and
                    understood to be the most accurate means of non-invasively
                    assessing GFR in the United States.
                  </article>
                )}
              </div>

              {/* Equation selector */}
              <div className="flex justify-between">
                <label className="block text-sm font-semibold mb-2">
                  Equation
                </label>
                <div className="border rounded w-2/4 overflow-hidden">
                  {equations.map((eq) => (
                    <button
                      key={eq}
                      onClick={() => setEquation(eq)}
                      className={`cursor-pointer hover:bg-primary hover:text-white w-full text-left px-3 py-2 text-sm border-b last:border-b-0 ${
                        equation === eq ? "bg-primary text-white " : ""
                      }`}
                    >
                      {eq}
                    </button>
                  ))}
                </div>
              </div>

              {/* Sex */}
              <div className="flex justify-between items-center  border-y border-gray-300  py-3">
                <label className=" text-sm font-semibold mb-2 ">Sex</label>
                <div className="flex border rounded overflow-hidden w-2/4">
                  {["female", "male"].map((s) => (
                    <button
                      key={s}
                      onClick={() => {
                        setSex(s);
                        setValue("sex", s as "male" | "female", {
                          shouldValidate: true,
                          shouldDirty: true,
                        });
                        setReturnedData({
                          success: false,
                          data: { result: null, stage: null },
                        });
                      }}
                      className={`flex-1 py-2 text-sm cursor-pointer w-2/4 capitalize ${
                        sex == s
                          ? "bg-primary text-white"
                          : "bg-white hover:bg-gray-200"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Age */}
              <div className=" border-b border-gray-300 pb-3 ">
                <aside className="flex justify-between items-center">
                  <label className="block text-sm font-semibold ">Age</label>
                  <div className="flex items-center  w-2/4">
                    <input
                      value={watch("age")}
                      onChange={(e) => {
                        const value = e.target.value;

                        if (isNaN(Number(value))) {
                          return;
                        }

                        setValue("age", Number(value), {
                          shouldValidate: true,
                          shouldDirty: true,
                        });
                        setReturnedData({
                          success: false,
                          data: { result: null, stage: null },
                        });
                      }}
                      className="border border-gray-300 focus-visible:outline-none px-3 h-10 w-3/4"
                      placeholder="Enter age "
                    />
                    <p className="text-sm h-10 text-black w-1/4 min-h-full bg-gray-300 flex items-center justify-center">
                      Years
                    </p>
                  </div>
                </aside>
                <p className="text-red-500 text-end">
                  {formState.errors.age && formState.errors.age.message}
                </p>
              </div>

              {/* Serum creatinine */}
              <div className=" border-b border-gray-300 pb-3">
                <aside className="flex justify-between items-center">
                  <label className="block text-sm font-semibold mb-2">
                    Serum Creatinine
                  </label>
                  <div className="flex items-center  w-2/4">
                    <input
                      value={watch("creatinine")}
                      onChange={(e) => {
                        setValue("creatinine", e.target.value, {
                          shouldValidate: true,
                          shouldDirty: true,
                        });

                        setReturnedData({
                          success: false,
                          data: { result: null, stage: null },
                        });
                      }}
                      className="border border-gray-300 focus-visible:outline-none  px-3 h-10 w-3/4"
                      placeholder="Norm: 62 - 115"
                    />
                    <p className="text-sm h-10 text-black w-1/4 min-h-full bg-gray-300 flex items-center justify-center">
                      µmol/L
                    </p>
                  </div>
                </aside>
              </div>

              {/* Result */}
              <div className=" bg-[#145548] px-4 ">
                {!returnedData?.success && (
                  <div className=" text-white font-semibold  rounded-t py-4">
                    Result:
                  </div>
                )}
                {loading && (
                  <div className="flex items-center justify-center w-full ">
                    <Loader2 className="animate-spin h-10 w-10" />
                  </div>
                )}
                {/* Result */}
                {returnedData?.success && (
                  <div className="py-3">
                    <aside className="text-white flex  gap-x-2">
                      <div className="w-[48%] py-6">
                        <aside className="flex  ">
                          <h1 className="font-bold text-4xl">
                            {returnedData?.data?.result}
                          </h1>{" "}
                          <p>ml/min/1.73 m²</p>
                        </aside>
                        <aside className="text-sm">
                          Estimated GFR by 2021 CKD-EPI Creatinine
                        </aside>
                      </div>
                      {/* middle line */}
                      <div className="w-0.5 min-h-full bg-white"></div>
                      {/* stage */}
                      <div className="w-[48%] py-6">
                        <aside className=" gap-4 font-bold text-4xl">
                          {returnedData?.data?.stage}
                        </aside>
                        <aside>CKD stage by CKD-EPI Creatinine</aside>
                      </div>
                    </aside>
                    <footer className="flex gap-x-2 justify-end">
                      <button className="bg-primary text-white font-medium text-lg rounded-lg  p-2">
                        Copy Result
                      </button>
                      <button className="bg-primary text-white font-medium text-lg rounded-lg  p-2">
                        Next Step{" "}
                      </button>
                    </footer>
                  </div>
                )}
              </div>
            </div>

            {/* formula,creator and literature */}
            {/* Formula and litereature */}
            <FormulaLiterature />
          </div>

          {/* second section */}
          <div className=" w-full h-fit bg-gray-200 text-sm p-2  lg:my-0 my-4">
            <h1 className="font-bold text-center mt-4">About the Creator</h1>

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
          </div>
        </div>
      </div>
    </div>
  );
}

// "use client";
// import { useState } from "react";

// const accordionLike = [
//   {
//     heading: "When to Use",
//     description: "",
//     steps: [
//       "Patients with chronic kidney disease (not acute), to measure kidney function.",
//       "CKD-EPI Creatinine is more commonly available.",
//       "2021 CKD-EPI creatinine-cystatin is recommended as a confirmatory test in patients at extremes of body type (e.g. obese patients, high or low muscle mass).",
//     ],
//   },
//   {
//     heading: "Pearls/Pitfalls",
//     description: "",
//     steps: [
//       "In 2021 new equations were created to remove the race components from the prior CKD-Epi equations and should be the new standard equations; we continue to offer the prior equations for comparison/trending.",
//       "Creatinine-based estimates of kidney function by glomerular filtration rate (GFR) are less accurate in certain populations including patients with diabetes (before progression to overt nephropathy with diminished GFR), pregnant women, those with unusual body mass (e.g. obese, severely malnourished, amputees, paraplegics, etc).",
//       "Not for use in patients on dialysis.",
//     ],
//   },
// ];

// const page = () => {
//   const [accToShow, setAccToShow] = useState<
//     "when-to-use" | "pearls" | "when-use"
//   >("when-to-use");
//   return (
//     <div>
//       <section>
//         {/* Header */}
//         <header>
//           <h1>CKD-EPI Equations for Glomerular Filtration Rate (GFR)</h1>
//           <p>
//             Estimates GFR in CKD patients using serum creatinine, cystatin C, or
//             both.
//           </p>
//         </header>
//         {/* Important */}
//         <article>
//           <h1>IMPORTANT</h1>
//           <p>
//             The 2021 CKD-EPI equation is now the recommended standard. This
//             version does not include race, as do the 2009 and 2012 CKD-EPI
//             creatinine and creatinine-cystatin C equations. See here for more on
//             our approach to addressing race and bias on MDCalc. With the 2021
//             equation, for the same creatinine value, the 2021 equation will
//             estimate a lower GFR for Black patients and a higher GFR for
//             non-Black patients.
//           </p>
//         </article>
//         <article>
//           <h1>INSTRUCTIONS</h1>
//           <p>
//             For use in patients with stable kidney function. While the combined
//             creatinine and cystatin C equation can add accuracy, cystatin c is
//             not available in all laboratories and the creatinine-based equation
//             is adequate for many clinical purposes. 2021 CKD-EPI creatinine is
//             currently recommended by the ASN and NKF for GFR reporting in the
//             United States.
//           </p>
//         </article>

//         <main>
//           <header className="flex ">
//             <div onClick={() => setAccToShow("when-to-use")}>When to Use</div>
//             <div onClick={() => setAccToShow("pearls")}>Pearls/Pitfalls</div>
//             <div onClick={() => setAccToShow("when-use")}>Why Use</div>
//           </header>

//           <div>
//             {/* when to use */}
//             {accToShow == "when-to-use" && (
//               <article className="pl-8 list-item">
//                 <p className="flex items-center gap-x-4">
//                   <div className="h-2 w-2 bg-black rounded-full" />
//                   Patients with chronic kidney disease (not acute), to measure
//                   kidney function. CKD-EPI Creatinine is more commonly
//                   available.
//                 </p>
//                 <p className="flex items-center gap-x-4">
//                   <div className="h-2 w-2 bg-black rounded-full" />
//                   2021 CKD-EPI creatinine-cystatin is recommended as a
//                   confirmatory test in patients at extremes of body type (e.g.
//                   obese patients, high or low muscle mass).
//                 </p>
//               </article>
//             )}
//             {/* pearls */}
//             {accToShow == "pearls" && (
//               <article className="pl-8 list-item">
//                 <p className="flex items-center gap-x-4">
//                   <div className="h-2 w-2 bg-black rounded-full" />
//                   In 2021 new equations were created to remove the race
//                   components from the prior CKD-Epi equations and should be the
//                   new standard equations; we continue to offer the prior
//                   equations for comparison/trending.
//                 </p>
//                 <p className="flex items-center gap-x-4">
//                   <div className="h-2 w-2 bg-black rounded-full" />
//                   Creatinine-based estimates of kidney function by glomerular
//                   filtration rate (GFR) are less accurate in certain populations
//                   including patients with diabetes (before progression to overt
//                   nephropathy with diminished GFR), pregnant women, those with
//                   unusual body mass (e.g. obese, severely malnourished,
//                   amputees, paraplegics, etc)
//                 </p>
//                 <p className="flex items-center gap-x-4">
//                   <div className="h-2 w-2 bg-black rounded-full" /> Not for use
//                   in patients on dialysis.
//                 </p>
//               </article>
//             )}
//             {/* when use */}
//             {accToShow == "pearls" && (
//               <article className="pl-8 list-item">
//                 The CKD-EPI equation performs superiorly to the MDRD Equation in
//                 patients with normal or mildly reduced estimated GFR (eGFR), and
//                 just as well in patients with an eGFR of 60 mL/min/m2. It is
//                 used most widely by nephrologists and understood to be the most
//                 accurate means of non-invasively assessing GFR in the United
//                 States.
//               </article>
//             )}
//           </div>

//           <div></div>
//         </main>
//       </section>

//       {/* second section */}
//       <section></section>
//     </div>
//   );
// };

// export default page;
