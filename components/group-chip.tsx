import { Group } from "@/types/feeds_type_model";
import Image from "next/image";
import React from "react";
import { FaTimesCircle } from "react-icons/fa";
import grpImg from "../public/assets/group.png";

interface props{
  group:Group
  handleRemove:()=>void
}
const GroupChip = ({group,handleRemove}:props) => {
  return (
    <div className="rounded-full m-1 flex border items-center gap-2">
      <div className="relative rounded-full overflow-hidden h-6 w-6 m-1">
        <Image src={group.profile_picture?.original_url ?? grpImg.src} alt="" fill priority />
      </div>
      <p className="text-gray-600 text-xs">{group.name}</p>
      <FaTimesCircle
        color="rgb(0,0,0,0.4)"
        size={18}
        className="cursor-pointer m-1"
        onClick={()=>handleRemove()}
      />
    </div>
  );
};

export default GroupChip;
