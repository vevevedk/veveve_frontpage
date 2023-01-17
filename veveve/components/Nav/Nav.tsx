import React, { useState, useEffect } from "react";

interface Props {
  links: { id: string; name: string; url: string }[];
}

const MobileNav: React.FC<Props> = ({ links }) => {
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
    <nav>
      {width < 500 ? (
        <>
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "Close" : "Menu"}
          </button>
          {isOpen && (
            <ul>
              {links.map(({ id, name, url }) => (
                <li key={id}>
                  <a className="link" href={url}>
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </>
      ) : (
        // Mobil
        <ul>
          {links.map(({ id, name, url }) => (
            <li key={id}>
              <a className="link" href={url}>
                {name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default MobileNav;
