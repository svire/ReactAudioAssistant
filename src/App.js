import React from "react";
//import Aux from "./hoc/Aux";
import "./App.css";
import {withRouter} from "react-router-dom";

import ErrorComp from "./components/Error/ErrorComp";
import Layout from "./components/Layout/Layout";
import Dictaphone from "./components/Dictaphone/Dictaphone";
import Routes from "./components/Routes/Routes";
import CommandComp from "./components/Command/CommandComp";

const App = (props) => {
  return (
    <div className='App'>
      <Layout />
      <div className='Container'>
        <nav className='NavLeft'>
          <CommandComp />
        </nav>
        <section>
          <Dictaphone history={props.history} {...props} />
          <Routes />
        </section>
        <aside>
          <ErrorComp />
        </aside>
        <footer>Footer</footer>
      </div>
    </div>
  );
};

export default withRouter(App);
/*

  <Dictaphone history={props.history} {...props} />

 <div style={{marginTop: "85px"}}></div>
        <button onClick={() => Amaha("cart")}>Amas</button>

        <Errory />
*/
