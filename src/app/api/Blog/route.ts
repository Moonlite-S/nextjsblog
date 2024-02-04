"use server"

import { prisma } from "@/db";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

function VerifyUser() {
  const { userid }: any = auth()
  
  if (!userid) {
    throw new Error("Not logged in")
  }

  else
    return
}

export async function GetBlog(id: string){
    console.log(id)
    return prisma.blogPost.findUnique({where: {id}})
}

export async function GetBlogs(){
  return prisma.blogPost.findMany()
}

export async function DeleteBlog(id: string){
  VerifyUser()
  console.log("Deleting blog " + id)
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
  redirect("/Blogs")
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