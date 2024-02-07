"use client"

import { Blog, Pageination, TransitionUp } from "@/_components/ClientBlog";
import { GetArrayBlogs } from "../api/Blog/route";
import { useEffect, useState } from "react";
import { BlogPost } from "@prisma/client";

export default function Page() {
    const [Blogs, setBlogs] = useState([])
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
            <div className="m-5 p-10 bg-mocha-100 transition-all justify-center rounded" >
                <h1 className="text-lg font-bold text-right text-mocha-1000">Latest Blogs</h1>
            </div>

            <div className="m-5 p-10 grid grid-cols-3 gap-10 bg-mocha-100 transition-all justify-center rounded">
                {currentItems.map((Blogs: BlogPost) => 
                    <Blog key={Blogs.id} {...Blogs} />
                )}
            </div>

            <div className="m-5 p-10 bg-mocha-100 transition-all rounded" >
                <Pageination 
                    totalItems={Blogs.length}
                    itemsPerPage={itemsPerPage}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    />
            </div>

        </TransitionUp> 
        </>
    )
}