import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import SignUpPage from '@/components/templates/SignUpPage'
import { getServerSession } from 'next-auth';
import React from 'react'

async function SignUp() {
  const session = await getServerSession(authOptions);

  if(session){
    redirect("/")
  }
  
  return (
    <>
        <SignUpPage/>
    </>
  )
}

export default SignUp