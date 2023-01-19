import React, { useState } from "react";
import settingsSendMessage from "../utils/settingsSendMessage";

const SendMessage = ({ scroll }) => {
  const [message, setMessage] = useState("");

  const sendMessage = settingsSendMessage(message, setMessage, scroll);
  return (
    <form onSubmit={(event) => sendMessage(event)} className="send-message">
      <label htmlFor="messageInput" hidden>
        Enter Message
      </label>
      <input
        id="messageInput"
        name="messageInput"
        type="text"
        className="form-input__input"
        placeholder="type message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}

      />
      <button type="submit">Send</button>
    </form>
  );
};

export default SendMessage;


