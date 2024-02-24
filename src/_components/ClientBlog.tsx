"use client"

import Link from "next/link"
import { BlogPost } from "@prisma/client"
import { DeleteBlog } from "../api/Blog/blog"
import { Protect } from "@clerk/nextjs"
import { AnimatePresence, motion } from "framer-motion"

export function Blog(
  {id, picture, title, body, blogCreated}: BlogPost
) {
  return (
    <Link href={`/Blogs/${id}`}>
      <TransitionUp>
        <motion.div
        whileTap={{scale: 0.9}}>
      <div className="hover:scale-105 hover:bg-mocha-400 duration-75 ease-in-out bg-mocha-200 border-solid border-2 border-mocha-1000 rounded text-mocha-1000">
          <PictureBanner URL_String={picture}/>
          <div className='mx-auto text-center py-5 px-2 border-solid border-t-2 border-mocha-900 h-[200px] overflow-hidden'>
            <h1 className="text-lg font-bold">{title}</h1>
            <p className="leading-relaxed line-clamp">{body}</p>
        </div>
          
          <div className='mx-auto px-2 border-solid border-t-2 border-mocha-900 h-[30px] text-right'>
            <p>{blogCreated}</p>
          </div>
      </div>
      </motion.div>
      </TransitionUp>
    </Link>
  )
}

export function PictureBanner(URL : {URL_String:String}) {
  return (
    <div className='bg-center bg-cover' style={{
      backgroundImage:
        'url(' + URL.URL_String + ')', height:'150px'
    }}>
    </div>
  )
}

export function BlogButtons(id: {id: string}){
  const handler = (id: string) => {
    if (window.confirm("Are you sure you want to delete this blog?"))
      DeleteBlog(id)
    else
      return
  }

  return (

    <BoxDiv>
      <Protect permission="org:blog:fullperms"
      fallback=
      {
          <p>You do not have permission to delete or edit posts.</p>
      }
      >
        <button onClick={() => handler(id.id)} className="px-2 mx-2 bg-mocha-900 hover:bg-mocha-700 rounded transition"><h1 className="text-mocha-100">Delete Blog</h1></button>
        <Link href={`/Blogs/${id.id}/EditBlog`}><button className="px-2 mx-2 bg-mocha-500 hover:bg-mocha-600 rounded transition"><h1>Edit Blog</h1></button></Link>
      </Protect>  
    </BoxDiv>

  )
}

export function TransitionUp(
  {children} : {children: React.ReactNode}) {
  return (
    <AnimatePresence>
      <motion.div
      initial={{y: 100, opacity: 0}}
      animate={{y: 0, opacity: 1}}
      exit={{y: 100, opacity: 0}}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

export function HoverUp(
  {children} : {children: React.ReactNode}) {
  return (
    <motion.div
    whileHover={{y: -10}}
    >
      {children}
    </motion.div>
  )
}

export function BoxDiv(
  {children} : {children: React.ReactNode}
) {
  return (
    <div className="box-border px-5">
      <div className="m-5 p-10 mx-auto bg-mocha-100 transition-all justify-center rounded max-w-[90rem] min-w-[70rem] ">
        {children}
      </div>
    </div>
  )
}

export function BlogsBoxDiv(
  {children} : {children: React.ReactNode}
) {
  return (
    <div className="box-border px-5">
      <div className="m-5 p-10 mx-auto grid grid-cols-3 gap-10 bg-mocha-100 transition-all justify-center rounded max-w-[90rem] min-w-[70rem] ">
        {children}
      </div>
    </div>
  )
}

export function Pagination(
  {currentPage, totalPages, handler} : 
  {currentPage: number, totalPages: number, handler: (updateCurrentPage: number) => void}
) {
  return(
    <div className="flex flex-row items-center mx-auto justify-center">
      <button onClick={() => handler(currentPage-1)} className="bg-mocha-400 p-5 mx-5 hover:bg-mocha-500 transition rounded-lg">Back</button>
      <p className="p-5 mx-5 transition rounded-lg">{currentPage} / {totalPages}</p>
      <button onClick={() => handler(currentPage+1)} className="bg-mocha-400 p-5 mx-5 hover:bg-mocha-500 transition rounded-lg">Next</button>
    </div>  
  )
}