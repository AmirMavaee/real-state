import User from "@/models/User";
import { verifyPassword } from "@/utils/auth";
import NextAuth from "next-auth"
import connectDB from "@/utils/connectDB";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  session: { strategy: "jwt" },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        try {
          await connectDB();
        } catch (err) {
          throw new Error("مشکلی در سرور رخ داده است");
        }

        const {email , password} = credentials;

        if(!email || !password){
            throw new Error("لطفا مقادیر صحیح وارد کنید")
        }

        const user = await User.findOne({email});

        if(!user){
            throw new Error("حساب کاربری وجود ندارد لطفا ثبت نام کنید")
        }

        const isvalid = await verifyPassword(password , User.password);

        if(!isvalid){
            throw new Error("ایمیل یا حساب کاربری اشتباه است");
        }

        return{email}
      },
    }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };