import React, { useState } from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import "./main.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeGuest from "./components/HomeGuest";
import About from "./components/About";
import Terms from "./components/Terms";
import Home from "./components/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function Main() {
  const [LoggedIn, setLoggedIn] = useState(Boolean(localStorage.getItem("complexappToken")));

  return (
    <BrowserRouter>
      <Header LoggedIn={LoggedIn} setLoggedIn={setLoggedIn} />
      <Switch>
        <Route path="/" exact>
          {LoggedIn ? <Home /> : <HomeGuest />}
        </Route>
        <Route path="/about-us">
          <About />
        </Route>
        <Route path="/terms">
          <Terms />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

ReactDOM.render(<Main />, document.getElementById("app"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
