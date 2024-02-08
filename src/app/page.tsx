"use client"

import '../_styles/globals.css'
import { TransitionUp, Blog, HoverUp } from '@/_components/ClientBlog'
import { GetArrayBlogs } from './api/Blog/route'
import { BlogPost } from '@prisma/client'
import { Suspense, useEffect, useState } from 'react'
import Link from 'next/link'
import Loading from './loading'

export default function App() {
  const [Blogs, setBlogs] = useState([])

  useEffect(() => {
    async function fetchData() {
            const getBlogs = await GetArrayBlogs()
            setBlogs(getBlogs)        
    }
    fetchData()   
}, [])

  return (
    <>
    <TransitionUp>
      <div className='bg-cover h-[40rem]' style={{backgroundImage: "url('/coffe.jpg')"}}>
        <HoverUp>
          <h1 className='text-mocha-1000 text-5xl font-bold text-right drop-shadow-xl pt-10 pr-10 hover:drop-shadow-2xl transition'>
            Welcome,
          </h1>
        </HoverUp>
        <HoverUp>
          <h1 className='text-mocha-1000 text-6xl font-bold text-right drop-shadow-xl pr-10 pt-2 hover:drop-shadow-2xl transition'>
            have a nice stay
          </h1>
        </HoverUp>
        <HoverUp>
          <h1 className='text-mocha-1000 text-4xl font-bold text-right drop-shadow-xl pr-10 pt-4 hover:drop-shadow-2xl transition'>
            and a hot coffee
          </h1>
        </HoverUp>
      </div>

      <div className="m-5 p-10 bg-mocha-100 transition-all justify-center rounded">
        <p className='my-5'> 
          Even though it's just a normal and bland blog site, I would like to put some random things that will make this page burst with life.
        </p>
        <p className='my-5'>
          This is my first personal webpage project that I have made myself and I am very proud of it. I hope you enjoy your stay here reading all the random things I have to say. If you want to learn more about what I used to make this site, check out the about me page.
        </p>
        <p className='my-5'>
          Navigate through the site using the buttons up top or take a look at the latest blogs below.
        </p>
      </div>

      <div className='m-5 p-10 bg-mocha-100 transition-all justify-center rounded '>
        <h1 className='text-center font-bold text-2xl'> Latest Blogs: </h1>
        <div className="m-5 p-10 grid grid-cols-3 gap-10 bg-mocha-100 transition-all justify-center rounded " >
              {Blogs.reverse().slice(0, 3).map((blog: BlogPost) => 
                  <Blog key={blog.id} {...blog} />
              )}
        </div>
        <div className='flex flex-col '>
          <Link href="/Blogs" className='self-center'><button className='bg-mocha-400 text-mocha-1000 transition rounded p-2 m-5 hover:bg-mocha-500 ' >View All Blogs</button></Link>
        </div>
      </div>
    </TransitionUp>
    </>
  )
}