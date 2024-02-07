import { GetArrayBlogs } from "@/app/api/Blog/route"
import { BlogPost } from "@prisma/client"
import { Blog } from "./ClientBlog"

export async function ShowBlogs(){
    const Blogs = await GetArrayBlogs()
    return(
        <div className="m-5 p-10 grid grid-cols-3 gap-10 bg-mocha-100 transition-all justify-center rounded">
        {Blogs.map((blog: BlogPost) => 
            <Blog key={blog.id} {...blog} />
        )}
    </div>
    )
}

