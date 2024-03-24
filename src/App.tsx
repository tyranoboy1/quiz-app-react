import { useEffect, useState } from "react";
import { IQuestion, IUserAnswer } from "./types";
import { Difficulty, totalQuestion } from "./constants/quiz";
import { getQuestionList } from "./service/getQuestionsData";

function App() {
  // const [startQuiz, setStartQuiz] = useState<boolean>(false);
  const [questions, setQuestions] = useState<IQuestion[]>([]);
  // const [userAnswer, setUserAnswer] = useState<IUserAnswer[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  // const [questionNumber, setQuestionNumber] = useState<number>(0);
  // const [score, setScore] = useState<boolean>(0);
  // const [gameOver, setGameOver] = useState<boolean>(false);

  useEffect(() => {
    const getQuestionsData = async () => {
      const res = await getQuestionList(totalQuestion, Difficulty.EASY);
      setQuestions(res);
      setLoading(false);
    };
    getQuestionsData();
  }, []);
  return (
    <>
      <div></div>
    </>
  );
}

export default App;
