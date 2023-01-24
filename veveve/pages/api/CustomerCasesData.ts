// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { CustomerCasesData } from "../../components/model/CustomerCasesModel";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<CustomerCasesData[]>
) {
  let CustomerCases: CustomerCasesData[] = [
    new CustomerCasesData(
      1,
      "test1",
      "https://lh3.googleusercontent.com/p/AF1QipPiVkNbBwzAC3tCrV1tC1NbZu1K7Oq72ty2_l7k=s1360-w1360-h1020",
      "",
      "",
      "",
      ""
    ),
    new CustomerCasesData(
      2,
      "test2",
      "https://lh3.googleusercontent.com/p/AF1QipPiVkNbBwzAC3tCrV1tC1NbZu1K7Oq72ty2_l7k=s1360-w1360-h1020",
      "",
      "",
      "",
      ""
    ),
    new CustomerCasesData(
      3,
      "test3",
      "https://lh3.googleusercontent.com/p/AF1QipPiVkNbBwzAC3tCrV1tC1NbZu1K7Oq72ty2_l7k=s1360-w1360-h1020",
      "SEO 325%",
      "Profit 240%",
      "fdsfs",
      "grtrreds"
    ),
    new CustomerCasesData(
      4,
      "test4",
      "https://lh3.googleusercontent.com/p/AF1QipPiVkNbBwzAC3tCrV1tC1NbZu1K7Oq72ty2_l7k=s1360-w1360-h1020",
      "SEO 325%",
      "Profit 240%",
      "fdsfs",
      "grtrreds"
    ),
    new CustomerCasesData(
      5,
      "test5",
      "https://lh3.googleusercontent.com/p/AF1QipPiVkNbBwzAC3tCrV1tC1NbZu1K7Oq72ty2_l7k=s1360-w1360-h1020",
      "SEO 325%",
      "Profit 240%",
      "fdsfs",
      "grtrreds"
    ),
    new CustomerCasesData(
      6,
      "test6",
      "https://lh3.googleusercontent.com/p/AF1QipPiVkNbBwzAC3tCrV1tC1NbZu1K7Oq72ty2_l7k=s1360-w1360-h1020",
      "SEO 325%",
      "Profit 240%",
      "fdsfs",
      "grtrreds"
    ),
  ];

  res.status(200).json(CustomerCases);
}
