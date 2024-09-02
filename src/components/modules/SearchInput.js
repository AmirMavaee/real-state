import { yekanBakh } from "@/utils/fonts";
import React from "react";
import styles from "./SearchInput.module.css";

function SearchInput({ options, data, onchange, name, type, placeHolder }) {
  return (
    <>
      {options ? (
        <select
          onChange={onchange}
          value={data[name]}
          className={`${yekanBakh.className} ${styles.input}`}
          name={name}
        >
          {options.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      ) : (
        <input
          name={name}
          type={type}
          onChange={onchange}
          value={data[name]}
          className={`${yekanBakh.className} ${styles.input}`}
          placeholder={placeHolder}
        />
      )}
    </>
  );
}

export default SearchInput;
