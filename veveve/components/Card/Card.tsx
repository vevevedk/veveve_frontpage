import React, { useState, useEffect } from "react";
import style from "../../styles/CardsStyle.module.css";
import { CardData } from "../model/CardDataModel";

const MyComponent: React.FC = () => {
  const [cards, setCards] = useState<CardData[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/CardData")
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
            <h3 className={style.header2}>{card.title}</h3>
            {card.url ? (
              <img src={card.url} alt={card.title} className={style.img} />
            ) : null}
            <p>{card.description}</p>
            <div className={style.popUp}>
              <p>{card.extra}</p>
            </div>

            <button>TRYK IKKE PÅ MIG</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyComponent;
