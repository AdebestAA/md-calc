"use client";
import { useMenuModalStore } from "@/store/useMenuModalStore";
import { useSigninStoreModal } from "@/store/useSigninStoreModal";
import { ArrowDown, ChevronDown } from "lucide-react";
import Link from "next/link";
import { title } from "process";
import { useState } from "react";

const headerMenu = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "Get MDCalc in Your EHR",
    link: "/",
  },
  {
    id: 3,
    title: "Calculators",
    innerLinks: [
      {
        name: "Popular",
        inLink: "#popular",
      },
      {
        name: "Newest",
        inLink: "#newest",
      },
      {
        name: "Favorites",
        inLink: "#favorites",
      },
      {
        name: "Specialty",
        inLink: "#specialty",
      },
      {
        name: "Guidelines",
        inLink: "#guidelines",
      },
      {
        name: "All",
        inLink: "#all",
      },
    ],
  },
  {
    id: 4,
    title: "Guidelines",
    link: "/guidelines",
  },
  {
    id: 5,
    title: "CME Packages",
    link: "/#me",
  },
  {
    id: 6,
    title: "FAQ",
    link: "/faq",
  },
];

const footerMenu = [
  {
    id: 1,
    title: "Contact us",
    link: "/contact",
  },
  {
    id: 2,
    title: "Login",
    link: "/",
  },
  {
    id: 3,
    title: "Sign up",
    link: "/signup",
  },
];

const Menubar = () => {
  const [accordion, setAccordion] = useState<string>("");
  const { isOpen, closeModal } = useMenuModalStore();
  const { openSigninModal } = useSigninStoreModal();
  return (
    <>
      {isOpen && (
        <div className="h-screen w-screen  z-100 fixed top-0 left-0 text-xs flex flex-col lg:items-start items-end">
          <div
            onClick={closeModal}
            className="fixed w-screen h-screen bg-black/50 z-30"
          />
          <div className="h-[9vh] w-full " />
          <section className="bg-gray-50 min-h-[91Vh] w-50 flex flex-col justify-between z-50  ">
            <header className="flex flex-col mx-4">
              {headerMenu.map((item) => {
                if (item?.innerLinks) {
                  return (
                    <div key={item.id}>
                      <button
                        className="border-gray-600 py-2 border-b w-full text-start flex items-center"
                        onClick={() =>
                          setAccordion((prev) => {
                            if (prev == item.title) {
                              return "";
                            } else return item.title;
                          })
                        }
                      >
                        {item.title}{" "}
                        <span>
                          <ChevronDown size={15} />
                        </span>
                      </button>
                      {accordion == item.title && (
                        <aside className="flex flex-col gap-y-2 mt-2 ">
                          {item.innerLinks.map((innerItem, innerItemIndex) => {
                            return (
                              <Link
                                onClick={closeModal}
                                className="border-b border-gray-600 py-2"
                                key={innerItemIndex}
                                href={"/"}
                              >
                                {innerItem.name}
                              </Link>
                            );
                          })}
                        </aside>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    onClick={closeModal}
                    className="py-2 border-b border-gray-600"
                    key={item.id}
                    href={item.link}
                  >
                    {item.title}
                  </Link>
                );
              })}
            </header>

            <footer className="flex flex-col mx-4">
              {footerMenu.map((item) => {
                if (item.title == "Login") {
                  return (
                    <button
                      onClick={() => {
                        closeModal();
                        openSigninModal();
                      }}
                      className="py-2 border-b border-gray-600 text-start"
                      key={item.id}
                    >
                      {item.title}
                    </button>
                  );
                }
                return (
                  <Link
                    onClick={closeModal}
                    className="py-2 border-b border-gray-600"
                    key={item.id}
                    href={item.link}
                  >
                    {item.title}
                  </Link>
                );
              })}
              <aside className="flex  items-center justify-between">
                <Link onClick={closeModal} href={"/"} className="p-2">
                  About
                </Link>
                <Link
                  onClick={closeModal}
                  href={"/disclaimer"}
                  className="py-2 px-8"
                >
                  Legal
                </Link>
              </aside>
            </footer>
          </section>
        </div>
      )}
    </>
  );
};

export default Menubar;
