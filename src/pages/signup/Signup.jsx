import { useState } from "react";

import "./Signup.css";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [thumbnail, setThumbnail] = useState(null);
  const [thumbnailError, setThumbnailError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password, displayName, thumbnail, thumbnailError);
  };

  const handleFileChange = (e) => {
    setThumbnail(null);
    let selectedFile = e.target.files[0];
    console.log(selectedFile);

    if (!selectedFile) {
      setThumbnailError("Please select a file.");
      return;
    }
    if (!selectedFile.type.includes("image")) {
      setThumbnailError("Please select image files only");
      return;
    }

    if (selectedFile.size > 200000) {
      setThumbnailError("The image size must be less than 200kb");
      return;
    }

    setThumbnailError(null);
    setThumbnail(selectedFile);
    console.log("Thumbnail updated");
  };

  return (
    <div>
      <form className="auth-form" onSubmit={handleSubmit}>
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
          <input type="file" required onChange={handleFileChange} />
          {thumbnailError && <div className="error">{thumbnailError}</div>}
        </label>

        <button className="btn">Sign Up</button>
      </form>
    </div>
  );
}
