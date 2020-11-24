import PropTypes from "prop-types";
import React, { useState } from "react";
import { RectangleDesktop } from "../../assets/svg";
import "./index.css";

function CurrentQuestion({ dataQuestion }) {
  const {
    stepNumber,
    data,
    setData,
    setStart,
    setStepNumber,
    setEarned,
  } = dataQuestion;

  const [rightTimoutId, setRightTimoutId] = useState(0);
  const [falseTimoutId, setFalseTimoutId] = useState(0);
  const [selectedTimoutId, setSelectedTimoutId] = useState(0);

  const { questions } = data;

  const currentQuestionData = questions.find(
    (el, idx) => stepNumber === idx + 1,
  );
  const newQuestionOptions = [...currentQuestionData.options];

  const renderOptions = currentQuestionData.options.map((el, idx) => {
    const { selected, answer, option, type } = el;

    const onClickHandler = () => {
      newQuestionOptions[idx].selected = true;
      let newQuestionData = {
        ...currentQuestionData,
        options: newQuestionOptions,
        selected: true,
      };

      let updatedQuestions = questions.map((question, inx) =>
        inx + 1 === stepNumber ? newQuestionData : question,
      );

      let newData = { ...data, questions: updatedQuestions };
      setData(newData);

      setSelectedTimoutId(
        setTimeout(() => {
          if (el.truth) {
            newQuestionOptions[idx].answer = true;
            newQuestionData = {
              ...currentQuestionData,
              options: newQuestionOptions,
              answer: true,
            };

            updatedQuestions = questions.map((question, inx) =>
              inx + 1 === stepNumber ? newQuestionData : question,
            );

            newData = { ...data, questions: updatedQuestions };
            setEarned(currentQuestionData.earn);
            setData(newData);
            setRightTimoutId(
              setTimeout(() => {
                setStepNumber(prev => {
                  if (prev < questions.length) {
                    return prev + 1;
                  }
                  return 1;
                });
                clearTimeout(rightTimoutId);
              }, 1500),
            );
          } else if (!el.truth) {
            newQuestionOptions[idx].answer = false;
            newQuestionData = {
              ...currentQuestionData,
              options: newQuestionOptions,
              answer: false,
            };

            updatedQuestions = questions.map((question, inx) =>
              inx + 1 === stepNumber ? newQuestionData : question,
            );

            newData = { ...data, questions: updatedQuestions };
            setData(newData);
            setFalseTimoutId(
              setTimeout(() => {
                setStart(false);
                setStepNumber(1);
                clearTimeout(falseTimoutId);
              }, 1500),
            );
          }
          clearTimeout(selectedTimoutId);
        }, 1500),
      );
    };

    return (
      <li
        key={option}
        className={`option-item
        ${selected && "option-selected"}
        ${answer && "option-true"}
        ${answer === false && "option-false"}
        `}
        onClick={onClickHandler}
        role="presentation"
      >
        <RectangleDesktop />
        <div className="option">
          <span className="option-typ">{type}</span>
          &nbsp; &nbsp;
          <span className="option-answer">{option}</span>
        </div>
      </li>
    );
  });

  return (
    <div className="question-container">
      <h1>{currentQuestionData.question}</h1>
      <ul
        className={`options-container ${
          (currentQuestionData.selected || currentQuestionData.answer) &&
          "question-container-disabled"
        }`}
      >
        {renderOptions}
      </ul>
    </div>
  );
}

export default CurrentQuestion;

CurrentQuestion.propTypes = {
  dataQuestion: PropTypes.object || null,
};
CurrentQuestion.defaultProps = {
  dataQuestion: null,
};
