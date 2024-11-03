import { createContext, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
export const initialContext = {
  isAuthenticated: false,
  authorizedUser: {},
  loginMessage: false,
  message: null,
  handleAuthentication: () => {},
  handleLogin: () => {},
  handleLoginMessage: () => {},
  handleLogOut: () => {},
};
export const LoginContext = createContext(initialContext);

export function LoginWrapper(props) {
  const location = useLocation();
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(
    initialContext.isAuthenticated
  );

  const [authorizedUser, setAuthorizedUser] = useState(
    initialContext.authorizedUser
  );
  const [message, setMessage] = useState(initialContext.message);
  const [loginMessage, setLoginMessage] = useState(initialContext.loginMessage);

  useEffect(() => {
    sessionStorage.setItem("lastVisitedPath", location.pathname);
  }, [location]);
  useEffect(() => {
    const lastVisitedPath =
      sessionStorage.getItem("lastVisitedPath") || "/main";
    const loginTokenLocalSession = JSON.parse(
      sessionStorage.getItem("isLogInAuthorized")
    );
    const authorizedUserLocalSession = JSON.parse(
      sessionStorage.getItem("authorizedUser")
    );
    if (loginTokenLocalSession && authorizedUserLocalSession) {
      setIsAuthenticated(loginTokenLocalSession);
      setAuthorizedUser(authorizedUserLocalSession);
      navigate("/main");
      // navigate(lastVisitedPath);
    } else {
      navigate("/");
    }
  }, []);

  const handleLoginMessage = () => {
    setLoginMessage(false);
  };
  const handleLogOut = () => {
    setIsAuthenticated(false);
    setAuthorizedUser(initialContext.authorizedUser);
    sessionStorage.removeItem("isLogInAuthorized");
    sessionStorage.removeItem("authorizedUser");
    navigate("/");
  };
  const serverAPI = "https://main-project-server.onrender.com";
  const handleLogin = async (e, email, password) => {
    e.preventDefault();

    try {
      const response = await axios.post(serverAPI + "/api/login", {
        email: email,
        password: password,
      });

      if (response.data.message === "Login approved") {
        const user = {
          userID: response.data.user.id,
          firstName: response.data.user.firstName,
          lastName: response.data.user.lastName,
          userType: response.data.user.type,
        };
        setAuthorizedUser(user);
        setIsAuthenticated(true);
        sessionStorage.setItem("isLogInAuthorized", JSON.stringify(true));
        sessionStorage.setItem("authorizedUser", JSON.stringify(user));
        navigate("/main");
      }
      if (
        response.data.message === "Login denied, incorrect password" ||
        response.data.message === "User not found"
      ) {
        setMessage("LOGIN HAS BEEN DENIED!");
        setTimeout(() => {
          setMessage(null);
        }, 3000);
        setTimeout(() => {
          setLoginMessage(true);
        }, 3000);
      }
    } catch (error) {
      console.error("Login error:", error);
      setMessage("Server error!");
      setTimeout(() => {
        setMessage(null);
      }, 3000);
      setTimeout(() => {
        setLoginMessage(true);
      }, 3000);
    }
  };

  const authorizedUserFullName = `${authorizedUser.firstName} ${authorizedUser.lastName}`;

  const value = {
    isAuthenticated,
    handleLogin,
    message,
    authorizedUser,
    loginMessage,
    handleLoginMessage,
    handleLogOut,
    authorizedUserFullName,
  };
  return (
    <LoginContext.Provider value={value}>
      {props.children}
    </LoginContext.Provider>
  );
}
