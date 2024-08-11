import AddProfilePage from '@/components/templates/AddProfilePage';
import Profile from '@/models/Profile';
import connectDB from '@/utils/connectDB';
import React from 'react'

async function Edit({params : {profileId}}) {
    await connectDB();
    const profile = await Profile.findOne({_id : profileId});

    if(!profile) return <h3>مشکلی پیش آمده است ، لطفا دوباره امتحان کنید</h3>
    return (
        <AddProfilePage pageTitle="ویرایش آگهی" data={JSON.parse(JSON.stringify(profile))}/>
    );
}

export default Edit