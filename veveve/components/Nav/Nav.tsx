import React, { useState } from "react";
import styles from "../../styles/navbar.module.css";
import { LinkingModel } from "../model/LinkModel";

interface Props {
  links: LinkingModel[];
}

const MobileNav: React.FC<Props> = ({ links }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.nav}>
      {/* <img src="path/to/logo" alt="Logo" className={styles.logo} /> */}
      <ul className={`${styles.links} ${isOpen ? styles.open : ""}`}>
        {links.map((link, index) => (
          <li
            key={link.name + link.id}
            className={index === links.length - 1 ? styles.lastLink : "link"}
          >
            <a href={link.idtojump} className={styles.link}>
              {link.name}
            </a>
          </li>
        ))}
      </ul>
      <button className={styles.menuButton} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "☰" : "✖"}
      </button>
    </nav>
  );
};

export default MobileNav;
