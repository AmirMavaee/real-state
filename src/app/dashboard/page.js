import User from '@/models/User';
import connectDB from '@/utils/connectDB';
import { getServerSession } from 'next-auth'
import React from 'react'
import DashboardPage from '../../components/templates/DashboardPage'
import { authOptions } from '../api/auth/[...nextauth]/route'

async function dashboard() {
  await connectDB();
  const session = await getServerSession(authOptions);
  const user = await User.findOne({ email : session.user.email})
  return (
    <DashboardPage date={user.createdAt}/>
  )
}

export default dashboard