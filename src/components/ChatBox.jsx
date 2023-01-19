import React, { useEffect, useRef, useState } from "react";
import { displayMessage } from "../utils/displayMessage";
import Message from "./Message";
import SendMessage from "./SendMessage";

const ChatBox = () => {
  const [messages, setMessages] = useState([{
    id: null,
  }]);
  const scroll = useRef(null);

  useEffect(() => {
    displayMessage(setMessages);
  }, []);

  return (
    <main className="chat-box">
      <div className="messages-wrapper">
        {messages?.map((message) => (
          <Message key={message.id} message={message} />
        ))}
      </div>
      {/* when a new message enters the chat, the screen scrolls dowwn to the scroll div */}
      <span ref={scroll}></span>
      <SendMessage scroll={scroll} />
    </main>
  );
};
export default ChatBox;

