"use server"

import { prisma } from "@/db";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

function VerifyUser() {
  const { userId } : { userId: string | null } = auth()
  
  if (!userId) {
    throw new Error("Not logged in")
  }

  else
    return
}

export async function GetBlog(id: string){
    const Blog = prisma.blogPost.findUnique({where: {id}})
    return Blog
}

export async function GetBlogs(){
  const Blogs = prisma.blogPost.findMany()
  return Blogs
}

export async function GetArrayBlogs() {
  const Blogs = await GetBlogs()
  return Blogs.reverse()
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

