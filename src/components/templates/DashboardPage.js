"use client";
import { yekanBakh } from "@/utils/fonts";
import Loader from "../modules/Loader";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import styles from "./DashboardPage.module.css";

function DashboardPage({ date , email }) {
  const [loading, setLoading] = useState(false);
  const [isDisable, setIsDisable] = useState(true);
  const [newPass, setNewPass] = useState({
    password: "",
    rePassword: "",
  });
  const changeHandler = async () => {
    const { password, rePassword } = newPass;
    if (!isDisable) {
      if (password === rePassword) {
        if (confirm("آیا رمز عبور تغییر پیدا کند ؟")) {
          setLoading(true);
          const res = await fetch("api/auth/updatePassword", {
            method: "POST",
            body: JSON.stringify({ password, email }),
            headers: { "Content-Type": "application/json" },
          });
          const data = await res.json();
          setLoading(false);
          setNewPass({
            password: "",
            rePassword: "",
          });
          toast.success(data.message);
        }
      } else {
        toast.error("رمز عبور با تکرار آن برابر نمی باشد");
      }
    }
    setIsDisable(false);
  };

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setNewPass({ ...newPass, [name]: value });
  };

  return (
    <div className={styles.container}>
      <div>
        <h3>سلام 🖐</h3>
        <p>آگهی خود را ثبت کنید تا هزاران نفر آن را ببینند</p>
      </div>

      <div>
        {loading ? (
          <Loader />
        ) : (
          <button className={yekanBakh.className} onClick={changeHandler}>
            {isDisable ? "تغییر رمز عبور" : "ذخیره"}
          </button>
        )}

        <input
          className={yekanBakh.className}
          type="password"
          name="password"
          value={newPass.password}
          placeholder="رمز عبور جدید"
          disabled={isDisable}
          onChange={inputHandler}
        />
        <input
          className={yekanBakh.className}
          type="password"
          name="rePassword"
          value={newPass.rePassword}
          placeholder="تکرار رمز عبور جدید"
          disabled={isDisable}
          onChange={inputHandler}
        />
      </div>

      <div className={styles.createdAt}>
        <div>
          <p>تاریخ عضویت : </p>
          <span>
            {new Date(date).toLocaleDateString("fa-IR")}
          </span>
        </div>
        <div>
          <p>تاریخ ثبت آخرین آگهی : </p>
          <span>
            {new Date(date).toLocaleDateString("fa-IR")}
          </span>
        </div>
      </div>
      <span>
        <Toaster />
      </span>
    </div>
  );
}

export default DashboardPage;
