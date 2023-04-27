export const getNewsList = async(pageNo:number)=>{
  const res = await fetch(
    `https://seliseapp.club.selise.dev/api/v1/news_ms/news?sort=&direction=&page=${pageNo}&query=&visibility=users&following_groups_ref=`,{credentials:'include'}
  );
  const data = await res.json()
  return data.news;
}
export const getNews =async(newsId:string)=>{
  const res = await fetch(
    `https://seliseapp.club.selise.dev/api/v1/news_ms/news/${newsId}`,{credentials:'include'}
  );
  const data = await res.json()
  return data.news;
}