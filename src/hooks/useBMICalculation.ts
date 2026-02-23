import { handleError } from "@/lib/error-handler";
import { calculateBMI } from "@/services/calc/bmi-calculation";
import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
import toast from "react-hot-toast";

const useBMICalculation = () => {
  //   const [result, setResult] = useState<unknown>();
  //   const { mutate, isPending, data } = useMutation({
  //     mutationFn: calculateBMI,
  //     onSuccess: (data) => {
  //       console.log(data);
  //       if (data.status !== "ok") {
  //         toast("Something went wrong");
  //       }
  //     },
  //     onError: handleError,
  //   });

  //   console.log(data, "from query itself");

  return useMutation({
    mutationFn: calculateBMI,
    onSuccess: (data) => {
      console.log(data);
      if (data.status !== "ok") {
        toast("Something went wrong");
      }
    },
    onError: handleError,
  });
};
export default useBMICalculation;
