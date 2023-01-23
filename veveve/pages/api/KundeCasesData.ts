// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { KundeCasesData } from "../../components/model/KundeCasesModel";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<KundeCasesData[]>
) {
  let kundeCases: KundeCasesData[] = [
    new KundeCasesData(1, "test1", "", "", "", "", ""),
    new KundeCasesData(2, "test1", "", "", "", "", ""),
    new KundeCasesData(3, "test1", "", "", "", "", ""),
    new KundeCasesData(4, "test1", "", "", "", "", ""),
    new KundeCasesData(5, "test1", "", "", "", "", ""),
    new KundeCasesData(6, "test1", "", "", "", "", ""),
  ];

  res.status(200).json(kundeCases);
  console.log(KundeCasesData);
}
