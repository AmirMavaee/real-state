"use client"
import React from 'react'
import styles from "./Buttons.module.css"
import { yekanBakh } from "@/utils/fonts";
import { useRouter } from 'next/navigation';


function Buttons({text , bgcolor , color , icon , route  , query}) {
  const router = useRouter();

  const clickHandler = () => {
    if(query){
      router.push({
        pathname : "/profiles" ,
        query : query
      })
    }
    else{
      router.push(route);
    }
  }

  return (
    <button className={`${yekanBakh.className} ${styles.button}`} onClick={clickHandler} style={{backgroundColor : bgcolor  , color : color}}>
        {text}
    </button>
  )
}

export default Buttons