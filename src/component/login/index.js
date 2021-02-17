import React, { useState } from "react";
import { messages, passwordRegex } from "./constant";
import "./index.scss";

export const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      alert(messages.email);
    } else if (!password.match(passwordRegex)) {
      alert(messages.password);
    } else {
      onLogin(true);
    }
  };

  return (
    <div className="login  position-relative h-100 mx-auto ">
      <main className="card w-25 mx-auto my-5">
        <form className="card-body  " onSubmit={handleSubmit}>
          <div className="mx-2">
            <h1 className="user-login">User login</h1>
            <label htmlFor="inputEmail" className="mt-2">
              Email address
            </label>
            <input
              type="email"
              id="inputEmail"
              className="form-control mt-3"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoFocus
              required
            />
            <label htmlFor="inputPassword" className="mt-3">
              Password
            </label>
            <input
              type="password"
              id="inputPassword"
              className="form-control mt-3"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className=" btn btn-success w-25 mt-5 ml-4" type="submit">
              LOGIN
            </button>
            <button className=" btn btn-success w-50 mt-5 ml-5" type="submit">
              LOGIN WITH GOOGLE
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};
export default Login;
