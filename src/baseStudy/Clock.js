import React from "react";
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // date: new Date().toLocaleTimeString()
      date: 10,
    };
    // 为了在回调中使用 `this`，这个绑定是必不可少的
    // this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    // this.timer = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  tick() {
    // this.setState({
    // date: new Date().toLocaleTimeString()
    // date: this.state.date + 10,
    // });
    this.setState((state) => ({
      date: state.date + 10,
    }));
  }
  handleClick() {
    // alert("111");
    // alert(this.state.date+10);
    // this.setState((state)=>({
    //   date:state.date+10
    // }));
    this.setState({ date: this.state.date + 10 });
  };
  render() {
      // 此语法确保 `handleClick` 内的 `this` 已被绑定。
    return (
      <div>
        <h1 onClick={()=>this.handleClick()}>Hello!{this.props.name}</h1>
        <h2>it is {this.state.date}.</h2>
      </div>
    );
  }
}
export default Clock;
