import React, { useState, useContext } from "react";
import style from "./Login.module.css";
import { LoginContext } from "../context/LoginContext";
import { IoCloseSharp } from "react-icons/io5";
const Login = () => {
  const { handleLogin, message, loginMessage, handleLoginMessage } =
    useContext(LoginContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <section className={style.loginContainer}>
      <section className={style.infoContainer}>
        <div className={style.hostingDetails}>
          <h3>Hosting Information</h3>
          <ul>
            <li>
              <strong>Server:</strong> render.com
            </li>
            <li>
              <strong>SQL Database:</strong> Cloud.Google.com
            </li>
            <li>
              <strong>Frontend:</strong> vercel.com
            </li>
          </ul>
        </div>

        <div className={style.testAccounts}>
          <h3>Test Accounts</h3>
          <ul>
            <li>Email: user1@mail.com | Pass: 123 | Antanas Antanaitis</li>
            <li>Email: user2@mail.com | Pass: 123 | Jonas Paviljonas</li>
            <li>Email: user3@mail.com | Pass: 123 | Petras Petraitis</li>
            <li>Email: user4@mail.com | Pass: 123 | Marytė Marytaitė</li>
            <li>Email: user5@mail.com | Pass: 123 | Homer Simpson</li>
          </ul>
        </div>

        <div className={style.pendingFeatures}>
          <h3>Pending Features</h3>
          <ul>
            <li>Former Personnel</li>
            <li>Active Personnel</li>
            <li>Statistics Page</li>
            <li>Major Restyling</li>
            <li>Login Token to Maintain Session</li>
            <li>User Role-Based Interface</li>
            <li>Extended Account Details</li>
            <li>Project management section?Maybe???</li>
          </ul>
        </div>

        <div className={style.note}>
          <p>
            Manage your inventory: create new items, transfer them between
            users, add new users, update item details, and leave comments or
            feedback on users. Transfers can only be done from item owner
            account.
          </p>
          <p>
            Daily developing. Feel free to explore, test new features, and enjoy
            my learning journey. Your feedback helps shape what's next. Just
            remember to play nice there!
          </p>
          <address>
            +37069242305, Justinas Pakalnis,{" "}
            <a href="mailto:Justinas.p@inbox.lt">Justinas.p@inbox.lt</a>
          </address>
        </div>
      </section>
      <form
        className={style.login}
        onSubmit={(e) => handleLogin(e, email, password)}
      >
        <h2 className={style.title}>To acces you have to log in</h2>
        <div>
          <label className={style.label}>User email: </label>
          <input
            className={style.field}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label className={style.label}>Password: </label>
          <input
            className={style.field}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button className={style.button} type="submit">
          Login
        </button>
        {message && <p className={style.message}>{message}</p>}
        <div className={style.loginMessage} data-message={loginMessage}>
          <p>If you want to create account, please contact customer support!</p>
          <IoCloseSharp
            onClick={handleLoginMessage}
            className={style.loginClose}
          />
        </div>
      </form>
    </section>
  );
};

export default Login;
