import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"



const LoginPage = () => {
    const { data: session } = useSession()

  return (
    <div>LoginPage

<button onClick={() => signIn()}>Sign in With Google</button>

    </div>
  )
}

export default LoginPage