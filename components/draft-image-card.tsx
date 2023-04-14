import Image from 'next/image'
import React from 'react'
import {FaRegTimesCircle} from 'react-icons/fa'
import naruto from '../public/assets/download.jpeg'
type prop={
  url:string
}

export default function DraftImage({url}:prop) {
  return (
    <div className="relative flex justify-center m-1">
      <div className='absolute right-0 top-0 z-10 rounded-full bg-white'>
        <FaRegTimesCircle
          size={26}
        />
      </div>
      <div className=" relative h-48 w-full m-2">
        <Image src={url} alt="" fill />
      </div>
    </div>
  );
}
