import { auth } from "@clerk/nextjs"

export function VerifyUser() {
    const { userId } : { userId: string | null } = auth()
    
    if (!userId) {
      // Maybe instead of this, I can just redirect them to a auth error page
      throw new Error("Not logged in. You shouldn't be allowed here.")
    }
  
    else
      return
  }