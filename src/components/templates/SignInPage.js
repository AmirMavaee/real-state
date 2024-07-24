import { yekanBakh } from "@/utils/fonts";
import Link from "next/link";
import React from "react";
import styles from "./SignUpPage.module.css";

function SignInPage() {
  return (
    <>
      <div className={styles.form}>
        <h4>فرم ورود</h4>
        <form>
          <label>ایمیل :</label>
          <input type="text" value="as" />
          <label>رمز عبور :</label>
          <input type="password" value="as" />

          <button className={yekanBakh.className} type="submit">
            ورود
          </button>
        </form>
        <p>
          حساب کاربری ندارید ؟<Link href="signup">ثبت نام</Link>
        </p>
      </div>
    </>
  );
}

export default SignInPage;
