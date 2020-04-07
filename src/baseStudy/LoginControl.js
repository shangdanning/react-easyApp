import React from "react";
import Greeting from "./Greeting";
class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }
  handleLoginClick() {
    this.setState({ isLoggedIn: true });
  }
}
