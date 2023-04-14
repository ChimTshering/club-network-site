import React from 'react'
import { FaRegTimesCircle } from 'react-icons/fa'

type prop = {
  url:string
}
export default function DraftVedio({url}:prop) {
  return (
    <div className="relative flex m-2">
      <div className='absolute z-10 right-0 top-0 bg-white rounded-full overflow-hidden'>
        <FaRegTimesCircle size={28} />
      </div>
        <video muted controls>
          <source src={url} key={url}/>
        </video>
    </div>
  );
}
