import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Projetos from "./pages/Projetos";
import Curriculo from "./pages/Curriculo";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/projetos" exact component={Projetos} />
        <Route path="/curriculo" exact component={Curriculo} />
      </Switch>
    </BrowserRouter>
  );
}
