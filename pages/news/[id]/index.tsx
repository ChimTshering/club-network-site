import DetailNews from "@/components/detail-news";
import NewsList from "@/components/news-list";
import Layout from "@/pages/layout";
import { NextPageWithLayout } from "@/pages/_app";
import React, { ReactElement } from "react";

const News: NextPageWithLayout = () => {
  return (
    <div className="h-screen w-full bg-slate-100 relative flex flex-col items-center">
      <div className="bg-green-500 h-2/6 w-full opacity-80 z-30" />
      <div className="relative bg-white rounded-lg flex w-11/12 top-[-120px] z-40">
        <div className="w-2/5 border-r-[1px] border-gray-300 overflow-y-scroll no-scrollbar max-h-[500px]">
          <NewsList />
          <NewsList />
          <NewsList />
          <NewsList />
          <NewsList />
          <NewsList />
          <NewsList />
          <NewsList />
          <NewsList />
          <NewsList />
          <NewsList />
          <NewsList />
          <NewsList />
          <NewsList />
        </div>
        <div className="w-3/5">
          <DetailNews />
        </div>
      </div>
    </div>
  );
};
News.getLayout = function getLayout(News: ReactElement) {
  return <Layout>{News}</Layout>;
};
export default News;
