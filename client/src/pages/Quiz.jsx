import { useState, useEffect } from "react";
import { Card, Button, Radio } from "@material-tailwind/react";
import { useParams, Link } from "react-router-dom";
import { useStateContext } from "../context";
import Loader from "../components/loader";

const Quiz = () => {
  const { questions, language, getQuestions } = useStateContext();
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const params = useParams();
  const languageId = params.langId;

  useEffect(() => {
    getQuestions(languageId);
    return () => {};
  });

  function nextQuestion() {
    setCurrent(current + 1);
  }

  function setAnswer(userSelection) {
    setSelectedOption(userSelection);
  }

  function confirmAnswer() {
    if (selectedOption !== null) {
      if (selectedOption === questions[current].correctOption) {
        setScore(score + 1);
      }
      nextQuestion();
      setSelectedOption(null);
    }
  }

  if (questions.length === 0) {
    return (
      <div className="relative left-1/2 top-1/2">
        <Loader />
      </div>
    );
  }
  const currentQuestion = questions[current];
  return (
    <Card className="container mx-auto p-8 ">
      {current < questions.length ? (
        <div>
          <h2 className="text-2xl font-bold text-blue-gray-800">{language}</h2>

          <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
            <div
              className="bg-blue-gray-700 my-4 text-xs font-medium transition-all text-blue-100 text-center p-1 leading-none rounded-full"
              style={{ width: (current / questions.length) * 100 + "%" }}
            ></div>
          </div>
          <p className="my-4">{currentQuestion.text}</p>
          {currentQuestion.options.map((option, index) => (
            <div
              key={index}
              className="my-2 rounded "
              name={currentQuestion.text}
            >
              <Radio
                name={currentQuestion.text}
                value={option.text}
                onClick={(e) => setAnswer(e.target.value)}
              />
              <label className="text-black font-medium">{option.text}</label>
            </div>
          ))}
        </div>
      ) : (
        <h1 className="animate-text text-center bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-5xl font-black">
          Quiz Completed
        </h1>
      )}
      {current < questions.length ? (
        <div className="max-w-sm mx-auto">
          <Button
            color="blue"
            disabled={selectedOption === null ? true : false}
            onClick={confirmAnswer}
          >
            Confirm Answer
          </Button>
          <Button className="mx-4" onClick={nextQuestion}>
            Skip Question
          </Button>
        </div>
      ) : (
        <div className="mx-auto flex flex-col ">
          <h1 className="text-5xl font-black my-8">
            Your score: {score}/{questions.length}
          </h1>
          <Link to="/" className="mx-auto">
            <Button className="mx-4 mb-8 mt-4">Go to Homepage</Button>
          </Link>
        </div>
      )}
    </Card>
  );
};

export default Quiz;
