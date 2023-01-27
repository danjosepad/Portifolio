import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";

import Home from "./pages/Home/index";
import Projects from "./pages/Projects/index";
import Curriculum from "./pages/Curriculum/index";

import AnotacoesJS from "./pages/allProjects/AnotacoesJS/index";
import AppleReminders from "./pages/allProjects/AppleReminders/index";
import TodoList from "./pages/allProjects/TodoList/index";
import CalculadoraJS from "./pages/allProjects/CalculadoraJS/index";
import CloneApple from "./pages/allProjects/CloneApple/index";
import Facebook from "./pages/allProjects/CloneFacebook/index";
import PxToRem from "./pages/allProjects/PxToRem";
import Funny from "./pages/funnyTest";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/projetos" exact component={Projects} />
        <Route path="/projetos/anotacoesJS" exact component={AnotacoesJS} />
        <Route path="/projetos/apple-reminders" exact component={AppleReminders} />
        <Route path="/projetos/todo-list" exact component={TodoList} />
        <Route path="/projetos/CalculadoraJS" exact component={CalculadoraJS} />
        <Route path="/projetos/apple" exact component={CloneApple} />
        <Route path="/projetos/facebook" exact component={Facebook} />
        <Route path="/projetos/px-to-rem" exact component={PxToRem} />
        <Route path="/o-brunnao" exact component={Funny} />
        <Route path="/curriculo" exact component={Curriculum} />
      </Switch>
    </BrowserRouter>
  );
}
