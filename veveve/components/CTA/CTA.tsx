import React, { ReactElement, useEffect, useRef, useState } from "react";
import styles from "../../components/CTA/CTA.module.css";

interface CTA {
  stil: stil;
  tekst: tekst;
  popup: ReactElement;
}

//De her skal ind i kontroller
export enum stil {
  blue = "blue",
  orange = "orange",
  white = "white",
}
//kontroller
export enum tekst {
  tryk_ik_mig = "Tryk ik på mig",
  kontakt = "kontakt",
}

const CTAButton: React.FC<CTA> = ({ stil, tekst, popup }) => {
  const [isOpen, setIsOpen] = useState(false);
  const modalOpen = useRef(null);

  useEffect(() => {
    // only add the event listener when the dropdown is opened
    if (!isOpen) return;
    function handleClick(e) {
      if (modalOpen.current && !modalOpen.current.contains(e.target)) {
        setIsOpen(false);
      }
    }
    window.addEventListener("click", handleClick);
    // clean up
    return () => window.removeEventListener("click", handleClick);
  }, [setIsOpen]);

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
    <div className={styles.Modal_Container}>
      <div className={styles.Card} ref={modalOpen}>
        <div className={styles.CardContent}>
          <h1>placeholder card</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit sed sequi eligendi quae culpa voluptatum error
            aperiam. Nobis ex voluptas molestias reiciendis libero nostrum rem
            maxime itaque! Nulla, repudiandae perspiciatis.
          </p>
          {ShowModal()}
          <button className={styles[stil]} onClick={() => setIsOpen(!isOpen)}>
            <h1>{tekst}</h1>
          </button>
        </div>
      </div>
      <div className={styles.Card} ref={modalOpen}>
        <div className={styles.CardContent}>
          <h1>placeholder card</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit sed sequi eligendi quae culpa voluptatum error
            aperiam. Nobis ex voluptas molestias reiciendis libero nostrum rem
            maxime itaque! Nulla, repudiandae perspiciatis.
          </p>
          {ShowModal()}
          <button className={styles[stil]} onClick={() => setIsOpen(!isOpen)}>
            <h1>{tekst}</h1>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CTAButton;
