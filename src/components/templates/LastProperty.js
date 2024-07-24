import React from "react";
import LastPropertyDetail from "../modules/LastPropertyDetail";
import styles from "./LastProperty.module.css";

function LastProperty() {
  return (
    <div className={styles.container}>
      <div>
        <div>
          <h1>آخرین آگهی ها</h1>
          <p>شما در این قسمت میتوانید آخرین آگهی ها را مشاهد کنید.</p>
        </div>
        <div>
            
        </div>
      </div>
      <section>
        <LastPropertyDetail />
        <LastPropertyDetail />
        <LastPropertyDetail />
        <LastPropertyDetail />
        <LastPropertyDetail />
        <LastPropertyDetail />
      </section>
    </div>
  );
}

export default LastProperty;
