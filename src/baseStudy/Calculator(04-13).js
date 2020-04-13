import React from "react";
function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>The water would bioil.</p>;
    }
    return <p>The water would not boil.</p>;
}
class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            temperature: ''
        }
    }
    handleChange(event) {
        this.setState({
            temperature: event.target.value
        })
    }
    render() {
        const temperature = this.state.temperature;
        return (
            <fieldset>
                <legend>Enter temperature in celsius:</legend>
                <input type='text' value={this.state.temperature} onChange={this.handleChange} />
                <BoilingVerdict celsius={parseFloat(temperature)} />
            </fieldset>
        );
    }
}
export default Calculator;