import { prisma } from "@/db";
import { BlogPost } from "@prisma/client";
import Link from "next/link";
import { redirect } from "next/navigation";

export async function getBlogs(){
  return prisma.blogPost.findMany()
}

export async function DeleteAllBlogs(){
  "use server"
  return prisma.blogPost.deleteMany({})
}

export async function createBlog(data: FormData){
  "use server"

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

  await prisma.blogPost.create({data: {picture, title, body}})

  redirect("/Blogs")
}

export function Blog(
  {id, picture, title, body, createdAt}: BlogPost
) {
  return (
    <Link href={`/Blogs/${id}`}>
      <div className="hover:scale-110 hover:bg-mocha-400 duration-100 ease-in-out bg-mocha-200 border-solid border-2 border-mocha-1000 rounded text-mocha-1000">
          <PictureBanner URL_String={picture}/>
          <div className='mx-auto text-center py-5 px-2 border-solid border-t-2 border-mocha-900 h-[200px] overflow-hidden'>
            <h1 className="text-lg font-bold">{title}</h1>
            <p className="leading-relaxed">{body}</p>
          </div>

        <div className="border-t-2 border-mocha-700 text-center text-mocha-1000 h-[40px] p-2">
          <p>{new Date().toString()}</p>
        </div>
      </div>
    </Link>
  )
}

export function PictureBanner(URL : {URL_String:String}) {
  return (
    <div className='bg-center' style={{
      backgroundImage:
        'url(' + URL.URL_String + ')', height:'150px'
    }}>
    </div>
  )
}
