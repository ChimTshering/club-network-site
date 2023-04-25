import Link from "next/link";
import React from "react";

export const NavBar = () => {
  return (
    <div className="h-screen bg-white">
      <div className="bg-slate-200 w-full content-center justify-center flex flex-col flex-wrap h-1/3">
        <h4 className="text-center font-bold text-lg">USER NAMAE</h4>
        <p className="text-center text-xs">EMAIL</p>
        <p className="text-center text-xs font-bold">USER ROLE</p>
      </div>
      <div className="flex flex-col h-auto">
        <Link
          href="/"
          className="py-1 px-4 my-2 mr-3 rounded-r-2xl font-bold hover:bg-green-500 hover:text-white active:bg-green-500 active:text-white "
        >
          Feeds
        </Link>
        <Link
          href="/group"
          className="py-1 px-3 my-2 mr-3 rounded-r-2xl font-bold hover:bg-green-500 hover:text-white active:bg-green-500 active:text-white "
        >
          Group
        </Link>
      </div>
    </div>
  );
};
