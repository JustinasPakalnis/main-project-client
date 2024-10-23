import { useContext } from "react";
import style from "./General.module.css";
import { GlobalContext } from "../../context/GlobalContext";
import { LoginContext } from "../../context/LoginContext.jsx";
import ButtonSmall from "../buttons/ButtonSmall.jsx";
const Notification = ({ text }) => {
  const { notificationPrompt, createUpadateNotification } =
    useContext(GlobalContext);

  return (
    <>
      <div
        className={style.notificationBox}
        data-visible={createUpadateNotification}
      >
        <h2 className={style.notificationTitle}>{notificationPrompt}</h2>
      </div>
    </>
  );
};

export default Notification;
