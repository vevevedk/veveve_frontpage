import React, { useState, useEffect } from "react";

interface CardProps {
  id: number;
  title: string;
  text: string;
  extra: string;
}

const MyComponent: React.FC = () => {
  const [cards, setCards] = useState<CardProps[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/CardData")
      .then((res) => res.json())
      .then((data) => setCards(data.cards))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      {cards.map((card) => (
        <div key={card.id}>
          <h2>{card.title}</h2>
          <p>{card.text}</p>
          <p> {card.extra}</p>
        </div>
      ))}
    </>
  );
};

export default MyComponent;
