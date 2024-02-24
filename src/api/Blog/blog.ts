"use server"

import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import { VerifyUser } from "../auth/auth";

type BlogPostType = {
  [key: string]: string;
  id: string
  picture: string
  title: string
  body: string
  blogCreated: string
}


export async function GetBlogCount(){
  const BlogCount = await prisma.blogPost.count()
  return BlogCount
}

export async function GetBlog(id: string){
    const Blog = await prisma.blogPost.findUnique({where: {id}})
    return Blog
}

export async function GetBlogs(){
  const Blogs = await prisma.blogPost.findMany({
    orderBy: {createdAt: 'desc'},
  })
  return Blogs
}

export async function GetPaginatedBlogs(currentPage: number){
  const Blogs = await prisma.blogPost.findMany({
    orderBy: {createdAt: 'desc'},
    skip: (currentPage - 1) * 6,
    take: 6
  })
  return Blogs
}

export async function DeleteBlog(id: string){
  VerifyUser()
  await prisma.blogPost.delete({where: {id}})
  redirect("/Blogs")
}

export async function UpdateBlog(id: string, data: FormData){
  VerifyUser()
  await prisma.blogPost.update(
    {
      where: {id},
      data: {
        title: data.get("title")?.valueOf(),
        picture: data.get("picture")?.valueOf(),
        body: data.get("body")?.valueOf()
      }
    }
  )
  redirect(`/Blogs/${id}`)
}

export async function CreateBlog(data: FormData){
  VerifyUser()
  const title = data.get("title")?.valueOf()
  if (typeof title !== "string" || title.length < 1) {
      throw new Error("Invalid title")
  }

  const picture = data.get("picture")?.valueOf()
  if (typeof picture !== "string" || picture.length < 1) {
      throw new Error("Invalid Picture URL")
  }

  const body = data.get("body")?.valueOf()
  if (typeof body !== "string" || body.length < 1) {
      throw new Error("Invalid body")
  }

  const blogCreated = new Date().toLocaleDateString()

  await prisma.blogPost.create({data: {picture, title, body, blogCreated}})

  redirect("/Blogs")
}

