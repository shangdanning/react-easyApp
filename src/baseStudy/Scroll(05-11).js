import React, { useEffect } from "react";
import "./Scroll(05-11).css";
function Scroll() {

    useEffect(() => {
        window.addEventListener('scroll', bindHandleScroll);
    });
    function bindHandleScroll(event) {
        console.log(event);
    }
    return <div className="scroll-box"> .</div>;
}

export default Scroll;
