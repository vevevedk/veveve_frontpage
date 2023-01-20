// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { CardData } from "../../components/model/CardDataModel";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<CardData[]>
) {
  let cards: CardData[] = [
    new CardData(
      1,
      "John Doe",
      "BLABLA",
      "HER ER EKSTRasd asdasd asd asda sd asd ak km m iopm oim oimA"
    ),
    new CardData(
      2,
      "Jane Smith",
      "MEREBLABLA",
      "Jaad asd asdma soidmoasm domsadoasmdo msado imaaa"
    ),
    new CardData(
      3,
      "Bob Johnson",
      "FORMEGETBLABLA",
      "her kan være der er noget med noget der er"
    ),
    new CardData(
      4,
      "Bob Johnson",
      "FORMEGETBLABLA",
      "s9ajdasoidjasoidjaoisjdoaisjd aoisdj asoidj aosidj aoisdj"
    ),
    new CardData(
      5,
      "Bob Johnson",
      `Life finds a way. Remind me to thank John for a lovely weekend. They're using our own satellites against us. And the clock is ticking. Is this my espresso machine? Wh-what is-h-how did you get my espresso machine? Did he just throw my cat out of the window?

Must go faster... go, go, go, go, go! We gotta burn the rain forest, dump toxic waste, pollute the air, and rip up the OZONE! 'Cause maybe if we screw up this planet enough, they won't want it anymore! Forget the fat lady! You're obsessed with the fat lady! Drive us out of here!`,
      `Life finds a way. Remind me to thank John for a lovely weekend. They're using our own satellites against us. And the clock is ticking. Is this my espresso machine? Wh-what is-h-how did you get my espresso machine? Did he just throw my cat out of the window?

Must go faster... go, go, go, go, go! We gotta burn the rain forest, dump toxic waste, pollute the air, and rip up the OZONE! 'Cause maybe if we screw up this planet enough, they won't want it anymore! Forget the fat lady! You're obsessed with the fat lady! Drive us out of here!`
    ),
  ];

  res.status(500).json(cards);
  console.log(CardData);
}
