import { getNews } from "@/pages/api/news-api";
import { News } from "@/types/news_type_model";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import newsImg from "../public/assets/news.png";

export default function DetailNews() {
const [news,setNews] = useState<News>() 
const router = useRouter()
useEffect(()=>{
  (async()=>{
    const {id} = router.query
    const data =id && await getNews(id.toString())
    setNews(()=>data)
  })()
},[router.query])
  return (
    <div className="w-full max-h-96 overflow-y-scroll no-scrollbar">
      <div className="relative grid grid-flow-row w-full p-3 border-b-[1px] border-gray-300">
        <p className="text-sm px-2 py-1 m-2 rounded-s-full rounded-e-full border border-green-400 w-max">
          TAGS
        </p>
        <h1 className="text-2xl">{news?.localized_news_attributes[0].title}</h1>
        <p className="text-sm text-gray-400">{news?.created_at_in_words}</p>
      </div>
      <div className="p-4 flex flex-col items-center">
        <div className="overflow-hidden">
          <Image src={news?.current_locale_news_attributes?.photo_urls[0]?.url.original_url || newsImg.src} alt="" height={300} width={550} priority/>
        </div>
        {news?.localized_news_attributes?<div dangerouslySetInnerHTML={{__html:news?.localized_news_attributes[0].content}} className='relative text-justify w-full py-3'/>:null}
      </div>
    </div>
  );
}