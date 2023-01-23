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
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  function preventScrolling(event: TouchEvent) {
    event.preventDefault();
  }

  useEffect(() => {
    if (isOpen) {
      document.documentElement.style.overflow = "hidden";
      document.body.addEventListener("touchmove", preventScrolling, {
        passive: false,
      });
    } else {
      document.documentElement.style.overflow = "auto";
      document.body.removeEventListener("touchmove", preventScrolling);
    }
  }, [isOpen]);

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
        <h3>{tekst}</h3>
      </button>
    </div>
  );
};

export default CTAButton;
