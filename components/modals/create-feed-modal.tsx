import Image from "next/image";
import React, { ChangeEvent, useRef, useState } from "react";
import naruto from "@/public/assets/download.jpeg";
import { AiFillCamera } from "react-icons/ai";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { HiDocumentText } from "react-icons/hi";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { postFeed, uploadDocs, uploadPhoto, uploadVedio } from "@/pages/api/feed-api";
import { Document, FeedObj, FeedPostRequest } from "@/types/feeds_type_model";
import DraftImage from "../draft-image-card";
import DraftVedio from "../draft-vedio-card";
import FileChip from "../file-chip";

export default function CreateFeedModal() {
  const user = useSelector((state: RootState) => state.auth.signed_in_user);
  const feed = useSelector((state: RootState) => state.feed.feed);
  const [images, setImages] = useState<string[]>([]);
  const [video, setVideo] = useState<string[]>([]);
  const [docs, setDocs] = useState<Document[]>([]);
  const [formData, setFormData] = useState({
    text_content: "",
    visibility: "users",
  });
  const imageRef = useRef<HTMLInputElement | null>(null);
  const vedioRef = useRef<HTMLInputElement | null>(null);
  const docsRef = useRef<HTMLInputElement | null>(null);

  const handleFormData = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    key: string
  ) => {
    setFormData((previous) => ({ ...previous, [key]: e.target.value }));
  };
  const fileUpload = async (
    e: ChangeEvent<HTMLInputElement>,
    fileType: string
  ) => {
    if (e.target.files) {
      switch (fileType) {
        case "image":
          const data = await uploadPhoto(e.target.files[0]);
          data.photo_url && setImages((previous) => [...previous, data.photo_url]);
          break;
        case "vedio":
          const res = await uploadVedio(e.target.files[0]);
          res.video_url && setVideo((previous) => [...previous, res.video_url]);
          break;
        case "document":
          const docURL = await uploadDocs(e.target.files[0]);
          if (docURL.document_url) {
            setDocs((previous) => [
              ...previous,
              {
                name: `${e.target.files && e.target.files[0].name}`,
                size: `${
                  e.target.files && (e.target.files[0].size / 1000).toFixed(2)
                } KB`,
                src: docURL.document_url,
              },
            ]);
          }
          break;
      }
    }
  };
  const fileRemove =(document:Document)=>{
    setDocs((files)=>(files.filter(doc=>((doc.name!==document.name) && (doc.size !== document.size)))))
  }
  const urlRemove=(url:string,type:string)=>{
    switch(type){
      case 'image':
        setImages((imageurls)=>(imageurls.filter(image=>(image!==url))))
        break;
      case 'vedio':
        setVideo((vedioutls)=>(vedioutls.filter(vediourl=>vediourl!==url)))
        break;
      default:
        break;

    }
  }
  const addFeed = async()=>{
    if(user){
    const payload:FeedPostRequest = {actor:{image:user?.photo_path, name:user?.first_name, uuid:user.uuid},document_urls:docs, editable:false, hash_tags:[],image_urls:images,video_urls:video, ...formData}
  const res = await postFeed(payload)
  }
  }
  console.log(feed);
  
  return (
    <>
      <div
        data-te-modal-init
        className="fixed left-0 top-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden border-t-2"
        id="createFeedModal"
        tabIndex={-1}
        aria-labelledby="exampleModalCenteredScrollable"
        // aria-modal="true"
        // role="dialog"
        aria-hidden
      >
        <div
          data-te-modal-dialog-ref
          className="pointer-events-none relative flex min-h-[calc(100%-1rem)] w-auto translate-y-[-50px] items-center opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:min-h-[calc(100%-3.5rem)] min-[576px]:max-w-[500px]"
        >
          <div className="pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600 px-5">
            <div className="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
              {/* <!--Modal title--> */}
              <h5
                className="text-2xl font-medium leading-normal text-neutral-800 dark:text-neutral-200"
                id="exampleModalCenteredScrollableLabel"
              >
                Create a post
              </h5>
            </div>

            {/* <!--Modal body--> */}
            <div className="flex flex-col max-h-96 overflow-y-scroll">
              <div className="flex flex-wrap gap-3 items-center my-5 ">
                <div className="relative w-[60px] h-[60px] rounded-full overflow-hidden">
                  <Image
                    src={user?.photo_path ? user.photo_path : naruto.src}
                    alt="profile"
                    fill
                  />
                </div>
                <p className="text-sm text-gray-600">{user?.first_name}</p>
              </div>
              <textarea 
              // role="textbox"
              data-testid='textarea'
                name=""
                id=""
                // rows={6}
                placeholder={`Hi ${user?.first_name}, write something.... `}
                className="outline-none min-h-[50px]"
                onChange={(e) => handleFormData(e, "text_content")}
              />
              {images
                ? images.map((url) => (
                    <DraftImage
                      url={url}
                      key={url}
                      onRemove={() => urlRemove(url, "image")}
                    />
                  ))
                : null}
              {video
                ? video.map((url) => (
                    <DraftVedio
                      url={url}
                      key={url}
                      onRemove={() => urlRemove(url, "vedio")}
                    />
                  ))
                : null}
              <div className="flex flex-wrap m-2">
                {docs
                  ? docs.map((doc) => (
                      <FileChip
                        doc={doc}
                        key={doc.src}
                        onRemove={() => fileRemove(doc)}
                      />
                    ))
                  : null}
              </div>
            </div>
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
                    value="users"
                    checked={formData.visibility === "users"}
                    className="appearance-none checked:bg-green-400 border h-5 w-5 rounded-full"
                    onChange={(e) => handleFormData(e, "visibility")}
                  />
                  <label htmlFor="all">All</label>
                </div>
                <div
                  className="border-gray-200 border p-3 rounded-lg w-[225px] flex items-center gap-2"
                  tabIndex={-1}
                  >
                  <input
                  data-te-toggle="modal"
                  data-te-target="#groupModal"
                    type="radio"
                    name="visibility"
                    value="group"
                    checked={formData.visibility === "group"}
                    className="appearance-none checked:bg-green-400 border h-5 w-5 rounded-full"
                    onChange={(e) => handleFormData(e, "visibility")}
                  />
                  <label htmlFor="group">Group</label>
                </div>
                {formData.visibility === "group" ? <div className="m-2">
                  <p className="text-lg text-gray-700 m-2">Select group ( 0 )</p>
                  <button className=" border py-1 px-5 rounded-md border-green-500 text-green-500" data-te-toggle='modal' data-te-target='#groupModal'>+ SELECT GROUP(S) </button>
                  </div>:null}
              </div>
              <div className="flex mt-5 mb-3">
                <div
                data-testid='image-upload'
                  className="flex flex-wrap items-center px-2 gap-2 cursor-pointer"
                  onClick={() => {
                    imageRef.current && imageRef.current.click();
                  }}
                >
                  <AiFillCamera size={20} color="rgb(34 197 94)" />
                  Photo
                  <input
                    type="file"
                    name=""
                    ref={imageRef}
                    accept="image/*"
                    onChange={(e) => fileUpload(e, "image")}
                    hidden
                  />
                </div>
                <div
                  className="flex flex-wrap items-center px-2 gap-2 cursor-pointer"
                  onClick={() => vedioRef.current && vedioRef.current.click()}
                >
                  <BsFillCameraVideoFill size={20} color="rgb(34 197 94)" />
                  Vedio
                  <input
                    type="file"
                    ref={vedioRef}
                    name=""
                    accept="video/*"
                    onChange={(e) => fileUpload(e, "vedio")}
                    hidden
                  />
                </div>
                <div
                  className="flex flex-wrap items-center px-2 gap-2 cursor-pointer"
                  onClick={() => docsRef.current && docsRef.current.click()}
                >
                  <HiDocumentText size={20} color="rgb(34 197 94)" />
                  Document
                  <input
                    type="file"
                    name=""
                    ref={docsRef}
                    accept="application/*"
                    onChange={(e) => fileUpload(e, "document")}
                    hidden
                  />
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
                onClick={() => addFeed()}
                // disabled
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
