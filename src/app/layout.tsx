import './globals.css'

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
                <a href= "/" className='text-white'>Home</a>
              </div>
              <div className='p-5 hover:bg-blue-600'>
                <a href= "./Blogs" className='text-white'>Blogs</a>
              </div>
              <div className='p-5 hover:bg-blue-600'>
                <a href= "./AboutMe" className='text-white'>About Me</a>
              </div>
            </nav>
          </div>

          <div>{children}</div>

        </body>
        </html>
      </>
    )
  }