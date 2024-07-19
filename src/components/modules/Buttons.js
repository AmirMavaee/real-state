import React from 'react'
import styles from "./Buttons.module.css"
import { yekanBakh } from "@/utils/fonts";


function Buttons({text , bgcolor , color , icon , route}) {
  return (

    <button className={`${yekanBakh.className} ${styles.button}`} style={{backgroundColor : bgcolor  , color : color}}>
        {text}
    </button>
  )
}

export default Buttons