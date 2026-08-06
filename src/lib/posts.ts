import { api } from "@/app/api/api";

export async function getPosts() {
  return await api.posts
    .browse({
      limit: 15, // default is 15, max is 100
      include: "authors",
    })
    .catch(err => {
      console.error(err);
      return [];
    });
}

export async function getPostBySlug(slug: string) {
  return await api.posts
    .read({ slug }, { include: "authors" })
    .catch(err => {
      console.error(err);
      return null;
    });
}

export async function getPostFilered(tag: string, page = 1, limit = 10) {
  return await api.posts.browse({
    filter: `primary_tag:${tag}`,
    include: ['tags', 'authors'],
    limit,
    page,
  })

}