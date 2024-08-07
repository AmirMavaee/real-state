import { Icon } from "@iconify-icon/react";
import Link from "next/link";
import React from "react";
import LogoutButton from "../modules/LogoutButton";
import styles from "./DashboardSidebar.module.css";

function DashboardSidebar({ children, role, email }) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.sidebar}>
          <Icon icon="ei:user" width="4rem" height="4rem" />
          {role === "ADMIN" ? "مدیر" : null}
          <p>{email}</p>
          <span></span>
          <Link href="/dashboard">حساب کاربری</Link>
          <Link href="/dashboard/my-profiles">آگهی های من</Link>
          <Link href="/dashboard/add">ثبت آگهی</Link>
          {role === "ADMIN" ? <Link href="/admin">در انتظار تایید</Link> : null}
          {<LogoutButton />}
        </div>
        <div className={styles.main}>{children}</div>
      </div>
    </>
  );
}

export default DashboardSidebar;
