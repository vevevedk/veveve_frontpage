import React, { useState } from "react";
import styles from "../../styles/navbar.module.css";

interface Props {
  links: { id: string; name: string; url: string }[];
}

const MobileNav: React.FC<Props> = ({ links }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.nav}>
      <img src="path/to/logo.png" alt="Logo" className={styles.logo} />
      <ul className={`${styles.links} ${isOpen ? styles.open : ""}`}>
        {links.map((link, index) => (
          <li
            key={link.id}
            className={index === links.length - 1 ? styles.lastLink : "link"}
          >
            <a href={link.url} className={styles.link}>
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
