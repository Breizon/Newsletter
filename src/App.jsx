import { useState } from "react";
import "./App.css";
import Card from "./components/Card/Card";
import Message from "./components/Message/Message";

function App() {
  const [form_submit, setForm_submit] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailInput = e.target.elements["form-input"].value;
    setEmail(emailInput);
    setForm_submit(true);
  };

  const handleDismiss = () => {
    setForm_submit(false);
    setEmail("");
  };

  return (
    <div className="App">
      {!form_submit ? (
        <Card onSubmit={handleSubmit} />
      ) : (
        <Message userEmail={email} onDismiss={handleDismiss} />
      )}
    </div>
  );
}

export default App;
