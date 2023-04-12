import React from "react";
import { Header } from "@/components/header";
import { NavBar } from "@/components/nav";
type Porps = {
  children: React.ReactNode;
};

export default function Layout({ children }: Porps) {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-slate-100">
      {children}
    </div>
  );
}
