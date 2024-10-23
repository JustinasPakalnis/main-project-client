import { useContext } from "react";
import style from "./General.module.css";
import { GlobalContext } from "../../context/GlobalContext";
import { LoginContext } from "../../context/LoginContext.jsx";
import Notification from "./Notification.jsx";
import ButtonSmall from "../buttons/ButtonSmall.jsx";
const TransferList = ({ type }) => {
  const {
    transferListData,
    acceptTransfer,
    declineTransfer,
    notificationPrompt,
  } = useContext(GlobalContext);
  const { authorizedUser } = useContext(LoginContext);

  let displayedIndex = 0;
  return (
    <>
      <div className={style.mainListContainer}>
        <Notification text={notificationPrompt}></Notification>
        <h1 className={style.headerTitle}>Your pending transfers</h1>
        <div className={style.listContainer}>
          <div className={style.itemListContainer}>
            <div className={style.headerRow}>
              <p className={style.nr1}>Item</p>
              <p className={style.nr2}>From user</p>
              <p className={style.nr2}>To user</p>
              <p className={style.nr4}>Condition</p>
              <p className={style.nr2}>Date created</p>
              <p className={style.nr1}>Comment</p>
            </div>
            <ul className={style.list}>
              {transferListData.map((item) =>
                item.status === "pending" &&
                authorizedUser.userID === item.to_user ? (
                  <li
                    className={
                      displayedIndex++ % 2 === 0
                        ? style.listItem
                        : `${style.listItem} ${style.listItem2}`
                    }
                    key={item.id}
                  >
                    <p className={style.nr1}>{item.item}</p>
                    <p className={style.nr2}>{item.fromUserFullName}</p>
                    <p className={style.nr2}>{item.toUserFullName}</p>
                    <p className={style.nr4}>{item.condition}</p>
                    <p className={style.nr2}>
                      {item.transfer_date.split("T").join(" ").slice(0, 16)}
                    </p>
                    <p className={style.nr1}>{item.transfer_comment}</p>
                    <ButtonSmall
                      onClick={(e) => acceptTransfer(e, item.item_id, item.id)}
                      text={"Accept"}
                    />
                    <ButtonSmall
                      onClick={(e) => declineTransfer(e, item.item_id, item.id)}
                      text={"Decline"}
                    />
                  </li>
                ) : null
              )}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default TransferList;
