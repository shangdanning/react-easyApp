import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from './App';
// import Game from './ticTacToe/game';
// import Clock from './baseStudy/Clock';
import Greeting from "./baseStudy/Greeting";
import * as serviceWorker from "./serviceWorker";

// ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<Game />, document.getElementById("root"));
// ReactDOM.render(<Clock name="sdn"/>, document.getElementById("root"));
ReactDOM.render(
  <Greeting isLoggedIn={true} />,
  document.getElementById("root")
);
//2020-04-02===================================================
// function tick() {
//   const element = (
//     <div>
//       <h1>Hello,world!</h1>
//       <h2>it is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   ReactDOM.render(element, document.getElementById("root"));
// }
// setInterval(tick, 1000);
//**********==================================================
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
