import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  const { age, sex, creatinine } = await req.json();

  console.log(age, sex.toLowerCase(), Number(creatinine));

  try {
    const resultEGFR: number = calculateEGFR(
      age,
      sex.toLowerCase(),
      Number(creatinine),
    ) as number;

    console.log(resultEGFR);

    return NextResponse.json({
      success: true,
      data: { result: resultEGFR, stage: ckdStageFromEgfr(resultEGFR) },
    });
  } catch (error) {
    return NextResponse.json({ success: false });
  }
};

function calculateEGFR(age: number, sex: string, creatinine: number) {
  // Convert µmol/L to mg/dL
  const scr_mgdl = creatinine / 88.4;

  if (sex === "female") {
    const k = 0.7;
    const factor = 142;
    const sexMultiplier = 1.012;

    if (scr_mgdl <= 0.7) {
      return Math.round(
        factor *
          Math.pow(scr_mgdl / k, -0.241) *
          Math.pow(0.9938, age) *
          sexMultiplier,
      );
    } else {
      return Math.round(
        factor *
          Math.pow(scr_mgdl / k, -1.2) *
          Math.pow(0.9938, age) *
          sexMultiplier,
      );
    }
  }

  if (sex === "male") {
    const k = 0.9;
    const factor = 142;

    if (scr_mgdl <= 0.9) {
      return Math.round(
        factor * Math.pow(scr_mgdl / k, -0.302) * Math.pow(0.9938, age),
      );
    } else {
      return Math.round(
        factor * Math.pow(scr_mgdl / k, -1.2) * Math.pow(0.9938, age),
      );
    }
  }
}

function ckdStageFromEgfr(egfr: number) {
  if (egfr >= 90) return "Stage 1";
  if (egfr >= 60) return "Stage 2";
  if (egfr >= 45) return "Stage 3a";
  if (egfr >= 30) return "Stage 3b";
  if (egfr >= 15) return "Stage 4";
  return "Stage 5";
}
