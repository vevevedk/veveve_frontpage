import React, { useState } from "react";
import styles from "../../styles/navbar.module.css";
import { LinkingModel } from "../model/LinkModel";

interface Props {
  links: LinkingModel[];
}

const MobileNav: React.FC<Props> = ({ links }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <nav className={styles.nav}>
      <div className={styles.navFlex}>
        {" "}
        <img
          src="https://veveve-bucket.fra1.digitaloceanspaces.com/Icons/logo.svg"
          alt="Logo"
          className={styles.logo}
        />
        <div>
          <ul className={`${styles.links} ${isOpen ? styles.open : ""}`}>
            {links.map((link, index) => (
              <li
                key={link.name + link.id}
                className={
                  index === links.length - 1 ? styles.lastLink : "link"
                }
              >
                <a href={link.idtojump} className={styles.link}>
                  <h3>{link.name}</h3>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <button
          className={styles.menuButton}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "☰" : "✖"}
        </button>
      </div>
    </nav>
  );
};

export default MobileNav;
