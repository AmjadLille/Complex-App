import React, { useState } from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import "./main.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Axios from "axios";

import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeGuest from "./components/HomeGuest";
import About from "./components/About";
import Terms from "./components/Terms";
import Home from "./components/Home";
import CreatePost from "./components/CreatePost";
import ViewSinglePost from "./components/ViewSinglePost";
import FlashMessages from "./components/FlashMessages";
Axios.defaults.baseURL = "http://localhost:8080/";

function Main() {
  const [LoggedIn, setLoggedIn] = useState(Boolean(localStorage.getItem("complexappToken")));
  const [flashMessages, setFlashMessages] = useState([]);

  const addFlashMessages = (msg) => {
    setFlashMessages((prev) => prev.concat(msg));
  };

  return (
    <BrowserRouter>
      <FlashMessages messages={flashMessages} />
      <Header LoggedIn={LoggedIn} setLoggedIn={setLoggedIn} />
      <Switch>
        <Route path="/" exact>
          {LoggedIn ? <Home /> : <HomeGuest />}
        </Route>
        <Route path="/post/:id">
          <ViewSinglePost />
        </Route>
        <Route path="/about-us">
          <About />
        </Route>
        <Route path="/terms">
          <Terms />
        </Route>
        <Route path="/create-post">
          <CreatePost addFlashMessages={addFlashMessages} />
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
