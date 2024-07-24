import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./PropertyTypeDetail.module.css";

function PropertyTypeDetail({ icon, text, number }) {
  return (
    <Link className={styles.link} href="#">
      <div className={styles.container}>
        <div className={styles.image}>
          <Image src={icon} alt={text} />
        </div>
        <h3 className={styles.text}>{text}</h3>
        <h3 className={styles.number}>{number} عدد</h3>
      </div>
    </Link>
  );
}

export default PropertyTypeDetail;
