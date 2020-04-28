import React from 'react';
class Child extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            keyList: [],
            inputValue: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleAddItem = this.handleAddItem.bind(this);
    };
    componentWillMount() {
        // console.log(this.props.baseList)
    }
    handleChange(event) {
        this.setState({
            inputValue: event.target.value,
        });
    };
    handleAddItem() {
        const list = this.state.keyList.slice();
        list.push({ id: 'v' + this.state.keyList.length + 1, name: this.state.inputValue });
        this.setState({
            keyList: list,
            inputValue: ''
        });
    }
    render() {
        const baseList = this.props.baseList;
        const tempList = this.state.keyList;
        const keyList = baseList.concat(tempList);
        return (
            <div>
                <ul>
                    {keyList.map((item) => {
                        return (
                            <li key={item.id}>{item.name}</li>
                        );
                    })}
                </ul>
                <div>
                    <input type='text' value={this.state.inputValue} onChange={this.handleChange} />
                    <button onClick={this.handleAddItem}>添加</button>
                </div>
            </div>
        );
    }
}

export default Child;