import Image from 'next/image'
import React from 'react'
import {BsPersonFill} from 'react-icons/bs'

export const GroupCard = () => {
  return (
    <div>
      <div>
        <Image src="" alt="" />
        TEAM NAME SUB HEADING
        <div>
          <BsPersonFill />
          MEMBER
        </div>
      </div>
      <div>
        FOLLOWING
      </div>
    </div>
  );
}

