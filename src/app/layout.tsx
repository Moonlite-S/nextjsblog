"use client"

import '../_styles/globals.css'
import { AnimatePresence, motion, useAnimate, usePresence } from "framer-motion"
import Link from 'next/link'
import { ClerkProvider, OrganizationSwitcher, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { useEffect } from 'react'


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
  }) 
  {
    const [scope, animate] = useAnimate()
    const [isPresent, safeToRemove] = usePresence()

    useEffect(() => {
      if (isPresent) {
        const enterAnim = async () => {
          await animate(scope.current, {opacity: [0, 1]}, {ease: "easeInOut", duration: 0.5})
          await animate(scope.current, {y: [100, 0]}, {ease: "easeInOut", duration: 1})
        }
        enterAnim()
      } else {
        const exitAnim = async () => {
          await animate(scope.current, {y: [0, 100]}, {ease: "easeInOut", duration: 1})
          await animate(scope.current, {opacity: [1, 0]}, {ease: "easeInOut", duration: 0.5})
          safeToRemove()
        }
        exitAnim()
     }
    }, [isPresent])

    return (
    <ClerkProvider>
      <html>
        <body>
          <NavBar /> 
          <AnimatePresence>
            <div ref={scope}>{children}</div>
          </AnimatePresence>
        </body>
      </html>
    </ClerkProvider>
    )
  }