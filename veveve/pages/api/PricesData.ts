// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { PriceData } from "../../components/model/PrisDataModel";
//  id: number;
//  title: string;
//  price: number;
//  description: string;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<PriceData[]>
) {
  let price: PriceData[] = [
    new PriceData(1, "lille pakke", 1111, [
      "sojsdoijfisdpf",
      "soidfjosiadjfoiasdjfio",
    ]),
    new PriceData(2, "lille pakke", 1111, [
      "her er beskrivelsen",
      "iuhfiuashdfiuahdsuifhadsiu",
    ]),
    new PriceData(3, "lille pakke", 1111, [
      "her er beskrivelsen",
      "sadijasd9fhasdiuhfiuadsh",
    ]),
  ];

  res.status(200).json(price);
}
