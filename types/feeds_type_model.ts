export const data ={
  actor: {
image: "https://images.selise.club/fbfe06cf9226fc2132d7450b295f11b4.png",
name: "Sonam",
uuid: "IAM001-16716932171fad5a0b-8c41-4f28-9b79-6db02f8d92a4"},
document_urls: [{
name: "little_lemon_booking_uiux.docx",
size: "5 KB",
src: "https://cnc-images.fra1.digitaloceanspaces.com/3ut5b60k4jf4kiy0il8utb69obfl"}],
editable: false,
hash_tags: [],
image_urls: ["https://images.selise.club/6f0db9dc274a43df9af3cf88deefbf08.png"],
item: {content: {image_urls: [], document_urls: [], video_urls: []}},
link_preview: {},
reactions: [],
text_content: "<p>test</p>",
video_urls: []
}
export type Document = {
  name:string;
  size:string;
  src:string
}
export type FeedPostRequest = {
  actor:{
    image:string,
    name:string,
    uuid:string
  },
  document_urls?:Document[],
  editable?:boolean,
  hash_tags?:string[],
  image_urls?:string[],
  item?:{content:{image_urls:string[],document_urls:Document[], video_urls:string[]}},
  link_preview?:{},
  reactions?:[],
  text_content?:string,
  video_urls?:string[],
  visibility:string
}