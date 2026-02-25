import useBMICalculation from "@/hooks/useBMICalculation";
import { ArrowLeftRight, Loader2 } from "lucide-react";
import React, { useEffect, useState } from "react";

type inputFields = { weight: string | number; height: string | number };
const FormBMI = () => {
  const [units, setUnits] = useState<{
    weight: "lbs" | "kg";
    height: "cm" | "in";
  }>({
    weight: "kg",
    height: "cm",
  });

  const [formValues, setFormValues] = useState<inputFields>({
    weight: "",
    height: "",
  });
  const [formErrors, setFormErrors] = useState<{
    heightError: string;
    weightError: string;
  }>({
    heightError: "",
    weightError: "",
  });
  const [valid, setValid] = useState<{
    heightValid: boolean;
    weightValid: boolean;
  }>({ heightValid: false, weightValid: false });
  const { isPending, mutate, data } = useBMICalculation();
  console.log(Number(data?.data?.bmi));

  function handleHeightValidation(value: string | number) {
    const convertHeight = Number(formValues.height);

    if (formValues.height && !convertHeight) {
      setFormErrors({ ...formErrors, heightError: "enter a valid number" });
      setValid({ ...valid, heightValid: false });
      return;
    }

    // Check for height
    if (convertHeight) {
      // Check if value entered is a number
      if (isNaN(convertHeight)) {
        setFormErrors({ ...formErrors, heightError: "enter a valid number" });
        setValid({ ...valid, heightValid: false });
        return;
      }

      // check if value is between range
      // check for cm
      if (
        units.height == "cm" &&
        (convertHeight < 152 || convertHeight > 213)
      ) {
        if (convertHeight < 152) {
          setFormErrors({
            ...formErrors,
            heightError: "Too low; please change to proceed.",
          });
        } else {
          setFormErrors({
            ...formErrors,
            heightError: "Too low; please change to proceed.",
          });
        }
        // return;
      }

      // check for in
      if (units.height == "in" && (convertHeight < 60 || convertHeight > 84)) {
        if (convertHeight < 60) {
          setFormErrors({
            ...formErrors,
            heightError: "too low; please change to proceed.",
          });
        } else {
          setFormErrors({
            ...formErrors,
            heightError: "Too high; please change to proceed.",
          });
        }
        // return;
      }
      //   setFormErrors({ ...formErrors, heightError: "" });
      setValid({ ...valid, heightValid: true });
    }
  }

  function handleWeightValidation(value: string | number) {
    const convertWeight = Number(formValues.weight);

    if (formValues.weight && !convertWeight) {
      setFormErrors({ ...formErrors, weightError: "enter a valid number" });
      setValid({ ...valid, weightValid: false });
    }

    // Check for width
    if (convertWeight) {
      // Check if value entered is a number
      if (isNaN(convertWeight)) {
        setFormErrors({ ...formErrors, weightError: "enter a valid number" });
        setValid({ ...valid, weightValid: false });
        return;
      }

      // check if value is between range
      // check for cm
      if (units.weight == "kg" && (convertWeight < 1 || convertWeight > 150)) {
        if (convertWeight < 1) {
          setFormErrors({
            ...formErrors,
            weightError: "too low; please change to proceed.",
          });
        } else {
          setFormErrors({
            ...formErrors,
            weightError: "too high; please change to proceed.",
          });
        }
        // return;
      }

      // check for in
      if (units.weight == "lbs" && (convertWeight < 2 || convertWeight > 330)) {
        if (convertWeight < 2) {
          setFormErrors({
            ...formErrors,
            weightError: "Too low; please change to proceed.",
          });
        } else {
          setFormErrors({
            ...formErrors,
            weightError: "Too high: please change to proceed",
          });
        }
        // return;
      }
      //   setFormErrors({ ...formErrors, weightError: "" });
      setValid({ ...valid, weightValid: true });
    }
  }

  //   Height Effect
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      handleHeightValidation(formValues.height);
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, [formValues.height]);

  //   Weight Effect
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      handleWeightValidation(formValues.weight);
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, [formValues.weight]);

  useEffect(() => {
    if (!valid.heightValid || !valid.weightValid) {
      return;
    }

    mutate({
      height: formValues.height as number,
      weight: formValues.weight as number,
      weightUnit: units.weight,
      heightUnit: units.height,
    });
  }, [
    valid.heightValid,
    valid.weightValid,
    formValues.height,
    formValues.weight,
  ]);
  return (
    <>
      <form action="my-8">
        {/* Weight */}
        <div className="flex items-center justify-between py-3 border-t-2 border-border ">
          <h1>Weight</h1>
          <aside className="md:w-2/4 w-[70%]  ">
            <div className="flex items-center  w-full ">
              <input
                value={formValues.weight}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setFormValues({ ...formValues, weight: e.target.value })
                }
                className="border border-gray-300 focus-visible:outline-none shadow-inner px-3 h-10 w-3/4 inner-shadow md:placeholder:font-semibold placeholder:font-medium"
                placeholder={
                  units.weight == "kg" ? "Norm: 1 - 150kg" : "Norm: 2 - 330 lb"
                }
              />
              <p
                onClick={() => {
                  setUnits({
                    ...units,
                    weight: units.weight == "kg" ? "lbs" : "kg",
                  });

                  setFormValues({ ...formValues, weight: "" });
                  setFormErrors({ ...formErrors, weightError: "" });
                  setValid({ ...valid, weightValid: false });
                }}
                className="text-sm h-10 cursor-pointer text-black w-1/4 min-h-full bg-border flex items-center justify-center gap-x-2 "
              >
                <span>{units.weight}</span>
                <span>
                  <ArrowLeftRight className="text-primary" size={17} />
                </span>
              </p>
            </div>
            {formValues.weight == ""
              ? ""
              : formErrors.weightError && (
                  <p className="text-sm text-red-500">
                    {formErrors.weightError}
                  </p>
                )}
          </aside>
        </div>

        {/* height*/}
        <div className="flex items-center justify-between py-3 border-t-2 border-border ">
          <h1>Height</h1>
          <div className=" w-[70%] md:w-2/4">
            <aside className="flex items-center  w-full">
              <input
                value={formValues.height}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setFormValues({ ...formValues, height: e.target.value });
                }}
                className="border border-gray-300 focus-visible:outline-none shadow-inner px-3 h-10 w-3/4 inner-shadow md:placeholder:font-semibold placeholder:font-medium "
                placeholder={
                  units.height == "cm" ? "Norm: 152 - 213cm" : "Norm: 60 - 84in"
                }
              />
              <p
                onClick={() => {
                  setUnits({
                    ...units,
                    height: units.height == "in" ? "cm" : "in",
                  });
                  setFormValues({ ...formValues, height: "" });
                  setFormErrors({ ...formErrors, heightError: "" });
                  setValid({ ...valid, heightValid: false });
                }}
                className="text-sm h-10 cursor-pointer text-black w-1/4 min-h-full bg-border flex items-center justify-center gap-x-2 "
              >
                <span>{units.height}</span>
                <span>
                  <ArrowLeftRight className="text-primary" size={17} />
                </span>
              </p>
            </aside>
            {formValues.height == ""
              ? ""
              : formErrors.heightError && (
                  <p className="text-sm text-red-500">
                    {formErrors.heightError}
                  </p>
                )}
          </div>
        </div>

        <div className="bg-primary-two px-4 py-2  my-8">
          {!isPending && !data?.data?.bmi && (
            <aside className="text-white py-6">
              <h1 className="font-bold text-3xl">Result:</h1>
              <p className=" text-sm">Please fill out required fields.</p>
            </aside>
          )}

          {isPending && (
            <div className="flex items-center justify-center w-full py-6">
              <Loader2 className="animate-spin h-10 w-10" />
            </div>
          )}
          {/* For result */}
          {!isPending && data?.data?.bmi && (
            <aside className="text-white flex justify-between">
              {/* right */}
              <section className="w-[48%]">
                <h1>
                  <span className="font-bold text-4xl">{data?.data?.bmi}</span>
                  <span className="font-medium">kg/m²</span>
                </h1>
                <p className="font-medium text-sm my-2">
                  Body Mass Index ({data.category})
                </p>
              </section>
              {/* left */}
              <div className="w-0.5 h-20 bg-white " />
              <section className="w-[48%]  ">
                <h1>
                  <span className="font-bold text-4xl">{data?.data?.bsa}</span>
                  <span className="font-medium">m²</span>
                </h1>
                <p className="font-medium">Body Surface Area</p>
                <div className="flex justify-end gap-x-2 pt-6 pb-2">
                  <button className="bg-primary text-white py-2 px-4 rounded-md cursor-pointer font-semibold">
                    Copy Results
                  </button>
                  <button className="bg-primary text-white py-2 px-4 rounded-md cursor-pointer font-semibold">
                    Next Steps
                  </button>
                </div>
              </section>
            </aside>
          )}
        </div>
      </form>
    </>
  );
};

export default FormBMI;
