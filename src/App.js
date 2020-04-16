import React from "react";
import Volunteer from "./Components/Volunteer";
import Nav from "./Components/Nav";
import Register from "./Components/Register";
import Contributor from "./Components/Contributor";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/volunteer" component={Volunteer}></Route>
          <Route path="/contributor" component={Contributor}></Route>
          <Route path="/register" component={Register}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}
export default App;
