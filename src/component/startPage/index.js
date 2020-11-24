import React from "react";
import PropTypes from "prop-types";
import { Hand } from "../../assets/svg";
import "./index.css";

function StartPage({
  setStart,
  earned,
  data,
  firstGame,
  setFirstGame,
  setEarned,
}) {
  let startCurrency = "$";
  if (data && data.currency) {
    startCurrency = data.currency;
  }
  const buttonHandler = () => {
    setStart(true);
    setFirstGame(false);
    setEarned(0);
  };
  return (
    <article>
      <div className={firstGame ? "start-page-bg" : ""} />
      <section>
        <div className="img-container">
          <Hand />
        </div>
        <div className="button-container">
          {!firstGame && (
            <>
              <p className="total-score">Total score:</p>
              <h1>
                {startCurrency}
                {earned}
                &nbsp; earned
              </h1>
            </>
          )}
          {firstGame && <h1>Who wants to be a millionaire?</h1>}
          <button type="button" onClick={buttonHandler}>
            {firstGame ? "Start" : "Start again"}
          </button>
        </div>
      </section>
    </article>
  );
}

StartPage.propTypes = {
  setStart: PropTypes.func,
  earned: PropTypes.number,
  currency: PropTypes.string,
  data: PropTypes.object || null,
  firstGame: PropTypes.bool,
  setFirstGame: PropTypes.func,
  setEarned: PropTypes.func,
};
StartPage.defaultProps = {
  setStart: PropTypes.func,
  earned: 0,
  currency: "$",
  data: null,
  firstGame: true,
  setFirstGame: PropTypes.func,
  setEarned: PropTypes.func,
};

export default StartPage;
