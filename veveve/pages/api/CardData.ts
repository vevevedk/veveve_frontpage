// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

class Data {
  cards: {
    name: string;
    age: number;
  }[];
  constructor(cards: { name: string; age: number }[]) {
    this.cards = cards;
  }
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const cards = [
    { name: "John Doe", age: 11 },
    { name: "Jane Smith", age: 11 },
    { name: "Bob Johnson", age: 11 },
  ];

  res.status(200).json(new Data(cards));
}
