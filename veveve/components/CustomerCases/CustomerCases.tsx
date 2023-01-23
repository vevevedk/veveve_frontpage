import React, { useState, useEffect } from "react";
import { CustomerCasesData } from "../model/CustomerCasesModel";
import style from "../../styles/KundeCasesStyle.module.css";
const MyComponent: React.FC = () => {
  const [cases, setCases] = useState<CustomerCasesData[]>([]);

  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_BASEPATH + "api/CustomerCasesData")
      .then((res) => res.json())
      .then((data) => setCases(data))
      .catch((err) => console.error(err));
  }, []);

  return <div className={style.CustomerCases}></div>;
};
