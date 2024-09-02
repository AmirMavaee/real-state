"use client";
import React, { useEffect, useState } from "react";
import Buttons from "./Buttons";
import SearchInput from "./SearchInput";
import styles from "./SearchBarPage.module.css";

function SearchBarPage({ provinces }) {

  const [data, setData] = useState({
    keyword: "",
    province: "",
    city: "",
  });

  const [allProvince , setAllProvince] = useState(["استان " , ...provinces])

  const [allCity , setAllCity] = useState(["شهر"]);


  useEffect(() => {
    const getCity = async ()=>{
      if(data.province){
        const res = await fetch(
          `https://iran-locations-api.ir/api/v1/fa/cities?state=${data.province}`
        );
        const city = await res.json();
        const filterName = city[0].cities.map(item => item.name);
        setAllCity(filterName)
      }
    }

    getCity();

  }, [data.province]);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const query = {
    name : "amir",
    last : "mavaee"
  }


  return (
    <div className={styles.container}>
      <Buttons text="جستجو" bgcolor="#0E2E50" color="#fff" query={query}/>
      <SearchInput
        name="keyword"
        onchange={changeHandler}
        data={data}
        type="text"
        placeHolder="عنوان مورد نظر"
      />
      <SearchInput
        options={allProvince}
        name="province"
        onchange={changeHandler}
        data={data}
      />
      <SearchInput
        options={allCity}
        name="city"
        onchange={changeHandler}
        data={data}
      />
    </div>
  );
}

export default SearchBarPage;
