import { useState } from "react";

import "./Signup.css";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [thumbnail, setThumbnail] = useState(null);

  return (
    <div>
      <form className="auth-form">
        <h2>Sign Up</h2>
        <label>
          <span>Email: </span>
          <input
            type="email"
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>

        <label>
          <span>Password: </span>
          <input
            type="password"
            required
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </label>

        <label>
          <span>Display Name: </span>
          <input
            type="text"
            required
            onChange={(e) => setDisplayName(e.target.value)}
            value={displayName}
          />
        </label>

        <label>
          <span>Profile Picture:</span>
          <input type="file" required />
        </label>

        <button className="btn">Sign Up</button>
      </form>
    </div>
  );
}
