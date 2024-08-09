import React from 'react'
import styles from "./RadioList.module.css"

function RadioList({ profileData, setProfileData }) {
    const { category } = profileData;

    const eValue = ["villa", "apartment", "store", "office"];
    const pValue = ["ویلا", "آپارتمان", "مغازه", "دفتر"];
  
    const changeHandler = (e) => {
      const { name, value } = e.target;
  
      setProfileData({
        ...profileData,
        [name]: value,
      });
    };
    return (
      <div className={styles.container}>
        <p>دسته بندی</p>
        <div className={styles.main}>
          {eValue.map((item, index) => (
            <div key={index}>
              <label htmlFor={item}>{pValue[index]}</label>
              <input
                type="radio"
                value={item}
                checked={category ===  item }
                id={item}
                name="category"
                onChange={changeHandler}
              />
            </div>
          ))}
        </div>
      </div>
    );
}

export default RadioList