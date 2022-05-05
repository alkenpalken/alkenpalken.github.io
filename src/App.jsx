import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

const App = () => {
  const [links] = useState([{title : "Главная", href : "/"}, {title : "Информация", href : "/about"}, {title : "Контакты", href : "/footer"}]);
  return (
    <div className="App">
      <Header text={"Currency tracking"} />
      <Main />
      <Footer text={"2022.Currency.Tracking"} links={links}/>
    </div>
  );
}

export default App;