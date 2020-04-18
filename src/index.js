import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from './App';
// import Game from './ticTacToe/game';
// import Clock from './baseStudy/Clock';
// import Greeting from "./baseStudy/Greeting";
// import LoginControl from "./baseStudy/LoginControl(04-12)";
// import Mailbox from "./baseStudy/Mailbox(04-12)";
// import PageWarn from "./baseStudy/PageWarn(04-12)";
// import NumberList from "./baseStudy/NumberList(04-12)";
// import NameForm from "./baseStudy/NameForm(04-12)";
// import Calculator from "./baseStudy/Calculator(04-13)";
// import Calculator from "./baseStudy/Calculator02(04-13)";
//=====================04-18=============================
// import Context from "./depthStudy/Context_04_18";
import Context from "./depthStudy/Context_sum_04_18";
import * as serviceWorker from "./serviceWorker";

// ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<Game />, document.getElementById("root"));
// ReactDOM.render(<Clock name="sdn"/>, document.getElementById("root"));
// ReactDOM.render( <LoginControl />, document.getElementById("root"));
// ReactDOM.render(
//   <Mailbox unreadMessages={['React', 'Re: React', 'Re:Re: React']} />,
//   document.getElementById("root")
// );
// ReactDOM.render(
//   <Mailbox unreadMessages={[]} />,
//   document.getElementById("root")
// );
// ReactDOM.render( <PageWarn />, document.getElementById("root"));

// ReactDOM.render(<NumberList numbers={[1, 2, 3, 4, 5]} />, document.getElementById("root"));
// ReactDOM.render( <NameForm />, document.getElementById("root"));
// ReactDOM.render( <Calculator />, document.getElementById("root"));
//=======================04-18=======================================
ReactDOM.render( <Context />, document.getElementById("root"));
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
