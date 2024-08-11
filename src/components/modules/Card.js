import { sp } from '@/utils/replaceNumber';
import Link from 'next/link';
import React from 'react'
import styles from "./Card.module.css"

function Card({ data: { _id , category, title, location, price } }) {
    // const icons = {
    //   villa:,
    //   apartment:
    //   store:,
    //   office: <GiOfficeChair />,
    // };
  
    return (
      <div className={styles.container}>
        {/* <div className={styles.icon}>{icons[category]}</div> */}
        <p className={styles.title}>{title}</p>
        <p className={styles.location}>
          {location}
        </p>
        <span>{sp(price)} تومان </span>
        <Link href={`/buy-residentials/${_id}`}>مشاهده آگهی
        </Link>
      </div>
    );
  }
  
  export default Card;
  