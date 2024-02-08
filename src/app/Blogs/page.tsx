"use client"

import { Blog, BlogsBoxDiv, BoxDiv, Pageination, TransitionUp } from "@/_components/ClientBlog";
import { GetArrayBlogs } from "../api/Blog/route";
import { Suspense, useEffect, useState } from "react";
import { BlogPost } from "@prisma/client";

export default function Page() {
    const [Blogs, setBlogs] = useState<BlogPost>([])
    const [currentPage, setCurrentPage] = useState(1)
    const [itemsPerPage, setItemsPerPage] = useState(6)

    const lastItemIndex = currentPage * itemsPerPage
    const firstItemIndex = lastItemIndex - itemsPerPage
    const currentItems = Blogs.slice(firstItemIndex, lastItemIndex)

    useEffect(() => {
        async function fetchData() {
                const getBlogs= await GetArrayBlogs()
                setBlogs(getBlogs)        
        }
        fetchData()   
    }, [])
    return(
        <>
        <TransitionUp>
            <div className="h-[10rem] bg-cover bg-mocha-100 transition-all justify-center rounded" style={{backgroundImage: 'url("/coffee2.jpg")', backgroundPosition: "top", backgroundColor: "#000000"}}>
                <h1 className='text-mocha-100 text-5xl font-bold text-right drop-shadow-xl py-10 pr-10 hover:drop-shadow-2xl transition'>
                Recent Blogs
                </h1>
            </div>

            <BlogsBoxDiv>
                <Suspense fallback={<div>Loading...</div>} key={Blogs.id}>
                {currentItems.map((Blogs: BlogPost) => 
                    <Blog key={Blogs.id} {...Blogs} />
                )}
                </Suspense>
            </BlogsBoxDiv>

            <BoxDiv>
                <Pageination 
                    totalItems={Blogs.length}
                    itemsPerPage={itemsPerPage}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    />
            </BoxDiv>
        </TransitionUp> 
        </>
    )
}