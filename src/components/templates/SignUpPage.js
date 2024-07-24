import { yekanBakh } from "@/utils/fonts";
import Link from "next/link";
import React from "react";
import styles from "./SignUpPage.module.css";

function SignUpPage() {
  return (
    <>
      <div className={styles.form}>
        <h4>فرم ثبت نام</h4>
        <form>
          <label>ایمیل :</label>
          <input type="text" value="as" />
          <label>رمز عبور :</label>
          <input type="password" value="as" />
          <label>تکرار رمز عبور :</label>
          <input type="password" value="as" />
          <button className={yekanBakh.className} type="submit">
            ثبت نام
          </button>
        </form>
        <p>
          حساب کاربری دارید ؟<Link href="signin">ورود</Link>
        </p>
      </div>
    </>
  );
}

export default SignUpPage;
