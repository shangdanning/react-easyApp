import React from 'react';
import Child from './child'
class TestRender extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            baseKeyList: [{ id: 1, name: '哈哈' }, { id: 2, name: '啊啊' }],
            inputValue: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleAddItem = this.handleAddItem.bind(this);
    };
    handleChange(event) {
        this.setState({
            inputValue: event.target.value,
        });
    };
    handleAddItem() {
        const list = this.state.baseKeyList.slice();
        list.push({ id: this.state.baseKeyList.length + 1, name: this.state.inputValue });
        this.setState({
            baseKeyList: list,
            inputValue: ''
        });
    }
    render() {
        return (
            <div>

                <div style={{ backgroundColor: 'pink', height: '50px' }}>
                    <input type='text' value={this.state.inputValue} onChange={this.handleChange} />
                    <button onClick={this.handleAddItem}>添加</button>
                </div>
                <Child baseList={this.state.baseKeyList} />
            </div>
        );
    };
}
export default TestRender;