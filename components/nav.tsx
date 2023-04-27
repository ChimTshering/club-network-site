import Link from "next/link";
import React, { useCallback, useEffect, useState } from "react";
import naruto from "@/public/assets/download.jpeg";
import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState, UseDispatch } from "@/redux/store";
import { getNewsList } from "@/pages/api/news-api";
import { News } from "@/types/news_type_model";
import { useRouter } from "next/router";
import { setNewsInStore } from "@/redux/features/newsSlice";

export const NavBar = () => {
  const [newsList, setNewsList] = useState<News[]>([]);
  const dispatch = UseDispatch();
  const router = useRouter();
  useEffect(() => {
    (async () => {
      const data = await getNewsList(1);
      setNewsList(() => [...data]);
    })();
  }, []);
  const [activeURL, setActiveURL] = useState<string[]>([]);
  const signedUser = useSelector(
    (state: RootState) => state.auth.signed_in_user
  );

  useEffect(() => {
    const path = router.pathname.split("/");
    setActiveURL(() => [...path]);
  }, [router.pathname]);

  const setNews = useCallback(() => {
    if (newsList.length) {
      dispatch(setNewsInStore(newsList));
    }
  }, [dispatch, newsList]);
  return (
    <div className="h-screen bg-white">
      <div className="bg-gray-200 w-full content-center justify-center items-center flex flex-col flex-wrap h-1/3 pb-4">
        <h4 className="text-center font-bold text-lg">{signedUser?.name}</h4>
        <p className="text-center text-xs">{signedUser?.email}</p>
        <p className="text-center text-xs font-bold">{signedUser?.role}</p>
      </div>
      <div className="flex flex-col h-auto">
        <div className="relative rounded-full flex flex-wrap justify-center items-center bg-white top-[-50px] self-center">
          <div className="relative rounded-full m-2 overflow-hidden h-24 w-24 ">
            <Image
              src={`${
                signedUser?.photo_path ? signedUser.photo_path : naruto.src
              }`}
              alt=""
              fill
              priority
            />
          </div>
        </div>
      </div>
      <div className=" relative flex flex-col h-auto top-[-50px]">
        <Link
          href="/"
          className={`py-1 px-4 my-2 mr-3 rounded-r-2xl font-bold hover:bg-green-500 hover:text-white ${
            activeURL[1] == "" ? " bg-green-500 text-white" : ""
          } `}
        >
          Feeds
        </Link>
        {newsList ? (
          <Link
            href={`/news/${newsList[0]?.ref_id}`}
            onClick={() => {
              setNews();
            }}
            className={`py-1 px-4 my-2 mr-3 rounded-r-2xl font-bold hover:bg-green-500 hover:text-white ${
              activeURL[1] == "news" ? " bg-green-500 text-white" : ""
            } `}
          >
            News
          </Link>
        ) : null}
      </div>
    </div>
  );
};
