import User from '@/models/User';
import { getServerSession } from 'next-auth'
import React from 'react'
import DashboardPage from '../../components/templates/DashboardPage'
import { authOptions } from '../api/auth/[...nextauth]/route'

async function dashboard() {
  const session = await getServerSession(authOptions);
  const user = await User.findOne({ email : session.user.email})
  return (
    <DashboardPage userData={user}/>
  )
}

export default dashboard