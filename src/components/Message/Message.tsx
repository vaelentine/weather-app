import React from "react";

interface MessageProps {
    messageData:any
}

const Message: React.FC<MessageProps> = ({ messageData }) => {
  return (
    <div className="message">
        API Error: {messageData.message}
    </div>
  )
}

export default Message
