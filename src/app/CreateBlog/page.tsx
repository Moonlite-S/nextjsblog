"use client"

import { CreateBlog } from "@/api/Blog/blog";
import { BoxDiv, TransitionUp } from "@/_components/ClientBlog";

export default function Pages(){
    return (
        <TransitionUp>
        <BoxDiv>
            <h1 className="py-2 border-b-2 border-mocha-700">Today's Date: {new Date().toLocaleDateString()} </h1>
            <form className="py-2 flex flex-col" action={CreateBlog} >
                <label className="text-mocha-1000" htmlFor="title">Title</label>
                <input type="text" name="title" className="bg-mocha-400 text-mocha-900 w-[50%] border-2 border-mocha-900 peer" required/>

                <label className="text-mocha-1000" htmlFor="picture">Picture Banner URL</label>
                <input type="text" name="picture"className="bg-mocha-200 text-mocha-900 border-2 w-[50%] border-mocha-900" required/>

                <label className="text-mocha-1000" htmlFor="body">Body Text</label>
                <textarea name="body" className="bg-mocha-400 text-mocha-900 h-[20rem] border-2 border-mocha-900 " required/>

                <button type="submit" className="border-2 border-mocha-900 bg-mocha-300 py-2 my-5 hover:bg-mocha-500 transition">Create Blog</button>
            </form>
        </BoxDiv>
        </TransitionUp>
    )
}