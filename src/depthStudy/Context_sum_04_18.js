import React from "react";
import "./css/base.css";
// Context 可以让我们无须明确地传遍每一个组件，就能将值深入传递进组件树。
// 为当前的 theme 创建一个 context（“light”为默认值）。
const ThemeContext = React.createContext(0);
ThemeContext.displayName = "themeContext";
const ColorContext = React.createContext('red');
ColorContext.displayName = "colorContext";
class Context extends React.Component {
    render() {
        // 使用一个 Provider 来将当前的 theme 传递给以下的组件树。
        // 无论多深，任何组件都能读取这个值。
        // 在这个例子中，我们将 “dark” 作为当前的值传递下去。
        return (
            <ThemeContext.Provider value="dark">
                <ColorContext.Provider value="blue">
                    <Toolbar />
                </ColorContext.Provider>
            </ThemeContext.Provider>
        );
    }
}

// 中间的组件再也不必指明往下传递 theme 了。
function Toolbar() {
    return (
        <div>
            <ThemedButton />
        </div>
    );
}

class ThemedButton extends React.Component {
    render() {

        return (
            <ThemeContext.Consumer>
                {theme => (
                    <ColorContext.Consumer>
                        {
                            color => (
                                <button theme={theme} color={color} className="square" />
                            )
                        }
                    </ColorContext.Consumer>
                )}
            </ThemeContext.Consumer>
        );
        // return <button theme={this.context} color={this.colorContext} className="square" />;
    }
}
export default Context;