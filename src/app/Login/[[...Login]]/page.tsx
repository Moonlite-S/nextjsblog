import { SignIn, SignedOut } from '@clerk/nextjs'
import React from 'react'

const Page = () => {
  return (
    <>
    <SignedOut>
      <SignIn appearance={
        {
          elements:{
            rootBox: "mx-auto p-5",
            formButtonPrimary: "bg-mocha-300 hover:bg-mocha-500 transition-all",
            socialButtonsBlockButton: "bg-mocha-300 hover:bg-mocha-800 transition-all",
            socialButtonsBlockButtonText: "text-mocha-900",
            card: "bg-mocha-100",
            headerTitle: "text-mocha-1000",
            formFieldLabel: "text-mocha-1000",
            formFieldInput: "bg-mocha-400 text-mocha-900 border-2 border-mocha-900",
          }
        }
      }
      signUpUrl='/SignUp'/> 
    </SignedOut>
    </>
  )
}
export default Page