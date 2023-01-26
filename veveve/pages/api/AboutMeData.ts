// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { AboutMeData } from "../../components/model/AboutMeModel";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<AboutMeData[]>
) {
  let AboutMe: AboutMeData[] = [
    new AboutMeData(1, "URL", ["part1", "part2", "part3", "part4", "part5"]),
  ];

  res.status(200).json(AboutMe);
}
