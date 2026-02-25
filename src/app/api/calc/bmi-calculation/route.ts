import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  const { weight, height, weightUnit, heightUnit } = await req.json();

  try {
    if (heightUnit == "in" && weightUnit == "lbs") {
      return NextResponse.json({
        data: calculateUSBMIBSA(height, weight),
        category: getBMICategory(Number(calculateUSBMIBSA(height, weight).bmi)),
        status: "ok",
      });
    }

    let heightVal = height;
    let weightVal = weight;
    // convert back to cm
    if (heightUnit == "in") {
      heightVal = Number(height) * 2.54;
    }
    // convert back to kg
    if (weightUnit == "lbs") {
      weightVal = Number(weight) / 2.20462;
    }

    return NextResponse.json({
      data: calculateMetricBMIBSA(heightVal, weightVal),
      category: getBMICategory(
        Number(calculateMetricBMIBSA(heightVal, weightVal).bmi),
      ),
      status: "ok",
    });
  } catch (error) {
    return NextResponse.json({ data: null, status: "error" });
  }
};

// normal js

function calculateMetricBMIBSA(
  heightCm: string | number,
  weightKg: string | string,
) {
  console.log(heightCm, weightKg);

  const h = parseFloat(heightCm.toString());
  const w = parseFloat(weightKg.toString());

  if (!h || !w) {
    return { bmi: "", bsa: "" };
  }

  const heightM = h / 100;

  const bmi = w / (heightM * heightM);
  const bsa = Math.sqrt((w * h) / 3600);

  return {
    bmi: bmi.toFixed(2),
    bsa: bsa.toFixed(2),
  };
}

// US appraoch

function calculateUSBMIBSA(heightIn: string, weightLb: string) {
  const h = parseFloat(heightIn);
  const w = parseFloat(weightLb);

  if (!h || !w) {
    return { bmi: "", bsa: "" };
  }

  // BMI (US formula)
  const bmi = 703 * (w / (h * h));

  // convert to metric for BSA
  const heightCm = h * 2.54;
  const weightKg = w * 0.453592;

  const bsa = Math.sqrt((weightKg * heightCm) / 3600);

  return {
    bmi: bmi.toFixed(2),
    bsa: bsa.toFixed(2),
  };
}

function getBMICategory(bmi: number) {
  if (bmi < 18.5) {
    return "Underweight";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    return "Normal weight";
  } else if (bmi >= 25.0 && bmi <= 29.9) {
    return "Overweight";
  } else if (bmi >= 30.0 && bmi <= 34.9) {
    return "Obese - Class 1";
  } else if (bmi >= 35.0 && bmi <= 39.9) {
    return "Obese - Class 2";
  } else {
    return "Obese - Class 3";
  }
}
