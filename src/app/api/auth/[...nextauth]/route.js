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
        const { email, password } = credentials;
        try {
          await connectDB();
        } catch (error) {
          throw new Error("مشکل در اتصال به سرور");
        }


        if (!email || !password) {
          throw new Error("مقادیر را به درستی وارد کنید");
        }

        const existUser = await User.findOne({ email });

        if (!existUser) {
          throw new Error("حساب کاربری وجود ندارد لطفا گزینه ثبت نام را بزنید");
        }

        const isValid = await verifyPassword(password, existUser.password);

        if (!isValid) {
          throw new Error("ایمیل یا رمز عبور اشتباه است");
        }

        return { email };
      },
    }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
