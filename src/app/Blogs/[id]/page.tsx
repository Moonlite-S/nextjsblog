import { prisma } from "@/db"

export default async function Page({ params } : {params: {id: string}}) {
    const blog = await prisma.blogPost.findUnique({where: {id: params.id}})
    return(
        <>
        <div className="m-5 p-10 bg-mocha-100 transition-all justify-center rounded" >
            <h1>{blog.title}</h1>
        </div>
        </>
    )
}