import React, { useState } from "react";
import Buttons from "../modules/Buttons";
import SearchInput from "../modules/SearchInput";
import styles from "./SearchBarPage.module.css";

function SearchBarPage() {
  const property = {
    name: "propertyType",
    values: ["نوع ملک" , "ملکملک 1", "ملکملکملک 2", "ملکملکملکملک 3"],
  };
  const location = {
    name: "location",
    values: ["منطقه" , "منطقهمنطقه 1", "منطقهمنطقه 2", "منطقهمنطقهمنطقه 3"],
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
      <SearchInput
          name="keyword"
          onchange={changeHandler}
          data={data}
          type="text"
          placeHolder="عنوان مورد نظر"
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
  );
}

export default SearchBarPage;
