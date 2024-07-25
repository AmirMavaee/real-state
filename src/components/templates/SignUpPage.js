"use client";
import { yekanBakh } from "@/utils/fonts";
import Link from "next/link";
import React, { useState } from "react";
import styles from "./SignUpPage.module.css";
import toast, { Toaster } from "react-hot-toast";
import Loader from "../modules/Loader";
import { useRouter } from "next/navigation";

function SignUpPage() {
  const [info, setInfo] = useState({
    email: "",
    password: "",
    rePassword: "",
  });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setInfo((pervInfo) => ({ ...pervInfo, [name]: value }));
  };

  const signupHandler = async (e) => {
    e.preventDefault();
    const { email, password, rePassword } = info;
    if (password === rePassword) {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      setLoading((prevValue) => !prevValue);
      toast.success(data.message);
      setLoading((prevValue) => !prevValue);
      router.push("/signin")
    } else {
      toast.error("رمز عبور و تکرار آن صحیح نمی باشد");
      setLoading((prevValue) => !prevValue);

      setInfo((prevInfo) => ({ ...prevInfo, password: "", rePassword: "" }));
      setLoading((prevValue) => !prevValue);
    }
  };

  return (
    <>
      <div className={styles.form}>
        <h4>فرم ثبت نام</h4>
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
          <label>تکرار رمز عبور :</label>
          <input
            type="password"
            value={info.rePassword}
            name="rePassword"
            onChange={changeHandler}
          />
          {loading ? (
            <Loader />
          ) : (
            <button
              className={yekanBakh.className}
              type="submit"
              onClick={signupHandler}
            >
              ثبت نام
            </button>
          )}
        </form>
        <p>
          حساب کاربری دارید ؟<Link href="signin">ورود</Link>
        </p>
        <Toaster position="top-center" reverseOrder={false} />
      </div>
    </>
  );
}

export default SignUpPage;
