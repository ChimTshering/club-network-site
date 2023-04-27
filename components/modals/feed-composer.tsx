import { RootState } from "@/redux/store";
import Image from "next/image";
import React from "react";
import { AiFillCamera } from "react-icons/ai";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { HiDocumentText } from "react-icons/hi";
import { useSelector } from "react-redux";
import naruto from "../../public/assets/download.jpeg";

export const FeedComposer = () => {
  const user = useSelector((state:RootState)=>(state.auth.signed_in_user))
  return (
    <div className="w-full">
      <div className="bg-white rounded-lg p-3 m-5 mb-2 flex">
        <div className="w-16 h-16 m-2 rounded-full overflow-hidden relative">
          <Image
            src={user?.photo_path ? user.photo_path : naruto.src}
            alt="profile"
            fill
            priority
          />
        </div>
        <div className="w-full px-5 flex flex-col justify-center">
          <input
            type="text"
            placeholder="Write something....."
            className="border-2 p-2 rounded-md mb-2 outline-none"
            data-te-toggle="modal"
            data-te-target="#createFeedModal"
            data-te-ripple-init
            data-te-ripple-color="light"
          />
          <div
            data-te-toggle="modal"
            data-te-target="#createFeedModal"
            className="flex"
          >
            <div className="flex flex-wrap items-center px-2 gap-2">
              <AiFillCamera size={20} color="rgb(34 197 94)" />
              Photo
            </div>
            <div className="flex flex-wrap items-center px-2 gap-2">
              <BsFillCameraVideoFill size={20} color="rgb(34 197 94)" /> Vedio
            </div>
            <div className="flex flex-wrap items-center px-2 gap-2">
              <HiDocumentText size={20} color="rgb(34 197 94)" />
              Document
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
