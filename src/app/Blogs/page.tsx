"use client"

import { Blog, BlogsBoxDiv, BoxDiv, Pagination, TransitionUp } from "@/_components/ClientBlog";
import { GetBlogCount, GetPaginatedBlogs } from "../../api/Blog/blog";
import { useEffect, useState } from "react";
import { BlogPost } from "@prisma/client";

export default function Page() {
    const [Blogs, setBlogs] = useState<BlogPost>([])
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(0)
    const [isFullyLoaded, setIsFullyLoaded] = useState(false)

    const handler = (updateCurrentPage: number) => {
        if (updateCurrentPage < 1 || updateCurrentPage > totalPages)
            return
        setIsFullyLoaded(false)
        setCurrentPage(updateCurrentPage)
    }

    useEffect(() => {
        async function fetchData() {
                const getBlogs= await GetPaginatedBlogs(currentPage)
                const getTotalBlogs = await GetBlogCount()
                setBlogs(getBlogs)    
                setTotalPages(Math.ceil(getTotalBlogs / 6))
                setIsFullyLoaded(true)
        }
        fetchData()   
        console.log("On page: " + currentPage)
    }, [currentPage])

    return(
        <TransitionUp>
            <div className="h-[10rem] bg-cover bg-mocha-100 transition-all justify-center rounded" style={{backgroundImage: 'url("/coffee2.jpg")', backgroundPosition: "top", backgroundColor: "#000000"}}>
                <h1 className='text-mocha-100 text-5xl font-bold text-right drop-shadow-xl py-10 pr-10 hover:drop-shadow-2xl transition'>
                Recent Blogs
                </h1>
            </div>

            <BlogsBoxDiv>
            {isFullyLoaded ? 
                Blogs.map((Blogs: BlogPost) => 
                    <Blog key={Blogs.id} {...Blogs} />
                ) : <p>Loading...</p>}
            </BlogsBoxDiv>

            <BoxDiv>
                <Pagination currentPage={currentPage} totalPages={totalPages} handler={handler}/>
            </BoxDiv>
        </TransitionUp> 
    )
}