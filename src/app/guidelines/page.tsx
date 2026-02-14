"use client";
import { contentAcep } from "@/uitls/guidelines-dummy";
import {
  CheckCheck,
  CheckSquare,
  ClipboardList,
  LayoutGrid,
  ListChecks,
} from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const headers = [
  {
    id: 1,
    icon: ListChecks,
    title: "ACEP",
  },
  {
    id: 2,
    icon: ClipboardList,
    title: "ACG",
  },
  {
    id: 3,
    icon: CheckSquare,
    title: "AGA",
  },
  {
    id: 4,
    icon: CheckCheck,
    title: "OTHER",
  },
  {
    id: 5,
    icon: LayoutGrid,
    title: "ALL",
  },
];

const page = () => {
  const [contentToDisplay, setContentToDisplay] = useState<string>("acep");
  const [data, setData] = useState<any[]>(contentAcep);

  useEffect(() => {
    if (contentToDisplay === "acep") {
      setData(contentAcep);
    }
  }, [contentToDisplay]);
  return (
    <div className="md:px-0 px-2">
      {/* header */}
      <header className="mt-8 mb-6 bg-gray-50 px-6 py-1 max-w-lg mx-auto border-b-2 border-gray-300 overflow-y-auto">
        <h1 className="text-center font-semibold text-2xl">
          {" "}
          Guideline Summaries
        </h1>
        <p className="text-xs my-2">
          Welcome to Guideline Summaries! Our point of care summaries are
          extracted directly from medical society practice guidelines to help
          you stay current with evidence based recommendations. Have feedback
          about guideline summaries?{" "}
          <Link className="text-blue-500" href={"/contack"}>
            Contact us
          </Link>
        </p>
      </header>

      {/* content */}
      <div className="  max-w-lg mx-auto  border-gray-300  mt-4">
        <header className="flex justify-between bg-gray-50  py-1 overflow-y-auto">
          {headers.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                onClick={() =>
                  setContentToDisplay(item.title.toLocaleLowerCase())
                }
                className={`${item.title.toLocaleLowerCase() == contentToDisplay ? "bg-gray-200" : ""} flex flex-col items-center text-gray-700 cursor-pointer hover:text-black hover:bg-gray-200 w-25  py-2 md:mx-0 mx-4`}
              >
                <Icon size={20} strokeWidth={2} />
                <span className="text-sm mt-1 font-medium">{item.title}</span>
              </div>
            );
          })}
        </header>

        <div className="max-w-lg mx-auto text-sm my-8  ">
          {data.map((item, index) => {
            return (
              <div
                key={index}
                className="flex justify-between  border-2 border-gray-600 rounded-sm mt-4 py-2 px-4"
              >
                <aside>
                  <h1 className="font-semibold text-gray-500">{item.title}</h1>
                  {/* <p className="text-gray-400">{item.desc}</p> */}
                </aside>
              </div>
            );
          })}
        </div>
      </div>

      {/* list  */}
    </div>
  );
};

export default page;
