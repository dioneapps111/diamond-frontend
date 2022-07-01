import React from "react";
import "primereact/resources/primereact.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import "prismjs/themes/prism-coy.css";
import "./App.scss";
import "./assets/css/App.css";
import Admin from "./components/Admin";
import Web from "./components/Web";
import { Route } from "react-router-dom";

const App = () => {

  return (
    <>
      <Route path="/" exact render={() => <Web />} />
      <Route path="/admin" exact render={() => <Admin />}>
      </Route>
    </>

  );
};

export default App;
