import Image from 'next/image';
import React, { useCallback, useState } from 'react'
import grpimg from '../public/assets/group.png'
import { ImCheckboxChecked } from "react-icons/im";
import { Group } from '@/types/feeds_type_model';
interface props{
  group:Group
  isChecked:boolean
  handleCheck:()=>void
}

const GroupCheckBoxInput = ({group,isChecked,handleCheck}:props) => {
  // const [checked, setCheck] = useState<boolean>(false)
  // const handleCheck = useCallback(()=>{
  //   setCheck(!checked)
  // },[checked])
  return (
    <div className="rounded-md bg-gray-100 flex flex-wrap items-center p-1 px-3 place-content-between w-full my-3 ">
      <div className="flex items-center gap-2">
        <div className="relative rounded-full overflow-hidden m-1 h-9 w-9">
          <Image src={group.profile_picture?.original_url ?? grpimg} alt="" fill />
        </div>
        <div className="grid  h-9">
          <p className=" flex text-xs text-gray-700 font-bold items-center leading-3">
            {group.name}
          </p>
          <p className=" flex text-xs text-gray-500 items-center">{group.followers} followers</p>
        </div>
      </div>
      {isChecked ? (
        <ImCheckboxChecked
          color="rgb(74 222 128)"
          size={26}
          onClick={() => handleCheck()}
        />
      ) : (
        <div
          className="h-6 w-6 rounded-sm border border-gray-400 bg-white"
          onClick={() => handleCheck()}
        />
      )}
    </div>
  );
}

export default GroupCheckBoxInput
