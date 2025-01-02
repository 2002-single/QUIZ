import React, { useEffect, useState } from "react";
import ProgressBar from "../component/ProgressBar";
import Header from "../component/Header";
import { AnswerItem } from "../component/AnswerItem";
import { AppButton } from "../component/AppButton";
import { useNavigate } from "react-router-dom";


const StepFour = () => {
const navigate = useNavigate()
const [checkVariants, setCheckVariants]= useState(null)
const variants = [1,2,3,4,5]
const course = JSON.parse(localStorage.getItem("userInfo"))


useEffect(()=>{
  const userInfo = {
    ...JSON.parse(localStorage.getItem("userInfo")),
    checkVariants
  };
localStorage.setItem("userInfo", JSON.stringify(userInfo));
},[checkVariants])


  return (
    <div className="container">
      <div className="wrapper">
        <div className="emoji-quiz">
              <ProgressBar currentStep={4}/>
          <div className="question">
           <Header textType="h2" headerText={`Как хорошо вы знаете ${course.checkedAnswer} ?`}/>
            <ul className="level-variants">
              {variants.map((elem,index)=>
               <AnswerItem
                answerText={elem} 
              answerVariants={index} 
              key={index}
              onChange={()=>setCheckVariants(elem)}
              />)}
            </ul>
           <AppButton buttonClick={()=> navigate ("/thanks")}  isDisabled={!checkVariants}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepFour;
