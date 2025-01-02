import React from "react";
import ProgressBar from "../component/ProgressBar";
import { Link } from "react-router-dom";

const StepOne = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="single-input-quiz">
          <ProgressBar currentStep={1}/>
          <div className="question">
            <h2>1. Занимательный вопрос</h2>
            <label className="input-wrapper">
              <input
                required
                type="text"
                name="answer"
                placeholder="Ваш ответ"
              />
              <span id="error-message">
                Введите номер в правильном формате например
              </span>
            </label>

           <Link to="/step-two">
            <button type="button" id="next-btn">
              Далее
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepOne;
