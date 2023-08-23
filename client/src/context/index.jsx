import { useState, useContext, createContext } from "react";
const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const [questions, setQuestions] = useState([]);
  const [language, setLanguage] = useState("");
  const [languageList, setLanguageList] = useState([]);
  const [user, setUser] = useState({});

  //Get questions

  const getQuestions = async (langId) => {
    const promise = fetch(`http://127.0.0.1:5000/api/quiz/quizzes/${langId}`);
    promise
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // console.log(data);
        setQuestions(data.questions);
        setLanguage(data.language);
      });
  };

  //Get Languages

  const getLanguages = async () => {
    const response = await fetch(`http://127.0.0.1:5000/api/languages/`, {
      method: "GET",
    });
    const languagesArray = await response.json();
    setLanguageList(languagesArray);
  };

  const loginUser = async (email, password) => {
    const response = await fetch(`http://127.0.0.1:5000/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    const data = await response.json();
    localStorage.setItem("authToken", data.token);
  };
  const registerUser = async (name, email, password) => {
    const response = await fetch(`http://127.0.0.1:5000/api/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      }),
    });
    const data = await response.json();
    localStorage.setItem("authToken", data.token);
  };
  const getUser = async (token) => {
    const response = await fetch(`http://127.0.0.1:5000/api/user/profile`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });
    const data = await response.json();
    console.log(data);
    setUser(data);
  };
  return (
    <StateContext.Provider
      value={{
        questions,
        setQuestions,
        language,
        setLanguage,
        getQuestions,
        languageList,
        setLanguageList,
        getLanguages,
        loginUser,
        getUser,
        user,
        registerUser,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
