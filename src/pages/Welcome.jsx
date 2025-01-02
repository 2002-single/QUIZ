
import React, {useEffect,useState} from "react";
import Header from "../component/Header";
import { AppLabel } from "../component/AppLable";
import {AppButton} from "../component/AppButton";
import {Link, link, useNavigate} from "react-router-dom";
const Welcome = () => {

  const RegexPhone = /^\+?\d{1,3}[-.\s]?\(?\d{1,4}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/
  const RegexName = /^[a-zA-Zа-яА-ЯёЁ\s]+$/



const[name,setName] = useState("");
const[phone,setPhone] = useState("");

const[nameError,setNameError]=useState(false);
const[phoneError,setPhoneError]=useState(false);
const[buttonError, setButtonError] = useState(true);



const navigate = useNavigate()
const handleClick= ()=>{
  if(!RegexName.test(name)) {
setNameError(true);
  }else if(!RegexPhone.test(phone)){
    setPhoneError(true);

  }else{
    setNameError(false);
    setPhoneError(false);
  navigate("/step-one")
  localStorage.setItem("userInfo", JSON.stringify({name,phone})) 
  }
};



useEffect(()=> {
  if(!name || !phone){
    setButtonError(true)
  }else{
    setButtonError(false)
  }
}, [name,phone]);


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
              inputValue={name}
              inputChange={setName}
              hasError={nameError}
            />

            <AppLabel
              labelText="Ваш номер"
              labelPlaceholder="+998 9- --  --  --"
              labelType="tel"
              labelName="phone"
              labelError="Введите номер телефона в правильном формате"
              inputValue={phone}
              inputChange={setPhone}
              hasError={phoneError}
            />
            
{/* <Link to="/step-one"> */}
<AppButton 
            buttonClick={handleClick}
            buttonText="Далее"
             buttonType="button"
             isDisabled={buttonError}
             />
{/* </Link> */}



           
          </form>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
