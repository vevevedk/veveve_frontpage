import Style from "./Footer.module.css";

interface Footer {
  Line1: string;
  Line2: string;
  Line3: string;
  Line4: string;
}

const FooterInfo: React.FC<Footer> = ({ Line1, Line2, Line3, Line4 }) => {
  return (
    <div className={Style.FooterInfo}>
      <h2>{Line1}</h2>
      <h2>{Line2}</h2>
      <h2>{Line3}</h2>
      <h2>{Line4}</h2>
    </div>
  );
};

export default FooterInfo;
