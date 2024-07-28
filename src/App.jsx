import { useState } from "react";
import "./App.css";

function App() {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showText, setShowText] = useState(false);
  const [showError, setShowError] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault();

    if (userName === "user" && password === "password") {
      setShowText(true);
      setShowError("");
    } else {
      setShowError("Invalid username and password");
      setUsername("");
      setPassword("");
    }
  };

  return (
    <div className="login-container">
      <h1>Login Page</h1>
      {showText ? (
        <h1>Welcome user!</h1>
      ) : (
        <form onSubmit={handlesubmit}>
          {showError && <p>{showError}</p>}
          <label>UserName:</label>
          <input
            onChange={(e) => setUsername(e.target.value)}
            value={userName}
            type="text"
            placeholder="username"
            required
          />
          <label>Password:</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            placeholder="password"
            required
          />
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
}

export default App;
