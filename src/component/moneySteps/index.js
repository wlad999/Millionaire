import React from "react";
import PropTypes from "prop-types";
import { StepRectangleDesktop, StepRectangleMobile } from "../../assets/svg";
import "./index.css";

function MoneyStep({ data, stepNumber }) {
  const { questions, currency } = data;

  const renderStepMoney = questions.map((el, idx) => {
    const { earn } = el;
    return (
      <li
        key={earn}
        className={`step-item ${
          idx + 1 === stepNumber ? "active-step" : "passive-step"
        }`}
      >
        <div className="desktop-step-rectangle">
          <StepRectangleDesktop />
        </div>
        <div className="mobile-step-rectangle">
          <StepRectangleMobile />
        </div>
        <div
          className={`money-step-container ${
            idx + 1 > stepNumber && "future-step"
          }`}
        >
          <span>{currency}</span>
          <span>{earn}</span>
        </div>
      </li>
    );
  });

  return <ul className="step-money-item">{renderStepMoney}</ul>;
}

export default MoneyStep;

MoneyStep.propTypes = {
  data: PropTypes.object || null,
  stepNumber: PropTypes.number,
};
MoneyStep.defaultProps = {
  data: null,
  stepNumber: 1,
};
