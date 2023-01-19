// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

class CardData {
  id: number;
  title: string;
  description: string;
  extra?: string;
  constructor(id: number, title: string, description: string, extra?: string) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.extra = extra;
  }
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<CardData[]>
) {
  let cards: CardData[] = [
    new CardData(1, "John Doe", "BLABLA", "HER ER EKSTRA"),
    new CardData(2, "Jane Smith", "MEREBLABLA"),
    new CardData(3, "Bob Johnson", "FORMEGETBLABLA"),
    new CardData(4, "Bob Johnson", "FORMEGETBLABLA"),
    new CardData(5, "Bob Johnson", "FORMEGETBLABLA"),
  ];

  res.status(200).json(cards);
}
