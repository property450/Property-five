"use client";

import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";

const PropertyMap = dynamic(() => import("@/components/PropertyMap"), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <PropertyMap />
    </div>
  );
}
