"use client"

import { PictureBanner, BlogButtons, TransitionUp, BoxDiv } from "@/_components/ClientBlog"
import { GetBlog } from "@/app/api/Blog/route"
import Loading from "@/app/loading"
import { BlogPost } from "@prisma/client"
import { Suspense, useEffect, useState } from "react"

export default function Page({ params } : {params: {id: string}}) {
    const [Blog, setBlog] = useState<BlogPost>({})
    const {title, body, picture, blogCreated} = Blog

    useEffect(() => {
        async function fetchData() {
            const getBlog = await GetBlog(params.id)
            setBlog(getBlog)
        }
        fetchData()
    }, [params.id])

    return(
        <TransitionUp>
        <Suspense fallback={<Loading />}>
            <div className="box-border px-5">
                <div className="m-5 mx-auto bg-mocha-100 justify-center rounded max-w-[90rem] min-w-[70rem]" >
                    <PictureBanner URL_String={picture}/>
                    <div className="grid grid-cols-2">
                        <h1 className="m-5 font-bold">{title}</h1>
                        <h1 className="m-5 text-right">{blogCreated}</h1>
                    </div>
                </div>
            </div>
        </Suspense>
        
        <Suspense fallback={<Loading />}>
            <BoxDiv>
                <h1 className="msg-wrapper">{body}</h1>
            </BoxDiv>
        </Suspense>

        <BlogButtons id={params.id}/>
        </TransitionUp>
    )
}

