import {useState} from "react";
import QuestionList from "../svt-data/questions.json";

import QuizResult from "./QuizResult.jsx";
import Question from "./Question.jsx";

function QuizScreen({retry}){
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [markedAnswers, setMarkedAnswers] = useState(new Array(QuestionList.javascript.length));
    const isQuestionEnd = currentQuestionIndex === QuestionList.javascript.length;
    
    function calculateResult(){
        // console.log({markedAnswers});
        let correct = 0;
        QuestionList.javascript.forEach((question, index)=>{
            if(question.correctOptionIndex == markedAnswers[index]){
                correct++;
            }
        });
        return {
            total:QuestionList.javascript.length,
            correct:correct,
            percentage:Math.trunc((correct / QuestionList.javascript.length)*100)
        };
    }
    return(
        <div className="quiz-screen"> 
            {
                isQuestionEnd ? (
                    <QuizResult
                    result={calculateResult()}
                    retry={retry}
                    />
                ) : (
                    <Question 
                        question={QuestionList.javascript[currentQuestionIndex]}
                        totalQuestions={QuestionList.javascript.length}
                        currentQuestion={currentQuestionIndex+1}
                        setAnswer={(index)=>{
                            setMarkedAnswers((arr)=>{
                                let newArr = [...arr];
                                newArr[currentQuestionIndex-1] = index;
                                return newArr;
                            });
                            setCurrentQuestionIndex(currentQuestionIndex+1);
                        }}
                    />
                    )
                }
        </div>
    );
}

export default QuizScreen;