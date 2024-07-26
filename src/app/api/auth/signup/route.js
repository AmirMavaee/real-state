import User from "@/models/User";
import { hashPassword } from "@/utils/auth";
import connectDB from "@/utils/connectDB";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {

    await connectDB();

    const {email , password} = await req.json();
    if(!email || !password){
        return NextResponse.json({error :"لطفا مقادیر صحیح وارد کنید"} , {status : 422})
    }

    const existingUser = await User.findOne({email});

    if(existingUser){
        return NextResponse.json({error : "کاربر وجود دارد لطفا وارد شوید"} , {status : 422});
    }

    const HashPassword = await hashPassword(password);

    const newUser = await User.create({
        email : email , 
        password : HashPassword,
    })

    console.log(newUser);

    return NextResponse.json({message : "حساب کاربری ایجاد شد"})

  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { error: "مشکلی در سرور رخ داده است" },
      { status: 500 }
    );
  }
}
