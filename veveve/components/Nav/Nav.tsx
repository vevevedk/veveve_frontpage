import React, { useState, useEffect } from "react";
import style from "../../styles/navbar.module.css";
interface Props {}

interface Link {
  id: string;
  name: string;
  url: string;
}

const links: Link[] = [
  { id: "link1", name: "Link 1", url: "#link1" },
  { id: "link2", name: "Link 2", url: "#link2" },
  { id: "link3", name: "Link 3", url: "#link3" },
  { id: "link4", name: "Link 4", url: "#link4" },
  { id: "link5", name: "Link 5", url: "#link5" },
];

const MobileNav: React.FC<Props> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className={style.Navbar}>
      {width < 500 ? (
        <>
          <button className={style.burger} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "Close" : "Menu"}
          </button>
          {isOpen && (
            <ul>
              {links.map((link) => (
                <li key={link.id}>
                  <a className="link" href={link.url}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </>
      ) : (
        <ul>
          {links.map((link) => (
            <li key={link.id}>
              <a className="link" href={link.url}>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default MobileNav;
