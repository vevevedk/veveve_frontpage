import React, { useState, useEffect } from "react";
import style from "../../styles/CardsStyle.module.css";
import CTA from "../CTA/CTA";
import { stil, tekst } from "../CTA/CTA";
import { CardData } from "../model/CardDataModel";

const MyComponent: React.FC = () => {
  const [cards, setCards] = useState<CardData[]>([]);

  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_BASEPATH + "api/CardData")
      .then((res) => res.json())
      .then((data) => setCards(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className={style.BGblue}>
      <h2> Beskrivelse af services </h2>
      <div className={style.CardContainer}>
        {cards.map((card) => (
          <div key={card.id} className={style.Card}>
            <h3 className={style.header2}>
              {card.title.split(" ").slice(0, 10).join(" ")}
            </h3>
            {card.url ? (
              <img src={card.url} alt={card.title} className={style.img} />
            ) : null}
            <p>{card.description.split(" ").slice(0, 100).join(" ") + "..."}</p>
            <div className={style.popUp}>
              <p>{card.extra}</p>
            </div>

            <CTA
              stil={stil.blue}
              tekst={tekst.kontakt}
              popup={<div>{card.description}</div>}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyComponent;
