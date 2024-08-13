import { sp } from "@/utils/replaceNumber";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./Card.module.css";
import Home from "../../../public/home.jpg";
import Villa from "../../../public/villa.jpg";
import Office from "../../../public/office.jpg";
import Apartment from "../../../public/appartment.jpg";

function Card({ data: { _id, category, title, location, price } }) {
  const imageObj = {
    villa: Villa,
    home: Home,
    office: Office,
    appartment: Apartment,
  };

  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Image src={imageObj[category]} width={0} height={0} alt={title} />
      </div>
      <div className={styles.content}>
        <p className={styles.title}>{title}</p>
        <p className={styles.location}>{location}</p>
        <span>{sp(price)} تومان </span>
        <Link href={`/buy-residentials/${_id}`}>مشاهده آگهی</Link>
      </div>
    </div>
  );
}

export default Card;
