import React, { useState, useEffect } from "react";
import styles from "../../styles/AboutMe.module.css";
import { AboutMeData } from "../model/AboutMeModel";
const MyComponent: React.FC = () => {
  const [cases, setCases] = useState<AboutMeData[]>([]);

  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_BASEPATH + "api/AboutMeData")
      .then((res) => res.json())
      .then((data) => setCases(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className={styles.AboutMe}>
      <div className={styles.AboutMeContainer}>
        <h2> Hvem er jeg? </h2>

        {cases.map((content) => (
          <div className={styles.AboutMeContent} key={"aboutme" + content.id}>
            {content.breadtext.map((btext) => (
              <div key={btext}>{btext}</div>
            ))}
            <h3 className={styles.AboutMeImg}>{content.img}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyComponent;
