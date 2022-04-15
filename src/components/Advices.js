import { useEffect, useState } from "react";

import "../styles/components/Advices.css";

import DividerDesktop from "../images/pattern-divider-desktop.svg";
import DividerMobile from "../images/pattern-divider-mobile.svg";
import DiceIcon from "../images/icon-dice.svg";

const Advices = () => {
  const [advice, setAdvice] = useState([]);

  const getAdvice = () => {
    fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then((data) => {
        setAdvice(data.slip);
        console.log(data.slip);
      });
  };

  useEffect(() => {
    fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then((data) => {
        setAdvice(data.slip);
      });
  }, []);

  return (
    <div className="advice__container">
      <p className="advice__number">Advice #{advice.id}</p>
      <h1 className="advice__text">"{advice.advice}"</h1>
      <img
        src={DividerDesktop}
        alt="divider"
        className="advice__divider--desktop"
      />
      <img
        src={DividerMobile}
        alt="divider"
        className="advice__divider--mobile"
      />
      <div className="advice__button-wrapper">
        <button className="advice__button" onClick={getAdvice}>
          <img src={DiceIcon} alt="dice" className="advice__dice" />
        </button>
      </div>
    </div>
  );
};

export default Advices;
