import React from "react";
function WarningBanner(props) {
    // if (!props.warn) {
    //     return null;
    // }
    return (
        <div>Warning!</div>
    );
}
class PageWarn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showWarning: true
        };
        this.handleToggleClick = this.handleToggleClick.bind(this);
    }
    handleToggleClick() {
        this.setState(state => ({
            showWarning: !state.showWarning
        }));
    }
    render() {
        return (
            <div>
                {this.state.showWarning && <WarningBanner />}
                {/* <WarningBanner warn={this.state.showWarning} /> */}
                <button onClick={this.handleToggleClick}>{this.state.showWarning ? 'Hide' : 'Show'}</button>
            </div>
        );
    }
}
export default PageWarn;