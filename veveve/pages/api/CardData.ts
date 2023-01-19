// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

id: number;
title: string;
text: string;
extra: string;

type Data = {
  cards: {
    id: number;
    title;
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
