import { useEffect, useState } from "react";
import axios from "axios";

interface Message {
  text: string;
  user: string;
  added: Date;
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
          <div>
            <p>{message.text}</p>
            <p>{message.user}</p>
          </div>
        ))
      ) : (
        <p>Loading messages...</p>
      )}
    </div>
  );
}

export default MyComponent;
