import {useState} from "react";

import Navbar from "../components/svt/Navbar.jsx";
import QuizScreen from "../components/svt/QuizScreen.jsx";
import JoinScreen from "../components/svt/JoinScreen.jsx";

function SVTApp(){
  const [isQuizStarted, setIsQuizStarted] = useState(false);
  return(
    <> <LandingPage />
      <Navbar/>
      <div className="quiz-container">
        {
          isQuizStarted ? (
            <QuizScreen retry={()=>setIsQuizStarted(false)}/>
          ) : (
            <JoinScreen start={()=>setIsQuizStarted(true)}/>
          )
        }
      </div>
    </>
  );
}

export default SVTApp;