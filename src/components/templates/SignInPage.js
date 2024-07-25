"use client";
import { yekanBakh } from "@/utils/fonts";
import Link from "next/link";
import React, { useState } from "react";
import styles from "./SignUpPage.module.css";
import { signIn } from "next-auth/react";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import Loader from "../modules/Loader";

function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const signinHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    setLoading(false);
    if (!res.error) {
      router.push("/");
    } else {
      toast.error(res.error);
    }
  };

  return (
    <>
      <div className={styles.form}>
        <h4>فرم ورود</h4>
        <form>
          <label>ایمیل :</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>رمز عبور :</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {loading ? (
           <Loader/>
          ) : (
            <>
              <button className={yekanBakh.className} type="submit" onClick={signinHandler}>
                ورود
              </button>
            </>
          )}
        </form>
        <p>
          حساب کاربری ندارید ؟<Link href="signup">ثبت نام</Link>
        </p>
        <Toaster />
      </div>
    </>
  );
}

export default SignInPage;
