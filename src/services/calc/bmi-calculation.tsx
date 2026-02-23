import { resultResponse } from "@/lib/type";
import axios from "axios";

export const calculateBMI = async (values: {
  weight: number;
  height: number;
  weightUnit: string;
  heightUnit: string;
}): Promise<resultResponse<{ bmi: string; bsa: string } | null>> => {
  const res = await axios.post("/api/calc/bmi-calculation", values);

  return res.data;
};
