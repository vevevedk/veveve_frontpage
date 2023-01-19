import React from "react";
import CTAButton, { stil, tekst } from "./CTA";
import styles from "../../components/CTA/CTA.module.css";

//elsker din test const... :P SÅ ved man du har været i gang
export default function PopUpTest() {
  const test = (
    <div>
      <form>
        <p>hejsa</p>
      </form>
    </div>
  );
  const test1 = (
    <div>
      <form>
        <p>hejsa1</p>
      </form>
    </div>
  );
  const test2 = (
    <div>
      <form>
        <p>hejsa2</p>
      </form>
    </div>
  );

  return (
    <div className={styles.Modal_Container}>
      <div className={styles.Card}>
        <div className={styles.CardContent}></div>

        <CTAButton stil={stil.blue} tekst={tekst.kontakt} popup={test} />
      </div>
      <div className={styles.Card}>
        <div className={styles.CardContent}></div>

        <CTAButton stil={stil.blue} tekst={tekst.kontakt} popup={test1} />
      </div>
      <div className={styles.Card}>
        <div className={styles.CardContent}></div>

        <CTAButton stil={stil.blue} tekst={tekst.kontakt} popup={test2} />
      </div>
    </div>
  );
}
