import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Projects from './pages/Projects';
import Curriculum from './pages/Curriculum';

import AnotacoesJS from './pages/allProjects/AnotacoesJS/index';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/projetos" exact component={Projects} />
        <Route path="/projetos/anotacoesJS" exact component={AnotacoesJS} />
        <Route path="/curriculo" exact component={Curriculum} />
      </Switch>
    </BrowserRouter>
  );
}
