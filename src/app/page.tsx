"use client";
import Content from "@/components/content";
import Header from "@/components/Header";
import { useSigninStoreModal } from "@/store/useSigninStoreModal";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <Header />
      <Content />
    </div>
  );
}
