// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  cards: {
    name: string;
    age: number;
  }[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const cards = [
    { name: "John Doe", age: 11 },
    { name: "Jane Smith", age: 11 },
    { name: "Bob Johnson", age: 11 },
  ];

  res.status(200).json({ cards });
}
