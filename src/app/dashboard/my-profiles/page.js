import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import MyProfilesPage from '@/components/templates/MyProfilesPage';
import User from '@/models/User';
import connectDB from '@/utils/connectDB';
import { getServerSession } from 'next-auth';
import React from 'react'

async function MyProfiles() {
    await connectDB();
    const session = await getServerSession(authOptions);
    const [user] = await User.aggregate([{
        $match : {email : session.user.email}
    },{
        $lookup:{
            from : "profiles",
            foreignField : "userId",
            localField : "_id",
            as : "profiles"
        }
    }]);
  
    return (
       <MyProfilesPage profiles={user.profiles} />
    );
}

export default MyProfiles