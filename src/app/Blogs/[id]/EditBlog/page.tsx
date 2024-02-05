import { UpdateBlog } from "@/app/api/Blog/route"
import { prisma } from "@/db"
import { BlogPost } from "@prisma/client"

export default async function Page({ params } : {params: {id: string}}) {
    const Blog: BlogPost = await prisma.blogPost.findUnique({where: {id: params.id}})
    const { title, picture, body } = Blog
    const handler = UpdateBlog.bind(null, params.id)
    
    return(
        <>
        <div className="m-5 p-10 bg-mocha-100">
            <form className="flex flex-col" action={handler} >
                <label className="text-mocha-1000" htmlFor="title">Title</label>
                <input type="text" defaultValue={title} name="title" className="bg-mocha-400 text-mocha-900 w-[50%] border-2 border-mocha-900 peer" />

                <label className="text-mocha-1000" htmlFor="picture">Picture Banner URL</label>
                <input type="text" defaultValue={picture} name="picture"className="bg-mocha-200 text-mocha-900 border-2 w-[50%] border-mocha-900" />

                <label className="text-mocha-1000" htmlFor="body">Body Text</label>
                <textarea name="body" defaultValue={body} className="bg-mocha-400 text-mocha-900 h-[20rem] border-2 border-mocha-900 " />

                <button type="submit" className="border-2 border-mocha-900 bg-mocha-300 py-2 my-5 hover:bg-mocha-500 transition">Update Blog</button>

            </form>
        </div>
        </>
    )
}