import React, {useState} from "react";
import "./styles.css";

export default function App() {

  const [message, setMessage] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const updateMessage = () => {
    setMessage();
  };

  return (
    <div className="App">
      <div className="status-update">
        <h1>Super Short Status!</h1>
        <p>Tell us how you are doing in 60 characters or less!</p>
        <form>
          <textarea placeholder="What's good?" value={message} onChange={updateMessage} />
          <button type="submit">Tell the world!</button>
        </form>
      </div>
    </div>
  );
}
