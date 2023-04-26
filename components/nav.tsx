import Link from "next/link";
import React, { useEffect, useState } from "react";
import naruto from "@/public/assets/download.jpeg";
import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

export const NavBar = () => {
  const [activeURL, setActiveURL] = useState<string[]>([]);
  const signedUser = useSelector((state:RootState)=>(state.auth.signed_in_user))

  useEffect(() => {
    const path = window.location.pathname.split("/");
    setActiveURL(path);
  }, []);
  return (
    <div className="h-screen bg-white">
      <div className="bg-gray-200 w-full content-center justify-center items-center flex flex-col flex-wrap h-1/3 pb-4">
        <h4 className="text-center font-bold text-lg">{signedUser?.name}</h4>
        <p className="text-center text-xs">{signedUser?.email}</p>
        <p className="text-center text-xs font-bold">{signedUser?.role}</p>
      </div>
      <div className="flex flex-col h-auto">
        <div className="relative rounded-full flex flex-wrap justify-center items-center bg-white top-[-50px] self-center">
          <div className="relative rounded-full m-2 overflow-hidden h-24 w-24 ">
            <Image src={`${signedUser?.photo_path ?signedUser.photo_path : naruto.src}`} alt="" fill priority/>
          </div>
        </div>
      </div>
      <div className=" relative flex flex-col h-auto top-[-50px]">
        <Link
          href="/"
          className={`py-1 px-4 my-2 mr-3 rounded-r-2xl font-bold hover:bg-green-500 hover:text-white ${
            activeURL.includes(" ") ? " bg-green-500 text-white" : ""
          } `}
        >
          Feeds
        </Link>
        <Link
          href="/group"
          className={`py-1 px-4 my-2 mr-3 rounded-r-2xl font-bold hover:bg-green-500 hover:text-white ${
            activeURL.includes('news') ? " bg-green-500 text-white" : ""
          } `}
        >
          Group
        </Link>
      </div>
    </div>
  );
};
