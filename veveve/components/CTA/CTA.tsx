import React, { ReactElement, useEffect, useRef, useState } from "react";
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
  const ref = useRef<any>(null);

  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      if (!ref?.current?.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
  }, [ref]);
  function ShowModal() {
    if (isOpen) {
      return (
        <div className={styles.ModalBody}>
          <div className={styles.ModalContent}>{popup}</div>
        </div>
      );
    }
    return null;
  }

  return (
    <div>
      {ShowModal()}
      <button
        className={styles[stil]}
        onClick={() => setIsOpen(!isOpen)}
        ref={ref}
      >
        <h1>{tekst}</h1>
      </button>
    </div>
  );
};

export default CTAButton;
