import React, { useState, useEffect } from "react";
import { CustomerCasesData } from "../model/CustomerCasesModel";
import styles from "../../styles/CustomerCasesStyle.module.css";
import { url } from "inspector";
const MyComponent: React.FC = () => {
  const [cases, setCases] = useState<CustomerCasesData[]>([]);

  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_BASEPATH + "api/CustomerCasesData")
      .then((res) => res.json())
      .then((data) => setCases(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className={styles.CustomerCases}>
      <h2> Beskrivelse af services </h2>
      <div className={styles.CasesContainer}>
        {cases.map((Services) => (
          <div
            key={Services.id}
            style={{
              backgroundImage: `url(${Services.img})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
            className={styles.Cases}
          >
            <div className={styles.overlay}>
              <p className={styles.content}>{Services.title}</p>
              <h3 className={styles.content}>{Services.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyComponent;
