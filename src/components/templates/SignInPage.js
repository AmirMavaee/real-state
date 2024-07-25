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
  const [info, setInfo] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setInfo((pervInfo) => ({ ...pervInfo, [name]: value }));
  };

  const signinHandler = async (e) => {
    e.preventDefault();
    const { email, password } = info;
    setLoading((prevValue) => !prevValue);
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    setLoading((prevValue) => !prevValue);
    if (res.error) {
      toast.error(res.error);
    } else {
      toast.success("ورود با موفقیت انجام شد");
      router.push("/")
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
            value={info.email}
            name="email"
            onChange={changeHandler}
          />
          <label>رمز عبور :</label>
          <input
            type="password"
            value={info.password}
            name="password"
            onChange={changeHandler}
          />

          {loading ? (
            <Loader />
          ) : (
            <button
              className={yekanBakh.className}
              type="submit"
              onClick={signinHandler}
            >
              ورود
            </button>
          )}
        </form>
        <p>
          حساب کاربری ندارید ؟<Link href="signup">ثبت نام</Link>
        </p>
        <Toaster position="top-center" reverseOrder={false} />
      </div>
    </>
  );
}

export default SignInPage;
