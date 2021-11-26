import React from "react";
import { Switch, Route } from "react-router-dom";

import Navigation from "./components/Navigation";
import CarModelpage from "./pages/CarModelpage";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <div style={{ fontFamily: "Arial" }}>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/carso/:name" component={CarModelpage} />{" "}
      </Switch>
    </div>
  );
}

export default App;
