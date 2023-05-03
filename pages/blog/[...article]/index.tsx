import { useRouter } from 'next/router'
import React from 'react'

export default function Article() {
  const router = useRouter()
  // const {article,title} = router.query
  return (
    <div className='flex flex-wrap w-screen h-screen content-center justify-center text-4xl'>
      {router?.query?.article && router?.query?.article[router?.query?.article?.length-1]}
    </div>
  )
}
