"use client";
import { useMenuModalStore } from "@/store/useMenuModalStore";
import { useSigninStoreModal } from "@/store/useSigninStoreModal";
import { Bell, MenuIcon, Plus, Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const imgClass = "h-10 w-7 bg-[red] ";
const Header = () => {
  const { openSigninModal } = useSigninStoreModal();
  const [scrolled, setScrolled] = useState<boolean>(false);
  const router = useRouter();
  const { openModal } = useMenuModalStore();

  useEffect(() => {
    const handleScrollEffect = () => {
      console.log(window.scrollY);
      if (window.scrollY) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScrollEffect);

    return () => window.removeEventListener("scroll", handleScrollEffect);
  }, []);

  return (
    <nav className="flex justify-between items-start bg-primary px-4 py-2 sticky top-0 text-sm">
      <div className="w-[10%] flex items-center gap-x-4">
        <button className="lg:inline hidden" onClick={openModal}>
          <MenuIcon stroke="white" size={30} />
        </button>
        {/* for  desktop */}
        {scrolled && (
          <div
            className={` flex-col items-center transition-all duration-500 hidden lg:flex`}
          >
            <div className="flex items-center ">
              <span className="text-md font-extrabold text-white">MD</span>
              <p className="flex items-center">
                <img src={"/assets/plus.svg"} className="block h-4 pl-1 pt-1" />
              </p>
            </div>

            <span className="text-md font-extrabold text-white leading-none ">
              CALC
            </span>
          </div>
        )}

        <div
          className={` flex-col items-center transition-all duration-500 flex lg:hidden`}
        >
          <div className="flex items-center ">
            <span className="text-md font-extrabold text-white">MD</span>
            <p className="flex items-center">
              <img src={"/assets/plus.svg"} className="block h-4 pl-1 pt-1" />
            </p>
          </div>

          <span className="text-md font-extrabold text-white leading-none ">
            CALC
          </span>
        </div>
      </div>

      {/* logo and  search*/}
      <div className="w-[50%]">
        {/* logo */}
        <div
          className={` flex-col items-center transition-all duration-500   ${scrolled ? "max-h-0 opacity-0 -translate-y-4" : "max-h-40 opacity-100 translate-y-0"} lg:flex   hidden`}
        >
          <div className="flex items-center ">
            <span className="text-6xl font-extrabold text-white">MD</span>
            <p className="flex items-center">
              <img src={"/assets/plus.svg"} className="block h-14 pt-4" />
            </p>
          </div>

          <span className="text-6xl font-extrabold text-white leading-none mb-4">
            CALC
          </span>
        </div>

        {/* search */}
        <div className={`flex items-center `}>
          <button className="bg-yellow-one w-[3%] h-10 flex items-center justify-center">
            <Search stroke="white" />
          </button>
          <div className="w-[97%]">
            <input
              type="text"
              className="bg-white w-full h-10 focus:border-none focus:outline-none px-4 "
              placeholder={`Search  "QT interval " or "QT" or "EKG"`}
            />
          </div>
        </div>
      </div>

      {/* auth and bell */}
      <button className="lg:hidden block" onClick={openModal}>
        <MenuIcon stroke="white" size={30} />
      </button>
      <div className="hidden lg:flex items-center justify-between gap-x-4  text-xs  min-w-[10%] ">
        <button
          onClick={openSigninModal}
          className="text-white font-medium text-[0.7rem]"
        >
          LOGIN
        </button>
        <button
          onClick={() => router.push("/signup")}
          className="bg-yellow-one text-white px-1 py-3 rounded-sm font-medium text-[0.7rem]"
        >
          SIGNUP
        </button>
        <button className="">
          <Bell fill="white" stroke="white" />
        </button>
      </div>
    </nav>
  );
};

export default Header;

const Logo = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center">
        <span className="text-6xl font-extrabold text-white">MD</span>
        <p className="flex items-center">
          <img src={"/assets/plus.svg"} className="block h-14 pt-4" />
        </p>
      </div>

      <span className="text-6xl font-extrabold text-white leading-none">
        CALC
      </span>
    </div>
  );
};
