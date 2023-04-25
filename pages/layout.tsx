import React from 'react'
import { Header } from "@/components/header";
import { NavBar } from "@/components/nav";
import CreateFeedModal from '@/components/modals/create-feed-modal';
type Porps={
  children:React.ReactNode
}

export default function Layout({children}:Porps) {
  return (
    <div>
      <div className="flex">
        <div className="w-1/4 top-0 left-0 fixed">
          <NavBar />
        </div>
        <div className="absolute top-0 right-0 w-3/4">
          <div className='sticky z-10 top-0 bg-white'>
            <Header />
          </div>
          <div className="w-full h-full m-0 bg-gray-300">{children}</div>
        </div>
      </div>
      <CreateFeedModal/>
    </div>
  );
}
