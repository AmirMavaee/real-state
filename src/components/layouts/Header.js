"use client";
import Image from "next/image";
import React, { useState } from "react";
import styles from "./Header.module.css";
import logo from "../../../public/logo.png";
import Link from "next/link";
import Buttons from "../modules/Buttons";
import { Icon } from "@iconify-icon/react";

function Header() {
  const [show, setShow] = useState(false);
  const showHandler = () => {
    setShow((prevCount) => !prevCount);
  };

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Image src={logo} width="130" height="115" alt="لوگو" />
      </div>
      <div className={styles.menuContainer}>
        <div className={styles.menu}>
          <ul className={show ? styles.show : ""}>
            <li>
              <Link href="#">خانه</Link>
            </li>
            <li>
              <Link href="#">آگهی ها</Link>
            </li>
            <li>
              <Link href="#">تماس با ما</Link>
            </li>
            <li>
              <Link href="#">درباره طراح سایت</Link>
            </li>
            <li>
              <Buttons text="ورود" bgcolor="#00B98E" color="#fff" />
            </li>
          </ul>
        </div>
        <span className={styles.divider}></span>
        <div className={styles.buttonContainer}>
          <Buttons text="ورود" bgcolor="#00B98E" color="#fff" />
          <Buttons text="ثبت نام" bgcolor="#fff" color="#000" />
        </div>
        <div className={styles.resMenuButton}>
          <button onClick={showHandler}>
            <Icon
              icon="ic:round-menu"
              width="38px"
              height="38px"
              style={{ color: "#000" }}
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
