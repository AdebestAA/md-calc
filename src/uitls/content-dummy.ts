import { link } from "fs";

export const contentDummy = [
  {
    id: 1,
    title: "BMI Calculator (Body Mass Index and BSA)",
    desc: "Categorizes obesity, assists some med dosing.",
    link: "body-mass-index-bmi-body-surface-area-bsa",
  },
  {
    id: 2,
    title: "CKD-EPI Equations for Glomerular Filtration Rate (GFR)",
    desc: "Estimates GFR.",
    link: "ckd-epi-equations-glomerular-filtration-rate-gfr",
  },
  {
    id: 3,
    title: "Mean Arterial Pressure (MAP)",
    desc: "Calculates MAP.",
    link: "",
  },
  {
    id: 4,
    title: "CHA₂DS₂-VASc Score for Atrial Fibrillation Stroke Risk",
    desc: "Stroke risk in afib; better than CHADS₂.",
  },
  {
    id: 5,
    title: "Creatinine Clearance (Cockcroft-Gault Equation)",
    desc: "Estimate creatine clearance (Kidney function).",
  },
  {
    id: 6,
    title:
      "ASCVD (Atherosclerotic Cardiovascular Disease) 2013 Risk Calculator from AHA/ACC",
    desc: "Corrects Ca for hypoalbuminemia or hyperalbuminemia.", // ← note: description seems mismatched
  },
  {
    id: 7,
    title: "Wells' Criteria for Pulmonary Embolism",
    desc: "Risk of PE.",
  },
  {
    id: 8,
    title: "Corrected QT Interval (QTc)",
    desc: "Corrected QT Interval.",
  },
  {
    id: 9,
    title: "Fibrosis-4 (FIB-4) Index for Liver Fibrosis",
    desc: "Noninvasive estimate of liver fibrosis.",
  },
  {
    id: 10,
    title: "Ideal Body Weight and Adjusted Body Weight",
    desc: "Ideal and adjusted body weight.",
  },
  {
    id: 11,
    title: "MDRD GFR Equation",
    desc: "For CKD patients (not for AKI).",
  },
  {
    id: 12,
    title: "NIH Stroke Scale/Score (NIHSS)",
    desc: "Quantifies stroke severity.",
  },
  {
    id: 13,
    title: "Pregnancy Due Dates Calculator",
    desc: "From LMP, EGA, or date of conception.",
  },
  {
    id: 14,
    title: "Revised Cardiac Risk Index for Pre-Operative Risk",
    desc: "Risk of major cardiac event from surgery.",
  },
  {
    id: 15,
    title: "Child-Pugh Score for Cirrhosis Mortality",
    desc: "Prognosis in cirrhosis; guides treatment",
  },
  {
    id: 16,
    title: "STOP-BANG Score for Obstructive Sleep Apnea",
    desc: "Obstructive sleep apnea diagnosis.",
  },
  {
    id: 17,
    title: "HEART Score for Major Cardiac Events",
    desc: "6-week risk of cardiac event.",
  },
  {
    id: 18,
    title: "PHQ-9 (Patient Health Questionnaire-9)",
    desc: "Degree of depression severity.",
  },
  {
    id: 19,
    title: "Wells' Criteria for DVT",
    desc: "Risk of DVT based on clinical criteria.",
  },
  {
    id: 20,
    title: "Sodium Correction for Hyperglycemia",
    desc: "Calculates Na in hyperglycemia.",
  },
  {
    id: 21,
    title: "Steroid Conversion Calculator",
    desc: "Steroid dosing equivalencies.",
  },
  {
    id: 22,
    title: "PERC Rule for Pulmonary Embolism",
    desc: "Clinically rules out PE (2%).",
  },
  {
    id: 23,
    title: "Centor Score (Modified/McIsaac) for Strep Pharyngitis",
    desc: "Strep throat diagnosis and treatment.",
  },
  {
    id: 24,
    title: "HAS-BLED Score for Major Bleeding Risk",
    desc: "Bleeding risk with AFib anticoagulation.",
  },
  {
    id: 25,
    title: "Caprini Score for Venous Thromboembolism (2005)",
    desc: "Stratifies risk of VTE in surgical patients.",
  },
  {
    id: 26,
    title: "Glasgow Coma Scale (GCS)",
    desc: "Objective level of consciousness.",
  },
  {
    id: 27,
    title: "LDL Calculated",
    desc: "From Total Chol, HDL and Trigs.",
  },
  {
    id: 28,
    title: "Morphine Milligram Equivalents (MME) Calculator",
    desc: "Calculates MME.",
  },
  {
    id: 29,
    title: "SIRS, Sepsis, and Septic Shock Criteria",
    desc: "Defines severity of sepsis and septic shock.",
  },
  {
    id: 31,
    title: "Sequential Organ Failure Assessment (SOFA) Score",
    desc: "ICU mortality from lab data.",
  },
  {
    id: 32,
    title: "GAD-7 (General Anxiety Disorder-7)",
    desc: "Severity of anxiety.",
  },
  {
    id: 33,
    title: "Free Water Deficit in Hypernatremia",
    desc: "Free water deficit in hypernatremia or dehydration.",
  },
  {
    id: 34,
    title: "HOMA-IR (Homeostatic Model Assessment for Insulin Resistance)",
    desc: "Approximates insulin resistance.",
  },
  {
    id: 35,
    title: "Framingham Risk Score for Hard Coronary Heart Disease",
    desc: "Heart attack risk.",
  },
  {
    id: 36,
    title:
      "ASCVD (Atherosclerotic Cardiovascular Disease) Risk Algorithm including Known ASCVD from AHA/ACC",
    desc: "10-year heart disease or stroke risk and statin recommendations.",
  },

  {
    id: 37,
    title: "Fractional Excretion of Sodium (FENa)",
    desc: "Prerenal or intrinsic kidney failure.",
  },

  {
    id: 38,
    title: "CURB-65 Score for Pneumonia Severity",
    desc: "Mortality in CAP: inpatient vs outpatient",
  },

  {
    id: 39,
    title: "MELD Na (UNOS/OPTN)",
    desc: "Liver transplant planning + Na.",
  },
  {
    id: 40,
    title: "ARISCAT Score for Postoperative Pulmonary Complications",
    desc: "Post-op pulmonary complications.",
  },
  {
    id: 40,
    title: "PECARN Pediatric Head Injury/Trauma Algorithm",
    desc: "Clears peds head injury without imaging.",
  },
  {
    id: 41,
    title:
      "Gupta Perioperative Risk for Myocardial Infraction or Cardiac Arrest(MICA)",
    desc: "Periop cardiac risk.",
  },
  {
    id: 42,
    title: "Predicting Risk of Cardiovascular Disease EVENTs (PREVENT)",
    desc: "CVD risk.",
  },
  {
    id: 43,
    title: "Serum Anion Gap",
    desc: "Evaluates states of metabolic acidosis.",
  },
  {
    id: 44,
    title: "CIWA-Ar for Alcohol withdrawal",
    desc: "Objectifies alcohol withdrawal severity.",
  },
  {
    id: 45,
    title: "PSI/PORT Score: Pneumonia Severity Index for CAP",
    desc: "Mortality in CAP: more complex than CURB-65.",
  },
  {
    id: 46,
    title: "Serum Osmolality/Osmolarity",
    desc: "Screens for toxic alcohols and more.",
  },
  {
    id: 47,
    title: "Alvarado Score for Acute Appendictis",
    desc: "Appendicitis diagnosis.",
  },
  {
    id: 48,
    title: "Duke Activity Status Index (DASI)",
    desc: "Functional capacity.",
  },
];
