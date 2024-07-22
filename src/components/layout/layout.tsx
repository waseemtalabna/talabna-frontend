import React from "react";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";

import Image from "next/image";

export function Layout({children}: {children: React.ReactNode}) {
  return (
    <>

    <Header/>
    <main className="bg-white px-2 lg:px-0">{children}</main>
    <Footer/>

    </>
  );
}
