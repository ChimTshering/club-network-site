import Image from 'next/image';
import React from 'react'
import news from '../public/assets/news.png'

export default function NewsList() {
  return (
    <div className="p-3 border border-gray-300 m-0 flex flex-wrap items-center gap-4 active:bg-slate-100 focus:bg-slate-100" tabIndex={-1}>
      <div className="relative h-20 w-28">
        <Image src={news.src} alt="" fill />
      </div>
      <div>
        <p className='text-sm font-bold'>Title</p>
        <p className='text-sm text-gray-400'>Description</p>
        <p className='text-sm text-gray-400'>Publish Date</p>
        <div><p className='rounded-3xl px-1 border justify-center flex bg-blue-700 text-white text-sm'>status</p></div>
      </div>
    </div>
  );
}
