import React from "react";
// function NumberList(props) {
//     const numbers = props.numbers;
//     const listItems = numbers.map((number) =>
//         <li key={number.toString()}>
//             {number}
//         </li>);
//     return (<ul>{listItems}</ul>);

// }

//在jsx中嵌入map()
function NumberList(props) {
    const numbers = props.numbers;
    return (<ul>{
        numbers.map((number) => (
            <li key={number.toString()}>{number}</li>
        ))
    }</ul>);
}
export default NumberList;