import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";
function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = e => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then(auth => {
        //if auth exists then go to home page
        if (auth) history.push("/");
      })
      .catch(error => alert(error.message));
  };
  const register = e => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then(auth => {
        //if auth exists then go to home page
        if (auth) history.push("/");
        //successfully made a user with respective email and password
        console.log(auth);
      })
      .catch(error => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__image"
          src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0NDQ0NDQ0NDQ4NCA0NDQ0ODQ8PDQ0NFREWFhURFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODUtNygtMCsBCgoKDg0NGg8QGi0dHR0uKzctLSstLS0vLSsuKystNS0rKy0vKy0tKystLS0rLS0rKysrNystLS0tLS0tKzcrK//AABEIAJcBTgMBIgACEQEDEQH/xAAaAAEAAwEBAQAAAAAAAAAAAAAAAQIDBAUG/8QAMRABAAIBAgIJAgQHAAAAAAAAAAECEQMEEiETMTJBUWFxkaFSgQUiQtEUQ2JyseHx/8QAGQEBAQEBAQEAAAAAAAAAAAAAAAECAwQG/8QAHhEBAQADAAIDAQAAAAAAAAAAAAECERIDQSExURP/2gAMAwEAAhEDEQA/APqQHwD64AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAFAAAAAAAAAVyZFTkyrlGUNL5MqZOI2ul8pypEpEWEECJAUAAAAAAAAAAAAARKAZRMs76uE3pZNtomF50pxnu8nnX1Z8W+23fdnE/EtyyxMsbPptNUN41a27UYnxjqLaPfHOEuF9M9frDKcptRSYY3Y38LZMq5Mp0aXMqcRxL1DS2TKuUZOjS2UTKOJWbLtdL5RllbUiHNq72I6iXda5dlrYNP83U8Pcbq1uufs4NbXv9Vsf3S9GHinsxxuXxH10xWOv5nBFqz1cPw+L0Nvqa04pS1/Gcco9ZnkvuNvqbe0VvHDMxmMTExMesN3xT9dP4z638vsson9nH+FXtbRrNpzOZ5z14y65nnPs82Xw461dLJhWEoiwAgAoAAAAAAAAAAKzKysorO8sLOi0MrQxW457MrQ6bVZ2qS6aNHdzXlbnHj3w79LViedbe0vMtRSM1nNZmJ8m5klxle5GtPfET8E8M+Xq83S3sxyvH3j9nXp61bdm0T5d/s3uX7crhppOn4c/RSarJzPixfFPRussDZHDHh8sXw1emEyrN3ROnHn7qzoVnx9yeKtTKOW2thz6u6w9Cdpp98TP3kjZ6Ufy6z6xn/Lrj4v0/pPTw9TcTbkU2utfs6dvWY4Y+X0NaVr2YiPSIgy6SSM92vFp+D6k9u1a+UZtLq0fwnQrzmvST/XOY9upvrb3Tr38U+Febz9xvtS/Kv5I8u17lyrUuTr3e+09CMcptEcqV5Y9fB81u9e+41YtfujFYjqrHhDqvozPVH+2v4XsrdLXjrMYninMY6mscpjNu2GsZv29za6fR6dK/TSM+v/AFeE25kQ81u64phJCYVmpAVAAAAAAAAAAAABEpAUmFJhrhEwzpqVhNVJo6JqrNWbGpXNNFJo6Zqiao1tyzRSdN1zRE0XYxpraleq2fXm2rvZ/VX2lWdNE6bUyqWRvXe074tH2aRutP6viXH0aOiXtOY7v4jT+uvuTudP64cHRJ6I7OI653mnH6pn0iWdt/XurafXEMOiI0j+hxE33t56oivzLC83v2rTPlnl7Omug1roQnVq6kcFdCZ7m+ns/F2104hbB8pcmWnoVr1R92mFsBpnaMJiAUEwhIiQFQAAAAAAAAAAAAAAABGETCwis5hHC0wYTS7Z8KOFpgwaNs+FHA1wYTS9MuA4GuE4NHTHgOBtgwcnTHgWijTCV5TpSKrYSLpEYMJBBGEgIwYSAAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/Z"
          alt="amazonLogo"
        />
      </Link>
      <div className="login__container">
        <h1>Sign In</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />

          <p>TERMS AND CONDITIONS</p>

          <button onClick={signIn} className="login__signInButton">
            Sign In
          </button>
        </form>

        <button onClick={register} className="login__registerButton">
          Create Your Account
        </button>
      </div>
    </div>
  );
}

export default Login;
