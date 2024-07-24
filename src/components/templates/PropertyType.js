import React from "react";
import PropertyTypeDetail from "../modules/PropertyTypeDetail";
import styles from "./PropertyType.module.css";

import apartment from "../../../public/icon-apartment.png";
import villa from "../../../public/icon-villa.png"
import home from "../../../public/icon-house.png"
import office from "../../../public/icon-housing.png"

function PropertyType() {
    const PropertyName = ["آپارتمان" , "ویلا" , "خانه" , "دفتر"];
    const propertyIcon = [apartment , villa , home , office]
  return (
    <div className={styles.container}>
      <h1>نوع ملک</h1>
      <p>برای پیدا کردن ملک دلخواه خود، یکی از گزینه‌های زیر را انتخاب کنید:</p>
      <section>
        {
            PropertyName.map((item , index) => 
                <PropertyTypeDetail icon={propertyIcon[index]} text={item} number="123" /> 
            )
        }
      </section>
    </div>
  );
}

export default PropertyType;
