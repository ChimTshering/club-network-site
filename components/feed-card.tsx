import Image from "next/image";
import React, {
  useCallback,
  useState,
} from "react";
import { BiCommentAdd } from "react-icons/bi";
import {
  AiFillDelete,
  AiFillEdit,
  AiOutlineCalendar,
  AiOutlineClockCircle,
  AiOutlineLike,
} from "react-icons/ai";
import { CiMenuKebab } from "react-icons/ci";
import naruto from "@/public/assets/download.jpeg";
import banner from "@/public/assets/events-banner.png";
import news from "@/public/assets/news.png";
import { FeedObj } from "@/types/feeds_type_model";
import { ImLocation2 } from "react-icons/im";
import { MdReport } from "react-icons/md";
import { UseDispatch } from "@/redux/store";
import { feedStore } from "@/redux/features/feedSlice";
type props = {
  feed: FeedObj;
};

export default function FeedsCard({ feed }: props) {
  const [menuPopUp, setMenuPopUp] = useState<boolean>(false);
  const dispatch = UseDispatch()
  const [feedModal,setFeedModal] = useState(false)

  const postImgs = feed.item.content.image_urls;
  let originalUrl;
  let localeEnglishNews;
  if (feed.item.content.localized_news_attributes) {
    localeEnglishNews = feed.item.content.localized_news_attributes[0];
    originalUrl =
      feed.item.content.localized_news_attributes[0].photo_urls[0]?.url
        .original_url;
  }
  const showMenu = useCallback((key: string) => {
    if (key === "focus") {
      setMenuPopUp(true);
    } else if(key ==='blur') {
        setMenuPopUp(false);
    }
  }, []);
  const handleEdit = ()=>{
    setFeedModal(true)
    console.log('aaa');
    
    // dispatch(feedStore(feed))
  }
  return (
    <div className="bg-white m-5 py-4 rounded-2xl w-[600px]">
      <div className="flex justify-between px-3">
        <div className="flex gap-2">
          <div className="relative rounded-full overflow-hidden h-[50px] w-[50px] flex flex-wrap justify-center content-center">
            <Image src={feed.actor.image || naruto.src} alt="" fill priority sizes="50px"/>
          </div>
          <div>
            <h5 className="font-bold">{feed.actor.name}</h5>
            <p className="text-xs text-gray-800">
              {feed.item.content.created_at.slice(0, 10)}
            </p>
          </div>
        </div>
        <div>
          <div
            className="cursor-pointer"
            onFocus={() => showMenu("focus")}
            onBlur={() => showMenu("blur")}
            tabIndex={-1}
          >
            <CiMenuKebab size={24} color="#000" />
          </div>
          {menuPopUp ? (
            <div
              className="absolute bg-white p-4 rounded-md drop-shadow-lg m-1 z-10 text-gray-600"
              onBlur={() => showMenu("blur")}
              tabIndex={-1}
            >
              <div
                data-te-toggle="modal"
                data-te-target="#createFeedModal"
                tabIndex={0}
                onClick={() => handleEdit()}
                className="flex gap-3 py-1 cursor-pointer"
              >
                <AiFillEdit size={18} />
                Edit
              </div>
              <div className="flex gap-3 py-1">
                <AiFillDelete size={18} />
                Delete
              </div>
              <div className="flex gap-3 py-1">
                <MdReport size={18} />
                Report
              </div>
            </div>
          ) : null}
        </div>
      </div>
      <div className="mt-4">
        {feed.item.content.text_content ? (
          <div
            className="text-justify px-3"
            dangerouslySetInnerHTML={{ __html: feed.item.content.text_content }}
          />
        ) : null}
      </div>
      <div className="flex flex-col flex-wrap">
        {postImgs?.length ? (
          postImgs.map((imgurl) => (
            <div className={`relative w-[600px] h-[400px] `} key={imgurl}>
              <Image src={imgurl} alt="" fill priority />
            </div>
          ))
        ) : feed.item.content.image_path_large ? (
          <Image
            src={feed.item.content.image_path_large}
            alt={feed.item.content.image_path_large}
            width={600}
            height={400}
            priority
          />
        ) : feed.item.type === "event" ? (
          <Image src={banner} alt="" height={400} width={600} />
        ) : null}
        {feed.item.type === "news" ? (
          <div className="flex flex-wrap m-2 mx-3">
            <div className="relative w-5/12 h-[250px] overflow-hidden">
              <Image src={originalUrl ?? news.src} alt="" fill priority />
            </div>
            <div className="w-7/12 h-[250px] bg-slate-200 p-4 flex flex-col flex-wrap">
              {localeEnglishNews?.title ? (
                <p className="break-words w-3/5 font-bold text-lg px-2">
                  {localeEnglishNews.title.length > 30
                    ? localeEnglishNews?.title?.slice(0, 30) + "..."
                    : localeEnglishNews.title}
                </p>
              ) : (
                ""
              )}
              {localeEnglishNews?.content ? (
                <div
                  className="break-words"
                  dangerouslySetInnerHTML={{
                    __html:
                      localeEnglishNews.content.length > 120
                        ? localeEnglishNews.content.slice(0, 120) + "..."
                        : localeEnglishNews.content,
                  }}
                />
              ) : null}
              <div className="my-4 relative">
                <button className="px-4 py-2 bg-green-500 rounded-md text-white text-sm">
                  VIEW DETAILS &gt;
                </button>
              </div>
            </div>
          </div>
        ) : null}
      </div>
      {feed.item.content.event_from ? (
        <div className="flex flex-col bg-slate-100 p-3">
          <p className="text-green-500 text-sm">
            {feed.item.content.event_category_name ?? null}
          </p>
          <p className="text-xl font-bold">{feed.item.content.title ?? null}</p>
          <div className="flex gap-4 text-gray-600 py-1">
            {feed.item.type === "event" ? (
              <div className="flex gap-1 flex-wrap items-center">
                <AiOutlineCalendar />
                <p className="text-xs">{feed.item.content.upcoming_date}</p>
              </div>
            ) : null}
            {feed.item.content.upcoming_time ? (
              <div className="flex gap-1 flex-wrap items-center">
                <AiOutlineClockCircle />
                <p className="text-xs">{feed.item.content.upcoming_time}</p>
              </div>
            ) : null}
          </div>
          {feed.item.content.location ? (
            <div className="flex gap-3 flex-wrap items-center text-gray-600">
              <ImLocation2 />{" "}
              <p className="text-sm">{feed.item.content.location}</p>
            </div>
          ) : null}
        </div>
      ) : null}

      <div className="my-3 mx-4 flex flex-wrap items-center gap-5 justify-between">
        <div className="flex flex-wrap items-center gap-2 text-gray-500">
          <BiCommentAdd size={24} />
          <p>{feed.interaction.comments ?? 0} Comments</p>
        </div>
        <div className="flex flex-wrap items-center gap-2 text-gray-500">
          <AiOutlineLike size={24} />
          <p>{feed.interaction.likes ?? 0} Likes</p>
        </div>
      </div>
    </div>
  );
}
