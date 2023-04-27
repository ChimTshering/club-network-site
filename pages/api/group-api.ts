import { Group } from "@/types/feeds_type_model";

export const getGroups =async (page:number) => {
  const res = await fetch(
    `https://seliseapp.club.selise.dev/api/v1/iam/groups?page=${page}`,
    { credentials: "include" }
  );
  const data = await res.json()
  return data.groups;
}