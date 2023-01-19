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

        <h1>PopUpTest</h1>
        <CTAButton stil={stil.blue} tekst={tekst.tryk_ik_mig} popup={test} />
      </div>
      <div className={styles.Card}>
        <div className={styles.CardContent}></div>

        <h1>PopUpTest</h1>
        <CTAButton stil={stil.blue} tekst={tekst.tryk_ik_mig} popup={test1} />
      </div>
      <div className={styles.Card}>
        <div className={styles.CardContent}></div>

        <h1>PopUpTest</h1>
        <CTAButton stil={stil.blue} tekst={tekst.tryk_ik_mig} popup={test2} />
      </div>
    </div>
  );
}
