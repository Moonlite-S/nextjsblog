import { PictureBanner } from "@/_components/ClientBlog"
import { DeleteBlog } from "@/_components/route"
import { prisma } from "@/db"
import Link from "next/link"

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
        
        <div className="m-5 p-5 bg-mocha-100 rounded" >
            <button className="px-2 mx-2 bg-mocha-900 hover:bg-mocha-700 rounded transition"><h1 className="text-mocha-100">Delete Blog</h1></button>
            <Link href={`/Blogs/${params.id}/EditBlog`}><button className="px-2 mx-2 bg-mocha-500 hover:bg-mocha-600 rounded transition"><h1>Edit Blog</h1></button></Link>
        </div>
        </>
    )
}