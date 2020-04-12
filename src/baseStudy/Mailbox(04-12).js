import React from "react";

function Mailbox(props) {
    const unreadMessages = props.unreadMessages;
    return (<div>
        <h1>Hello!</h1>
        {unreadMessages.length > 0 &&
            <h2>
                You have {unreadMessages.length} unread messages.
  </h2>
        }
        {/* 不会显示true */}
        {
            true
        }
        {/* 会显示0 */}
        {
            0
        }
    </div>);
}
export default Mailbox;