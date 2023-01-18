import React from "react";
import styles from "../../components/CTA/CTA.module.css";

interface CTA {
  stil: stil;
  tekst: tekst;
  popup?: string;
}
export enum stil {
  blue = "blue",
  orange = "orange",
  white = "white",
}
export enum tekst {
  tryk_ik_mig = "Tryk ik på mig",
  kontakt = "kontakt",
}

const CTAButton: React.FC<CTA> = ({ stil, tekst }) => {
  return (
    <div className={styles.container}>
      <button className={styles[stil]}>
        <h1>{tekst}</h1>
      </button>
    </div>
  );
};

export default CTAButton;
