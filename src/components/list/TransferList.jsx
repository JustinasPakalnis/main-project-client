import { useContext } from "react";
import style from "./General.module.css";
import { GlobalContext } from "../../context/GlobalContext";
import { LoginContext } from "../../context/LoginContext.jsx";
const TransferList = ({ type }) => {
  const { transferListData, acceptTransfer, declineTransfer } =
    useContext(GlobalContext);
  const { authorizedUser } = useContext(LoginContext);

  let displayedIndex = 0;
  return (
    <>
      <div className={style.mainListContainer}>
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
                    <button
                      className={style.button}
                      onClick={(e) => acceptTransfer(e, item.item_id, item.id)}
                    >
                      Accept
                    </button>
                    <button
                      className={style.button}
                      onClick={(e) => declineTransfer(e, item.item_id, item.id)}
                    >
                      Decline
                    </button>
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
