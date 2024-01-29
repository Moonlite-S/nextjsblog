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
            <Link href= "/" className='text-white'> <div className='p-5 hover:bg-mocha-200 duration-100 ease-in'>Home</div> </Link>
            <Link href= "/Blogs" className='text-white'> <div className='p-5 hover:bg-mocha-200 duration-100 ease-in'>Blogs</div></Link>
            <Link href= "/AboutMe" className='text-white'> <div className='p-5 hover:bg-mocha-200 duration-100 ease-in'>About Me</div></Link>
            </nav>
          </div>

          <div>{children}</div>

        </body>
        </html>
      </>
    )
  }