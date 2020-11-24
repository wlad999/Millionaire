import React, { useState } from "react";
import PropTypes from "prop-types";
import CurrentQuestion from "../currentQuestion";
import MoneyStep from "../moneySteps";
import { Menu, Close } from "../../assets/svg";
import "./index.css";

function Game({ data, stepNumber, dataQuestion }) {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <article>
      <section>
        <div className="questions-field">
          <button
            type="button"
            className="menu"
            onClick={() => setToggleMenu(prev => !prev)}
          >
            {!toggleMenu ? <Menu /> : <Close />}
          </button>
          <CurrentQuestion dataQuestion={dataQuestion} />
        </div>
        <aside className={toggleMenu ? "step" : "step step-none"}>
          <MoneyStep data={data} stepNumber={stepNumber} />
        </aside>
      </section>
    </article>
  );
}

Game.propTypes = {
  data: PropTypes.object || null,
  stepNumber: PropTypes.number,
  dataQuestion: PropTypes.object || null,
};
Game.defaultProps = {
  data: null,
  stepNumber: 1,
  dataQuestion: null,
};

export default Game;
