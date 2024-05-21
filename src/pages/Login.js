import React, { useState } from "react";
import "../styles/Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const allowedEmail = "admin@gmail.com";
    const allowedPassword = "123456789";

    if (email === allowedEmail && password === allowedPassword) {
      console.log("Login successful!");
      try {
        const response = await fetch("https://api.apispreadsheets.com/data/dx5hDvBO8sOoum6l/", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
    
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
    
        const result = await response.json();
        setData(result.data);
        setLoggedIn(true);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    } else {
      console.log("Invalid email or password");
      alert("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="Login">
      {!loggedIn ? (
        <>
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button className="login-button" type="submit">Login</button>
          </form>
        </>
      ) : (
        <div className="data-table">
          <h2>Fetched Data</h2>
          <table>
            <thead>
              <tr>
                {data && data.length > 0 && Object.keys(data[0]).map((key) => (
                  <th key={key}>{key}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data && data.map((row, index) => (
                <tr key={index}>
                  {Object.values(row).map((value, i) => (
                    <td key={i}>{value}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
