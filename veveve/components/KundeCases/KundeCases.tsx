import React, { useState, useEffect } from "react";
import { KundeCasesData } from "../../components/model/KundeCasesModel";
import style from "../../styles/KundeCasesStyle.module.css";
const MyComponent: React.FC = () => {
  const [cases, setCases] = useState<KundeCasesData[]>([]);

  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_BASEPATH + "api/KundeCasesData")
      .then((res) => res.json())
      .then((data) => setCases(data))
      .catch((err) => console.error(err));
  }, []);

  return <div className={style.KundeCases}></div>;
};
