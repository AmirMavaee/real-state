import User from "@/models/User";
import { hashPassword } from "@/utils/auth";
import connectDB from "@/utils/connectDB";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../[...nextauth]/route";

export async function POST(req) {
  try {
    await connectDB();

    const session = await getServerSession(authOptions);

    const { password } = await req.json();
    
    const hashPass = await hashPassword(password);

    await User.findOneAndUpdate(
      { email: session.user.email },
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
