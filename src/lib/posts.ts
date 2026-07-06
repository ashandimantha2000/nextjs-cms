import { api } from "@/app/api/api";

export async function getPosts() {
  return await api.posts
    .browse({
      limit: 15 // default is 15, max is 100
    })
    .catch(err => {
      console.error(err);
    });
}