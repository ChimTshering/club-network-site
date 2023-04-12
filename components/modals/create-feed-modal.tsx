import Image from 'next/image';
import React from 'react'
import naruto from '@/public/assets/download.jpeg'
import { AiFillCamera } from 'react-icons/ai';
import { BsFillCameraVideoFill } from 'react-icons/bs';
import { HiDocumentText } from 'react-icons/hi';
export default function CreateFeedModal() {
  return (
    <>
      {/* <!--Button trigger vertically centered scrollable modal--> */}
      {/* <button
    type="button"
    className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
    data-te-toggle="modal"
    data-te-target="#exampleModalCenteredScrollable"
    data-te-ripple-init
    data-te-ripple-color="light">
    Vertically centered scrollable modal
  </button> */}

      <div
        data-te-modal-init
        className="fixed left-0 top-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden border-t-2"
        id="exampleModalCenteredScrollable"
        tabIndex={-1}
        aria-labelledby="exampleModalCenteredScrollable"
        aria-modal="true"
        role="dialog"
      >
        <div
          data-te-modal-dialog-ref
          className="pointer-events-none relative flex min-h-[calc(100%-1rem)] w-auto translate-y-[-50px] items-center opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:min-h-[calc(100%-3.5rem)] min-[576px]:max-w-[500px]"
        >
          <div className="pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600 px-5">
            <div className="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
              {/* <!--Modal title--> */}
              <h5
                className="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200"
                id="exampleModalCenteredScrollableLabel"
              >
                Create a post
              </h5>
            </div>

            {/* <!--Modal body--> */}
            <div className="flex flex-wrap gap-3 items-center my-5">
              <div className="relative w-[60px] h-[60px] rounded-full overflow-hidden">
                <Image src={naruto} alt="profile" fill />
              </div>
              <p className="text-sm text-gray-600">USER NAME</p>
            </div>
            <textarea
              name=""
              id=""
              rows={6}
              placeholder={`Hi 'USER_NAME', write something.... `}
              className="outline-none"
            />
            <div className="grid">
              <h3 className="font-bold">Visibility Options</h3>
              <p className="text-sm text-gray-500 py-2">
                please choose cisibility options of this post
              </p>
              <div className=" flex flex-wrap justify-between w-full gap-2">
                <div className="border-gray-200 border p-3  rounded-lg w-[225px] flex items-center gap-2">
                  <input
                    type="radio"
                    name="visibility"
                    id="all"
                    value="all"
                    className="appearance-none checked:bg-green-400 border h-5 w-5 rounded-full"
                  />
                  <label htmlFor="all">All</label>
                </div>
                <div className="border-gray-200 border p-3 rounded-lg w-[225px] flex items-center gap-2">
                  <input
                    type="radio"
                    name="visibility"
                    id="group"
                    value="aroup"
                    className="appearance-none checked:bg-green-400 border h-5 w-5 rounded-full"
                  />
                  <label htmlFor="group">Group</label>
                </div>
              </div>
              <div className="flex mt-5 mb-3">
                <div className="flex flex-wrap items-center px-2 gap-2">
                  <AiFillCamera size={20} color="rgb(34 197 94)" />
                  Photo
                </div>
                <div className="flex flex-wrap items-center px-2 gap-2">
                  <BsFillCameraVideoFill size={20} color="rgb(34 197 94)" />{" "}
                  Vedio
                </div>
                <div className="flex flex-wrap items-center px-2 gap-2">
                  <HiDocumentText size={20} color="rgb(34 197 94)" />
                  Document
                </div>
              </div>
            </div>
            {/* <!--Modal footer--> */}
            <div className="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50 gap-3">
              <button
                type="button"
                className="inline-block rounded border border-green-300  px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-green-500 transition duration-150 ease-in-out hover:bg-green-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
                data-te-modal-dismiss
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                CANCEL
              </button>
              <button
                type="button"
                className="ml-1 inline-block rounded bg-green-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-green-400 focus:bg-green-500  focus:outline-none focus:ring-0 active:bg-green-500 disabled:bg-gray-200 disabled:text-gray-500"
                data-te-ripple-init
                data-te-ripple-color="light"
                disabled
              >
                POST
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
