import React from "react";
import Header from "../component/Header";
import { AppLabel } from "../component/AppLabel";
import {AppButton} from "../component/AppButton";

const Welcome = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="welcome">
          <Header
           headerText="Добро пожаловать в квиз от лучшего учебного центра" />
          <form className="welcome__form">

            <AppLabel
              labelText="Ваше имя"
              labelPlaceholder="Введите ваше имя"
              labelType="text"
              labelName="username"
              labelError="Введите имя в правильном формате"
            />

            <AppLabel
              labelText="Ваш номер"
              labelPlaceholder="+998 9- --  --  --"
              labelType="tel"
              labelName="phone"
              labelError="Введите номер телефона в правильном формате"
            />
            <AppButton 
            buttonText="Далее"
             buttonType="button"
             isDisabled
             />




           
          </form>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
