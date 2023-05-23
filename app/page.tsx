"use client";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const MyComponent = dynamic(() => import("./test"), {
  ssr: false,
});
export default function Home() {
  const [flag, setFlag] = useState<Boolean>(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setFlag(true);
    }
  }, []);
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      <p>this is react component</p>
      {flag && <MyComponent></MyComponent>}
    </main>
  );
}
