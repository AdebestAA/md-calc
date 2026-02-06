"use client";
import { useSigninStoreModal } from "@/store/useSigninStoreModal";
import Link from "next/link";

export default function Home() {
  const { openSigninModal } = useSigninStoreModal();
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <Link
        className=" bg-primary px-2 rounded-xl text-white py-1 my-4"
        href={"/signup"}
      >
        Signup
      </Link>
      <button
        onClick={openSigninModal}
        className="bg-primary px-2 rounded-xl text-white py-1 my-4"
      >
        signin
      </button>
    </div>
  );
}
