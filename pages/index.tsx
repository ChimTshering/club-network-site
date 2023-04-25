import Head from 'next/head'
import { ReactElement } from 'react'
import FeedsCard from '@/components/feed-card'
import { FeedComposer } from '@/components/modals/feed-composer'
import { NextPageWithLayout } from './_app'
import Layout from './layout'

const Home:NextPageWithLayout=()=> {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="grid justify-center items-center w-full">
        <div className='flex flex-col items-center'>
          <FeedComposer />
          <FeedsCard />
          <FeedsCard />
        </div>
      </main>
    </>
  );
}
Home.getLayout = function getLayout(Home:ReactElement){
  return <Layout>{Home}</Layout>
}
export default Home;