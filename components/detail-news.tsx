import Image from 'next/image'
import React from 'react'
import news from '../public/assets/news.png'

export default function DetailNews() {
  return (
    <div className="w-full h-full">
      <div className="relative grid grid-flow-row w-full p-3 border-b-[1px] border-gray-300">
        <p className="text-sm px-2 py-1 m-2 rounded-s-full rounded-e-full border border-green-400 w-max">
          TAGS
        </p>
        <h1 className="text-2xl">TITLE</h1>
        <p className="text-sm text-gray-400">PUBLISH DATE</p>
      </div>
      <div className="p-4 flex flex-col items-center">
        <div className='overflow-hidden'>
          <Image src={news.src} alt="" height={300} width={550} />
        </div>
        <p>NEWS DETAIL</p>
      </div>
    </div>
  );
}
