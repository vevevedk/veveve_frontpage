import style from "../../styles/HeroSection.module.css";
import React from "react";

interface hero {
  title: string;
}
const Hero: React.FC<hero> = ({ title }) => {
  return (
    <div className={style.hero_section}>
      <div className={style.overlay}>
        <video className={style.hero_video} autoPlay loop muted>
          <source src="../video/Siin_Design.mp4" type="video/mp4" />
        </video>
      </div>
      <div className={style.hero_text}>
        <h2>&quot;{title}&quot;</h2>
      </div>
    </div>
  );
};

export default Hero;
