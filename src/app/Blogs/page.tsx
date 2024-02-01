import { BlogPost } from "@prisma/client";
import { Blog } from "@/_components/ClientBlog";
import { GetBlogs } from "../../_components/route";

export default async function Page() {
    const Blogs = await GetBlogs()
    return(
        <>
        <div className="m-5 p-10 bg-mocha-100 transition-all justify-center rounded" >
            <h1 className="text-lg font-bold text-right text-mocha-1000">Latest Blogs</h1>
        </div>

        <div className="m-5 p-10 grid grid-cols-3 gap-10 bg-mocha-100 transition-all justify-center rounded" >
            {Blogs.map((blog: BlogPost) => 
                <Blog key={blog.id} {...blog} />
            )}
        </div>

        </>
    )
}