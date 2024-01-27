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
          <div className='bg-blue-900 containter mx-auto'>
            <nav className='flex flex-row-reverse'>
              <div className='p-5 hover:bg-blue-700'>
                <Link href= "/" className='text-white'>Home</Link>
              </div>
              <div className='p-5 hover:bg-blue-600'>
                <Link href= "./Blogs" className='text-white'>Blogs</Link>
              </div>
              <div className='p-5 hover:bg-blue-600'>
                <Link href= "./AboutMe" className='text-white'>About Me</Link>
              </div>
            </nav>
          </div>

          <div>{children}</div>

        </body>
        </html>
      </>
    )
  }