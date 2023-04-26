import React, { useEffect, useState } from 'react'


export const Header = () => {
  const [activePath,setPath] = useState<string[]>([]);
  useEffect(()=>{
    setPath(window.location.pathname.split('/'))
  },[])
  return (
    <div className='w-full py-4 pl-5'>
      <h3 className='font-bold text-xl font-serif'>{activePath.includes(' ')?'Feeds':activePath.includes('news')?'News':null}</h3>
    </div>
  )
}

