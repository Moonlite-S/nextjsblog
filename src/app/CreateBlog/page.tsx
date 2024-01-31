import { Blog, DeleteAllBlogs, createBlog, getBlogs } from "@/_components/blog";

export default function Pages(){
    return (
        <>
        <div className="m-5 p-10 bg-mocha-100 transition-all justify-center rounded">
            <form className="flex flex-col" action={createBlog}>
                <input type="text" name="title" placeholder="Title" className="bg-mocha-400 text-mocha-900" />
                <input type="text" name="picture" placeholder="Picture URL" className="bg-mocha-100 text-mocha-900" />
                <input type="text" name="body" placeholder="Body" className="bg-mocha-400 text-mocha-900" />
                <button type="submit">Create Blog</button>
                <button type="button" onClick={DeleteAllBlogs}>Delete All Blogs</button>
            </form>

        </div>
        </>
    )
}