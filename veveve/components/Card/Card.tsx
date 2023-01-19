import React, { useState, useEffect } from "react";
import style from "../../styles/CardsStyle.module.css";
interface CardProps {
  id: number;
  title: string;
  description: string;
  extra?: string;
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
    <div className={style.CardContainer}>
      {cards.map((card) => (
        <div key={card.id}>
          <h2>{card.title}</h2>
          <p>{card.description}</p>
          <p>{card.extra}</p>
        </div>
      ))}
    </div>
  );
};

export default MyComponent;
