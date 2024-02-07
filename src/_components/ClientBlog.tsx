"use client"

import Link from "next/link"
import { BlogPost } from "@prisma/client"
import { DeleteBlog, GetBlogs } from "../app/api/Blog/route"
import { Protect } from "@clerk/nextjs"
import { AnimatePresence, motion } from "framer-motion"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

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
      <Protect permission="org:blog:fullperms"
      fallback=
      {
          <p>You do not have permission to delete or edit posts.</p>
      }
      >
        <button onClick={() => DeleteBlog(id.id)} className="px-2 mx-2 bg-mocha-900 hover:bg-mocha-700 rounded transition"><h1 className="text-mocha-100">Delete Blog</h1></button>
        <Link href={`/Blogs/${id.id}/EditBlog`}><button className="px-2 mx-2 bg-mocha-500 hover:bg-mocha-600 rounded transition"><h1>Edit Blog</h1></button></Link>
      </Protect>  
    </div>

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

export function Pageination (
  {
    totalItems,
    itemsPerPage,
    currentPage,
    setCurrentPage 
  } : {
    totalItems: number,
    itemsPerPage: number,
    currentPage: number,
    setCurrentPage: any
  }
) {

  let pages = []
  for (let i = 1; i<=Math.ceil(totalItems/itemsPerPage); i++){
    pages.push(i)
  }

  const handleNextPage = () => {
    if (currentPage < pages.length){
      setCurrentPage(currentPage + 1)
    }
  }

  const handlePrevPage = () => {
    if (currentPage > 1){
      setCurrentPage(currentPage - 1)
    }
  }

  return(
    <Pagination className="">
      <PaginationContent className="">
        <PaginationItem >
          <PaginationPrevious onClick={() => handlePrevPage()} className="flex flex-row px-5">Previous</PaginationPrevious>
        </PaginationItem>

          {pages.map((page, idx) => (
            <PaginationItem
              key={idx}
              className={currentPage === page ? "bg-mocha-500 rounded-md px-5" : "px-5"}>

              <PaginationLink onClick={() => setCurrentPage(page)} className="relative top-2">{page}</PaginationLink>

            </PaginationItem>
          ))}

        <PaginationItem>
          <PaginationNext onClick={() => handleNextPage()} className="flex flex-row px-5">Next</PaginationNext>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}