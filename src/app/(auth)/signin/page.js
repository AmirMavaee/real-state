import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import SignInPage from '@/components/templates/SignInPage'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation';
import React from 'react'

async function SignIn() {
  const session = await getServerSession(authOptions);

  if(session){
    redirect("/")
  }
  
  return (
    <>
        <SignInPage/>
    </>
  )
}

export default SignIn