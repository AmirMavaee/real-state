import User from "@/models/User";
import { hashPassword } from "@/utils/auth";
import connectDB from "@/utils/connectDB";
import { NextResponse } from "next/server";

export async function mongodb(req) {
  try {
    await connectDB();

    const { password , email } = await req.json();
    
    const hashPass = await hashPassword(password);

    await User.findOneAndUpdate(
      { email: email },
      { password: hashPass }
    );

    return NextResponse.json(
      { message: "رمز عبور با موفقیت تغییر پیدا کرد" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "مشکلی در سرور رخ داده است" },
      { status: 500 }
    );
  }
}
