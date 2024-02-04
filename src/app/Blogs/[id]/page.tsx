import { PictureBanner, BlogButtons } from "@/_components/ClientBlog"
import { prisma } from "@/db"

export default async function Page({ params } : {params: {id: string}}) {
    const blog = await prisma.blogPost.findUnique({where: {id: params.id}})
    const {title, body, picture, blogCreated} = blog
    return(
        <>
        <div className="m-5 bg-mocha-100 justify-center rounded" >
            <PictureBanner URL_String={picture}/>
            <div className="grid grid-cols-2">
                <h1 className="m-5 font-bold">{title}</h1>
                <h1 className="m-5 text-right">{blogCreated}</h1>
            </div>
        </div>
        
        <div className="m-5 p-10 bg-mocha-100 justify-center rounded" >
            <h1 className="msg-wrapper">{body}</h1>
        </div>
        
        <BlogButtons id={params.id}/>
        </>
    )
}

