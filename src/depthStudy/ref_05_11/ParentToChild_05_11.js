import React, { Component } from 'react';

export default class Parent extends Component {
    render() {
        return (
            <div>
                <Child onRef={this.onRef} />
                <button onClick={this.click} >click</button>
            </div>
        )
    }
    //定义一个拿子组件返回值this的函数
    onRef = (ref) => {
        this.child = ref
    }
    //调用处理函数
    click = (e) => {
        this.child.myName()
    }

}

class Child extends Component {
    componentDidMount() {
        //通过pros接收父组件传来的方法
        this.props.onRef(this)
    }

    myName = () => alert('子组件fn')

    render() {
        return ('ch')
    }
}