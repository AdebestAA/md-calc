import { Calculator } from "lucide-react";
import Link from "next/link";
import React from "react";

const linkItems = [
  {
    id: 1,
    title: "Getting Started",
    icon: Calculator,
  },
  {
    id: 2,
    title: "Using MDCalc",
    icon: Calculator,
  },
  {
    id: 3,
    title: "About Clinical Decision Support Tools",
    icon: Calculator,
  },
  {
    id: 4,
    title: "Participating in MDCalc",
    icon: Calculator,
  },
  {
    id: 5,
    title: "Continuing Medical Education",
    icon: Calculator,
  },
  {
    id: 6,
    title: "EHR Integration",
    icon: Calculator,
  },
];
const page = () => {
  return (
    <div>
      {/* Hero */}
      <section className="bg-dark-primary py-32">
        <h1 className="text-4xl text-white font-bold mx-auto lg:w-[50%] md:w-[70%] w-[90%] text-center">
          Your go-to resource for answers to common questions about MDCalc.
        </h1>
        <p className=" text-white text-sm mx-auto lg:w-[60%] md:w-[70%] w-[90%] text-center ">
          Questions about MDCalc, including: About Us, Users, Continuing Medical
          Education (CME), Electronic Health Records (EHR), and more.
        </p>
      </section>

      {/* Second Section */}

      <div className="flex flex-wrap justify-evenly gap-6 my-6 lg:w-4/5 mx-auto">
        {linkItems.map((item) => {
          return (
            <Link
              href={"/"}
              key={item.id}
              className="flex flex-col items-center  add-shadow  w-[30%] h-50 px-2"
            >
              <aside className="w-20 h-20 bg-primary/20  flex items-center justify-center rounded-full mt-6">
                <Calculator size={30} />
              </aside>
              <h2 className="text-center font-semibold font-lg">
                {item.title}
              </h2>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default page;
