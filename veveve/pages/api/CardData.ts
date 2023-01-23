// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { ServicesData } from "../../components/model/CardDataModel";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ServicesData[]>
) {
  let service: ServicesData[] = [
    new ServicesData(
      1,
      "John Doe",
      "https://veveve-bucket.fra1.digitaloceanspaces.com/ServicesImages/dice.png",
      "BLABLA",
      "HER ER EKSTRasd asdasd asd asda sd asd ak km m iopm oim oimA"
    ),
    new ServicesData(
      2,
      "Jane Smith",
      "https://veveve-bucket.fra1.digitaloceanspaces.com/ServicesImages/home.png",
      "MEREBLABLA",
      "Jaad asd asdma soidmoasm domsadoasmdo msado imaaa"
    ),
    new ServicesData(
      3,
      "Bob Johnson",
      "https://veveve-bucket.fra1.digitaloceanspaces.com/ServicesImages/home.png",
      "FORMEGETBLABLA",
      "her kan være der er noget med noget der er"
    ),
    new ServicesData(
      4,
      "Bob Johnson",
      "https://veveve-bucket.fra1.digitaloceanspaces.com/ServicesImages/home.png",
      "FORMEGETBLABLA",
      "s9ajdasoidjasoidjaoisjdoaisjd aoisdj asoidj aosidj aoisdj"
    ),
    new ServicesData(
      5,
      "Bob Johnson",
      "https://veveve-bucket.fra1.digitaloceanspaces.com/ServicesImages/home.png",
      `Life finds a way. Remind me to thank John for a lovely weekend. They're using our own satellites against us. And the clock is ticking. Is this my espresso machine? Wh-what is-h-how did you get my espresso machine? Did he just throw my cat out of the window?`
    ),
    new ServicesData(
      6,
      "Bob Johnson",
      "https://veveve-bucket.fra1.digitaloceanspaces.com/ServicesImages/home.png",
      `Life finds a way. Remind me to thank John for a lovely weekend. They're using our own satellites against us. And the clock is ticking. Is this my espresso machine? Wh-what is-h-how did you get my espresso machine? Did he just throw my cat out of the window?Life finds a way. Remind me to thank John for a lovely weekend. They're using our own satellites against us. And the clock is ticking. Is this my espresso machine? Wh-what is-h-how did you get my espresso machine? Did he just throw my cat out of the window?Life finds a way. Remind me to thank John for a lovely weekend. They're using our own satellites against us. And the clock is ticking. Is this my espresso machine? Wh-what is-h-how did you get my espresso machine? Did he just throw my cat out of the window?Life finds a way. Remind me to thank John for a lovely weekend. They're using our own satellites against us. And the clock is ticking. Is this my espresso machine? Wh-what is-h-how did you get my espresso machine? Did he just throw my cat out of the window?Life finds a way. Remind me to thank John for a lovely weekend. They're using our own satellites against us. And the clock is ticking. Is this my espresso machine? Wh-what is-h-how did you get my espresso machine? Did he just throw my cat out of the window?Life finds a way. Remind me to thank John for a lovely weekend. They're using our own satellites against us. And the clock is ticking. Is this my espresso machine? Wh-what is-h-how did you get my espresso machine? Did he just throw my cat out of the window?Life finds a way. Remind me to thank John for a lovely weekend. They're using our own satellites against us. And the clock is ticking. Is this my espresso machine? Wh-what is-h-how did you get my espresso machine? Did he just throw my cat out of the window?Life finds a way. Remind me to thank John for a lovely weekend. They're using our own satellites against us. And the clock is ticking. Is this my espresso machine? Wh-what is-h-how did you get my espresso machine? Did he just throw my cat out of the window?Life finds a way. Remind me to thank John for a lovely weekend. They're using our own satellites against us. And the clock is ticking. Is this my espresso machine? Wh-what is-h-how did you get my espresso machine? Did he just throw my cat out of the window?Life finds a way. Remind me to thank John for a lovely weekend. They're using our own satellites against us. And the clock is ticking. Is this my espresso machine? Wh-what is-h-how did you get my espresso machine? Did he just throw my cat out of the window?Life finds a way. Remind me to thank John for a lovely weekend. They're using our own satellites against us. And the clock is ticking. Is this my espresso machine? Wh-what is-h-how did you get my espresso machine? Did he just throw my cat out of the window?Life finds a way. Remind me to thank John for a lovely weekend. They're using our own satellites against us. And the clock is ticking. Is this my espresso machine? Wh-what is-h-how did you get my espresso machine? Did he just throw my cat out of the window?Life finds a way. Remind me to thank John for a lovely weekend. They're using our own satellites against us. And the clock is ticking. Is this my espresso machine? Wh-what is-h-how did you get my espresso machine? Did he just throw my cat out of the window?`
    ),
  ];

  res.status(200).json(service);
}
