import React from 'react';
import './Message.css';
import { Avatar } from '@material-ui/core';

function Message() {
    return (
        <div className="message">
            <Avatar />
            <div className="message-info">
                <h4>
                    @ProgrammingWithGaurav
                    <span className="message-timestamp">TimeStamp</span>
                </h4>
                This is Message
            </div>
        </div>
    )
}

export default Message
