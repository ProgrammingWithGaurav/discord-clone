import React from 'react';
import ChatHeader from '../ChatHeader/ChatHeader';
import './Chat.css';
// Icons
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import GifIcon from '@material-ui/icons/Gif';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions'
import Message from '../Message/Message';

function Chat() {
    return (
        <div className="chat">
            <ChatHeader />

            <div className="chat-messages">
                <Message />
            </div>

            <div className="chat-input">
                <AddCircleIcon fontSize="large" className="add-file"/>
                <form>
                    <input placeholder={`Messages #TestChannel`} />
                    <button type="submit" className="chat-inputButton">Send Message</button>
                </form>

                <div className="chat-inputIcons">
                    <CardGiftcardIcon />
                    <GifIcon />
                    <EmojiEmotionsIcon />
                </div>
            </div>
        </div>
    )
}

export default Chat
