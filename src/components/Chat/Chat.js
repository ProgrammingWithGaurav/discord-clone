import React, { useState, useEffect } from 'react';
import ChatHeader from '../ChatHeader/ChatHeader';
import './Chat.css';
// Icons
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import GifIcon from '@material-ui/icons/Gif';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions'
import Message from '../Message/Message';
import { useSelector } from 'react-redux';
import { selectChannelId, selectChannelName } from '../../features/appSlice';
import { selectUser } from '../../features/userSlice';
import db from '../../firebase';
import firebase from 'firebase';

function Chat() {
    const channelId = useSelector(selectChannelId);
    const user = useSelector(selectUser);
    const channelName = useSelector(selectChannelName);
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        if (channelId) {
            db.collection('channels')
                .doc(channelId)
                .collection('messages')
                .orderBy('timestamp', 'asc')
                .onSnapshot((snapshot) => (
                    setMessages(snapshot.docs.map((doc) => doc.data()))
                ))
        }
    }, [channelId])

    const sendMessage = (e) => {
        e.preventDefault();
        db.collection('channels')
            .doc(channelId)
            .collection('messages')
            .add({
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                message: input,
                user: user,
            })
        setInput('');
    }

    return (
        <div className="chat">
            <ChatHeader channelName={channelName} />

            <div className="chat-messages">
                {messages.map((message) => (
                    <Message timestamp={message.timestamp} message={message.message} user={message.user} />
                ))}
            </div>

            <div className="chat-input">
                <AddCircleIcon fontSize="large" className="add-file" />
                <form>
                    <input value={input} disabled={!channelId} onChange={e => setInput(e.target.value)} placeholder={`Messages #${channelName}`} />
                    <button type="submit" onClick={sendMessage} className="chat-inputButton">Send Message</button>
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
