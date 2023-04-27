import { News } from '@/types/news_type_model';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react'
import newsIng from '../public/assets/news.png'

interface props {
  news:News
}
export default function NewsList({news}:props) {
  const router = useRouter();
  const {id} = router.query

  return (
    <div
      className={`p-3 border border-gray-300 m-0 flex flex-wrap items-center gap-4 ${id === news.ref_id?'bg-slate-200':''} cursor-pointer`}
      tabIndex={-1}
      onClick ={()=>router.push(`/news/${news.ref_id}`)}
    >
      <div className="relative h-20 w-28">
        <Image
          src={
            news.current_locale_news_attributes.photo_urls[0]?.url
              .original_url ?? newsIng.src
          }
          alt=""
          fill
        />
      </div>
      <div>
        <p className="text-sm font-bold">
          {news.localized_news_attributes[0].title}
        </p>
        <div
          className="text-sm text-gray-400"
          dangerouslySetInnerHTML={{
            __html: news.localized_news_attributes[0].content.slice(0,50),
          }}
        />
        <p className="text-sm text-gray-400">{news.created_at_in_words}</p>
        <div>
          <p className="rounded-3xl px-3 border justify-center flex bg-blue-700 text-white text-sm w-max">
            {news.status}
          </p>
        </div>
      </div>
    </div>
  );
}

