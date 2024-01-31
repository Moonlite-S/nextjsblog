import Link from 'next/link'
import '../_styles/globals.css'

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <>
      <html>
        <body>
          <div className='bg-mocha-100 containter mx-auto'>
            <nav className='flex flex-row-reverse'>
            <Link href= "/" className='text-white'> <div className='p-5 hover:bg-mocha-400 duration-100 ease-in'><h1>Home</h1></div> </Link>
            <Link href= "/Blogs" className='text-white'> <div className='p-5 hover:bg-mocha-400 duration-100 ease-in'><h1>Blogs</h1></div></Link>
            <Link href= "/AboutMe" className='text-white'> <div className='p-5 hover:bg-mocha-400 duration-100 ease-in'><h1>About Me</h1></div></Link>
            <Link href= "/LogIn" className='text-white'> <div className='p-5 hover:bg-mocha-400 duration-100 ease-in'><h1>Log In</h1></div></Link>
            <Link href= "/CreateBlog" className='text-white'> <div className='p-5 hover:bg-mocha-400 duration-100 ease-in'><h1>Create Blog</h1></div></Link>
            </nav>
          </div>

          <div>{children}</div>

        </body>
        </html>
      </>
    )
  }