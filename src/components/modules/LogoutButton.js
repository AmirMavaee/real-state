"use client";
import { yekanBakh } from "@/utils/fonts";
import { Icon } from "@iconify-icon/react";
import { signOut } from "next-auth/react";
import React from "react";
import styles from "./LogoutButton.module.css";

function LogoutButton() {
  return (
    <button className={`${styles.button} ${yekanBakh.className}`} onClick={() => signOut()}>
      <Icon icon="material-symbols:logout" width="1.5rem" height="1.5rem" />
      خروج
    </button>
  );
}

export default LogoutButton;
