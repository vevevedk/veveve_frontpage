import { useState, useEffect } from "react";
import React from "react";
import { PriceData } from "../model/PrisDataModel";
import style from "../../styles/priceStyle.module.css";

const Prices: React.FC = () => {
  const [price, setPrices] = useState<PriceData[]>([]);
  const [activeTab, setActiveTab] = useState<string>("");

  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_BASEPATH + "api/PricesData")
      .then((res) => res.json())
      .then((data) => {
        setPrices(data);
        setActiveTab(data[1].title);
      })
      .catch((err) => console.error(err));
  }, []);

  const handleTabClick = (tabTitle: string) => {
    setActiveTab(tabTitle);
  };

  return (
    <>
      <div className={style.priceWrap}>
        <h2>Beskrivelse af priser</h2>
        <div className={style.tabBar}>
          {price.map((prices) => (
            <button
              className={`${style.tabButton} ${
                activeTab === prices.title ? style.activeTabButton : ""
              }`}
              key={prices.id}
              onClick={() => handleTabClick(prices.title)}
            >
              <h3 className={style.title}>{prices.title}</h3>
            </button>
          ))}
        </div>
        <div className={style.content}>
          {price.map((prices) => (
            <div
              key={prices.id}
              className={activeTab === prices.title ? "" : style.inactiveTab}
            >
              <p className={style.price}>{prices.price}</p>
              <p className={style.inc}>{prices.servicesIncluded}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Prices;
