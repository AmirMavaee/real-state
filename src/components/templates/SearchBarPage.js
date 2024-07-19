import React, { useState } from "react";
import Buttons from "../modules/Buttons";
import SearchInput from "../modules/SearchInput";
import styles from "./SearchBarPage.module.css";

function SearchBarPage() {
  const property = {
    name: "propertyType",
    values: ["نوع ملک" , "ملک 1", "ملک 2", "ملک 3"],
  };
  const location = {
    name: "location",
    values: ["منطقه" , "منطقه 1", "منطقه 2", "منطقه 3"],
  };
  const [data, setData] = useState({
    keyword: "",
    propertyType: "",
    location: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  return (
    <div className={styles.container}>
      <Buttons text="جستجو" bgcolor="#0E2E50" color="#fff"/>
      <div className={styles.searchInputContainer}>
        <SearchInput
          name="keyword"
          onchange={changeHandler}
          data={data}
          type="text"
          placeHolder="عنوان مورد نظر خود را وارد کنید"
        />
        <SearchInput
          options={property}
          name="propertyType"
          onchange={changeHandler}
          data={data}
        />
        <SearchInput
          options={location}
          name="location"
          onchange={changeHandler}
          data={data}
        />
      </div>
    </div>
  );
}

export default SearchBarPage;
