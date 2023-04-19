import { FeedPostRequest } from "@/types/feeds_type_model";
import { serialize } from "object-to-formdata";

export const uploadPhoto = async (img: File) => {
  const res = await fetch(
    "https://seliseapp.club.selise.dev/api/v1/posts/photos",
    {
      method: "POST",
      credentials: "include",
      body: serialize({ photo: { image: img } }),
    }
  );
  const data = await res.json();
  return data;
};
export const uploadVedio = async (vedio: File) => {
  const res = await fetch(
    "https://seliseapp.club.selise.dev/api/v1/posts/videos",
    {
      method: "POST",
      credentials: "include",
      body: serialize({ video: { video: vedio } }),
    }
  );
  const data = await res.json();
  return data;
};
export const uploadDocs = async (doc: File) => {
  const res = await fetch(
    "https://seliseapp.club.selise.dev/api/v1/posts/documents",
    {
      method: "POST",
      credentials: "include",
      body: serialize({ document: { file: doc } }),
    }
  );
  const data = await res.json();
  return data;
};
export const postFeed = async (paload: FeedPostRequest) => {
  const res = await fetch(
    "https://seliseapp.club.selise.dev/api/v1/posts/posts",
    {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(paload),
      headers: { "content-type": "application/json" },
    }
  );
  const data = res.json();
  return data;
};
export const getFeeds = async (pageNo: number) => {
  const res = await fetch(
    `https://seliseapp.club.selise.dev/api/v1/feeds?query=&page=${pageNo}&hash_tag=&visibility=users&following_groups_ref=`,
    { credentials: "include" }
  );
  const data = res.json();
  return data;
};
