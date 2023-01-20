import React, { useState, useEffect } from "react";
import style from "../../styles/CardsStyle.module.css";
interface CardProps {
  id: number;
  title: string;
  description: string;
  extra?: string;
  Url?: string | null;
}

const MyComponent: React.FC = () => {
  const [cards, setCards] = useState<CardProps[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/CardData")
      .then((res) => res.json())
      .then((data) => setCards(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <h2> Beskrivelse af services </h2>
      <div className={style.CardContainer}>
        {cards.map((card) => (
          <div key={card.id} className={style.Card}>
            <h3 className={style.header2}>{card.title}</h3>
            {card.Url ? (
              <img src={card.Url} alt={card.title} className={style.img} />
            ) : null}
            <p>{card.description}</p>
            <div className={style.popUp}>
              <p>{card.extra}</p>
            </div>

            <button />
          </div>
        ))}
      </div>
    </>
  );
};

export default MyComponent;
