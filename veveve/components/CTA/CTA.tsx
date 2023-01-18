import React, { ReactElement, useState } from "react";
import styles from "../../components/CTA/CTA.module.css";

interface CTA {
  stil: stil;
  tekst: tekst;
  popup: ReactElement;
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

const CTAButton: React.FC<CTA> = ({ stil, tekst, popup }) => {
  const [isOpen, setIsOpen] = useState(false);

  function ShowModal() {
    if (isOpen == true) {
      return (
        <div className={styles.ModalBody}>
          <div className={styles.ModalContent}></div>
          <p>{popup}</p>
        </div>
      );
    }
    return null;
  }

  return (
    <div className={styles.container}>
      <button className={styles[stil]} onClick={() => setIsOpen(!isOpen)}>
        <h1>{tekst}</h1>
      </button>
      {ShowModal()}
    </div>
  );
};

export default CTAButton;
