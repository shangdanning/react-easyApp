import React, { Component, Suspense, lazy } from 'react';
let TestComp = lazy(()=>import('./test.js'))
export default class Main extends Component {
    render() {
        return(
            <Suspense fallback="正在加载中...">
                <TestComp />
            </Suspense>
        )
    }
}