import Head from "next/head";
import Footer from "../components/footer/Footer";

import Card from "../components/Card/Card";
import Hero from "../components/HeroSection/Hero";
import { LinkingModel } from "../components/model/LinkModel";
import Nav from "../components/Nav/Nav";
import Prices from "../components/Prices/Prices";

const Links: LinkingModel[] = [
  new LinkingModel("1", "cases", "#cases"),
  new LinkingModel("2", "priser", "#blabla"),
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Veveve</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav links={Links} />
      <div className="bg-color-change">
        <Hero title="Jeg er ikke google premium partner, fordi jeg ikke arbejder for google jeg arbejder for jer" />
        <Card />
        <Prices />
        <Footer />
      </div>
    </>
  );
}
