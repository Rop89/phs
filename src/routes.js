import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./views/Home";
import About from "./views/About";
import Properties from "./views/Properties";
import Prices from "./views/Prices";
import Contact from "./views/Contact"


function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/properties" component={Properties} />
        <Route path="/prices" component={Prices} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
