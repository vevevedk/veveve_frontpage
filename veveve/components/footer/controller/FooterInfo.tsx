import Style from "./Footer.module.css";
import { Location } from "../../model/FooterModel";
let location: Location[] = [
  new Location(
    "Christian D Xs Vej 173",
    "8270 Højbjerg",
    61663930,
    "hello@veveve.dk"
  ),
];

const FooterInfo: React.FC = () => {
  return (
    <address className={Style.FooterInfo}>
      {location.map((place) => (
        <div key={place.phone}>
          <h3>{place.location} </h3>
          <h3>{place.zip}</h3>
          <h3>
            <a href={"tel:+45" + place.phone}>{place.phone}</a>
          </h3>

          <h3>
            <a href={"mailto:" + place.email}>{place.email}</a>
          </h3>
        </div>
      ))}
    </address>
  );
};

export default FooterInfo;
