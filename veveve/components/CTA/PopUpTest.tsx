import React from "react";
import CTAButton, { stil, tekst } from "./CTA";

export default function PopUpTest() {
  const test = (
    <div>
      <form>
        <p>hejsa</p>
      </form>
    </div>
  );

  return (
    <div>
      <h1>PopUpTest</h1>
      <CTAButton stil={stil.blue} tekst={tekst.tryk_ik_mig} popup={test} />
    </div>
  );
}
