import Link from 'next/link'
import '../_styles/globals.css'
import { ClerkProvider, OrganizationSwitcher, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

function NavBar(){
  return(
    <>
    <div className='bg-mocha-100 containter mx-auto'>
      <nav className='flex flex-row-reverse'>

        <SignedIn>
        <div className="px-5 py-4 hover:bg-mocha-400 transition">
            <UserButton 
            appearance={{
              elements:{
                userButtonPopoverCard: "bg-mocha-100",
                userButtonPopoverFooter: "hidden",
              }
            }}
            afterSignOutUrl="/"/>
        </div>
        <div className='hover:bg-mocha-400 transition'>
          <OrganizationSwitcher 
          appearance={{
            elements:{
              rootBox: "pt-4 px-2",
              organizationSwitcherPopoverCard: "bg-mocha-100",
              organizationSwitcherPopoverActionButton: "hidden",
              organizationSwitcherPopoverFooter: "hidden",
            }
          }}
          hidePersonal={true}/>
        </div>
        </SignedIn>

      <Link href= "/" className='text-white'> <div className='p-5 hover:bg-mocha-400 duration-100 ease-in'><h1>Home</h1></div> </Link>
        <Link href= "/Blogs" className='text-white'> <div className='p-5 hover:bg-mocha-400 duration-100 ease-in'><h1>Blogs</h1></div></Link>
        <Link href= "/AboutMe" className='text-white'> <div className='p-5 hover:bg-mocha-400 duration-100 ease-in'><h1>About Me</h1></div></Link>
        <Link href= "/Login" className='text-white'> <SignedOut><div className='p-5 hover:bg-mocha-400 duration-100 ease-in'><h1>Log In</h1></div></SignedOut></Link>
        <Link href= "/CreateBlog" className='text-white'> <SignedIn><div className='p-5 hover:bg-mocha-400 duration-100 ease-in'><h1>Create Blog</h1></div></SignedIn></Link>

      </nav>
  </div>
  </>
  )
}

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
    <ClerkProvider>
      <html>
        <body>
          <NavBar /> 

          <div>{children}</div>
  
        </body>
      </html>
    </ClerkProvider>
    )
  }