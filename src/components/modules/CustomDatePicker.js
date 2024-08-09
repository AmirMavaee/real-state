import React from "react";
import styles from "./CustomDatePicker.module.css";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import "react-multi-date-picker/styles/colors/red.css";

function CustomDatePicker({ profileData, setProfileData }) {
  const dateHandler = (e) => {
    const date = new Date(e);
    setProfileData({
      ...profileData,
      constructionDate: date,
    });
  };
  return (
    <div className={styles.container}>
      <p>تاریخ ساخت</p>
      <DatePicker
        className="red"
        calendar={persian}
        locale={persian_fa}
        value={profileData.constructionDate}
        calendarPosition="bottom-right"
        onChange={dateHandler}
      />
    </div>
  );
}

export default CustomDatePicker;
