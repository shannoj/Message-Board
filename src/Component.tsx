import { useEffect, useState } from "react";
import axios from "axios";

interface Message {
  text: string;
  user: string;
  added: string;
}

function MyComponent() {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    axios.get<Message[]>("http://localhost:5000").then((response) => {
      setMessages(response.data);
      console.log(response.data);
    });
  }, []);

  return (
    <div>
      {messages.length > 0 ? (
        messages.map((message) => (
          <div key={message.added} >
            <p>{message.text} -{message.user} at {message.added}</p>
          </div>
        ))
      ) : (
        <p>Loading messages...</p>
      )}
    </div>
  );
}

export default MyComponent;
