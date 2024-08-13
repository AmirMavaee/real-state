"use client";
import { yekanBakh } from "@/utils/fonts";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import CustomDatePicker from "../modules/CustomDatePicker";
import Loader from "../modules/Loader";
import RadioList from "../modules/RadioList";
import TextInput from "../modules/TextInput";
import TextList from "../modules/TextList";
import styles from "./AddProfilePage.module.css";

function AddProfilePage({ pageTitle, data }) {
  const router = useRouter();

  const [profileData, setProfileData] = useState({
    title: "",
    description: "",
    location: "",
    phone: "",
    price: "",
    realState: "",
    constructionDate: new Date(),
    category: "",
    rules: [],
    amenities: [],
  });

  useEffect(() => {
    if (data) {
      setProfileData(data);
    }
  }, []);

  const [loading, setLoading] = useState();

  const submitHandler = async () => {
    setLoading(true);
    const res = await fetch("/api/profile", {
      method: "POST",
      body: JSON.stringify(profileData),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    setLoading(false);
    if (data.error) {
      toast.error(data.error);
    } else {
      toast.success(data.message);
      router.refresh();
      setProfileData({
        title: "",
        description: "",
        location: "",
        phone: "",
        price: "",
        realState: "",
        constructionDate: new Date(),
        category: "",
        rules: [],
        amenities: [],
      });
    }
  };

  const editHandler = async () => {
    setLoading(true);
    const res = await fetch("/api/profile", {
      method: "PATCH",
      body: JSON.stringify(profileData),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    setLoading(false);
    if (data.error) {
      toast.error(data.error);
    } else {
      toast.success(data.message);
      router.refresh();
    }
  };

  return (
    <div className={styles.container}>
      <h3>{pageTitle}</h3>
      <div className={styles.inputContainer}>
        <TextInput
          title="عنوان آگهی"
          name="title"
          profileData={profileData}
          setProfileData={setProfileData}
        />

        <TextInput
          title="شماره تماس"
          name="phone"
          profileData={profileData}
          setProfileData={setProfileData}
        />
        <TextInput
          title="قیمت (تومان)"
          name="price"
          profileData={profileData}
          setProfileData={setProfileData}
        />

        <TextInput
          title="بنگاه"
          name="realState"
          profileData={profileData}
          setProfileData={setProfileData}
        />

        <TextInput
          title="آدرس"
          name="location"
          profileData={profileData}
          setProfileData={setProfileData}
          textarea={true}
        />

        <TextInput
          title="توضیحات"
          name="description"
          profileData={profileData}
          setProfileData={setProfileData}
          textarea={true}
        />

        <TextList
          title="امکانات رفاهی"
          type="amenities"
          profileData={profileData}
          setProfileData={setProfileData}
        />
        <TextList
          title="قوانین"
          type="rules"
          profileData={profileData}
          setProfileData={setProfileData}
        />
        <RadioList profileData={profileData} setProfileData={setProfileData} />
        <CustomDatePicker
          profileData={profileData}
          setProfileData={setProfileData}
        />
      </div>

      <Toaster />
      {loading ? (
        <Loader />
      ) : data ? (
        <button
          className={`${yekanBakh.className} ${styles.submit}`}
          onClick={editHandler}
        >
          ویرایش آگهی
        </button>
      ) : (
        <button
          className={`${yekanBakh.className} ${styles.submit}`}
          onClick={submitHandler}
        >
          ثبت آگهی
        </button>
      )}
    </div>
  );
}

export default AddProfilePage;
