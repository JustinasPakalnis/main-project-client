import style from "./Header.module.css";
import { LoginContext } from "../../context/LoginContext.jsx";
import React, { useContext } from "react";
import { IoIosLogOut } from "react-icons/io";
const Header = () => {
  const {
    darkTheme,
    handleDarkThemeToggle,
    authorizedUser,
    handleLogOut,
    isAuthenticated,
  } = useContext(LoginContext);

  return (
    <header className={style.headerContainer}>
      <div className={style.headerUser}>
        {authorizedUser.firstName && authorizedUser.lastName && (
          <>
            <p>User Type:</p>
            <p>{authorizedUser.userType}</p>
          </>
        )}
      </div>
      <div className={style.headerContent}>
        <h1>Justinas Pakalnis</h1>
        <p>FullStack Developer</p>
      </div>
      <div className={style.headerUser}>
        {authorizedUser.firstName && authorizedUser.lastName && (
          <>
            <p>Session:</p>
            <p>
              {authorizedUser.firstName} {authorizedUser.lastName}
            </p>
          </>
        )}
      </div>
      {isAuthenticated && (
        <IoIosLogOut onClick={handleLogOut} className={style.logOut} />
      )}
    </header>
  );
};
export default Header;
