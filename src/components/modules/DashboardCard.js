"use client"
import { yekanBakh } from '@/utils/fonts';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import Card from './Card';
import styles from "./DashboardCard.module.css"
import Loader from './Loader';

function DashboardCard({ data }) {
    const router = useRouter();
    const [isDelete, setIsDelete] = useState(false);
    const editHandler = () => {
      router.push(`/dashboard/my-profiles/${data._id}`);
    };
    const deleteHandler = async () => {
      setIsDelete(true);
      const res = await fetch(`/api/profile/delete/${data._id}`, {
        method: "DELETE",
      });
      const result = await res.json();
      setIsDelete(false);
      if (result.error) {
        toast.error(result.error);
      } else {
        toast.success(result.message);
        router.refresh();
      }
    };
    return (
      <div className={styles.container}>
        <Card data={data}/>
        <div className={styles.main}>
          {isDelete ? (
            <Loader />
          ) : (
            <>
              <button className={yekanBakh.className} onClick={editHandler}>ویرایش</button>
              <button className={yekanBakh.className} onClick={deleteHandler}>حذف</button>
            </>
          )}
        </div>
        <Toaster />
      </div>
    );
}

export default DashboardCard