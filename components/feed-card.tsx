import Image from 'next/image'
import React from 'react'
import {
  BiCommentAdd,
} from "react-icons/bi";
import {
  AiFillDelete,
  AiFillEdit,
  AiFillLike,
  AiOutlineLike,
} from "react-icons/ai";
import {
  CiMenuKebab,
} from "react-icons/ci";
import naruto from '@/public/assets/download.jpeg'

export default function FeedsCard() {
  return (
    <div className='bg-white m-5 py-4 rounded-2xl'>
      <div className='flex justify-between px-3'>
        <div className='flex gap-2'>
          <div className='relative rounded-full overflow-hidden h-[50px] w-[50px] flex flex-wrap justify-center content-center'>
            <Image src={naruto} alt="" fill />
          </div>
          <div>
            <h5 className='font-bold'>USER NAME</h5>
            <p className='text-xs text-gray-800'>POSTED DATE</p>
          </div>
        </div>
        <div className=''>
          <CiMenuKebab size={24} color="#000s"/>
          <div className='absolute bg-white p-4 rounded-md drop-shadow-lg m-1'>
            <div className='flex gap-3'><AiFillEdit size={18} color="gray"/>Edit</div>
            <div className='flex gap-3'><AiFillDelete size={18} color='gray'/>Delete</div>
          </div>
        </div>
      </div>
      <div className='mt-4'>
        <p className='text-justify px-3'>
          FEED DESCRIPTION
        </p>
      </div>
      <div className=''>
        <Image src={naruto} alt="" width={600} />
      </div>

      <div className='my-2 mx-4 flex flex-wrap justify-between'>
        <div className=''>
          <BiCommentAdd size={24} />
        </div>
        <div className=''>
          <AiOutlineLike size={24} />
        </div>
      </div>
    </div>
  );
}
