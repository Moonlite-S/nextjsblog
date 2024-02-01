"use client"

import { BlogPost } from "@prisma/client"
import Link from "next/link"
import { DeleteBlog } from "./route"

export function Blog(
  {id, picture, title, body, blogCreated}: BlogPost
) {
  return (
    <Link href={`/Blogs/${id}`}>
      <div className="hover:scale-110 hover:bg-mocha-400 duration-100 ease-in-out bg-mocha-200 border-solid border-2 border-mocha-1000 rounded text-mocha-1000">
          <PictureBanner URL_String={picture}/>
          <div className='mx-auto text-center py-5 px-2 border-solid border-t-2 border-mocha-900 h-[200px] overflow-hidden'>
            <h1 className="text-lg font-bold">{title}</h1>
            <p className="leading-relaxed line-clamp">{body}</p>
          </div>
          
          <div className='mx-auto px-2 border-solid border-t-2 border-mocha-900 h-[30px] text-right'>
            <p>{blogCreated}</p>
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

export async function BlogButtons(id: {id: string}){
  return (
    <div className="m-5 p-5 bg-mocha-100 rounded" >
      <button onClick={() => DeleteBlog(id.id)} className="px-2 mx-2 bg-mocha-900 hover:bg-mocha-700 rounded transition"><h1 className="text-mocha-100">Delete Blog</h1></button>
      <Link href={`/Blogs/${id.id}/EditBlog`}><button className="px-2 mx-2 bg-mocha-500 hover:bg-mocha-600 rounded transition"><h1>Edit Blog</h1></button></Link>
    </div>
  )
}