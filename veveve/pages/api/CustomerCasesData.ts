// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { CustomerCasesData } from "../../components/model/CustomerCasesModel";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<CustomerCasesData[]>
) {
  let CustomerCases: CustomerCasesData[] = [
    new CustomerCasesData(1, "test1", "", "", "", "", ""),
    new CustomerCasesData(2, "test1", "", "", "", "", ""),
    new CustomerCasesData(3, "test1", "", "", "", "", ""),
    new CustomerCasesData(4, "test1", "", "", "", "", ""),
    new CustomerCasesData(5, "test1", "", "", "", "", ""),
    new CustomerCasesData(6, "test1", "", "", "", "", ""),
  ];

  res.status(200).json(CustomerCases);
}
