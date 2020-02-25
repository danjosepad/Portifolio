import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";

import Home from "./pages/Home/index";
import Projects from "./pages/Projects/index";
import Curriculum from "./pages/Curriculum/index";

import AnotacoesJS from "./pages/allProjects/AnotacoesJS/index";
import TodoList from "./pages/allProjects/TodoList/index";
import CalculadoraJS from "./pages/allProjects/CalculadoraJS/index";
import CloneApple from "./pages/allProjects/CloneApple/index";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/projetos" exact component={Projects} />
        <Route path="/projetos/anotacoesJS" exact component={AnotacoesJS} />
        <Route path="/projetos/todo-list" exact component={TodoList} />
        <Route path="/projetos/CalculadoraJS" exact component={CalculadoraJS} />
        <Route path="/projetos/apple" exact component={CloneApple} />
        <Route path="/curriculo" exact component={Curriculum} />
      </Switch>
    </BrowserRouter>
  );
}
