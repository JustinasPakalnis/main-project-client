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
        <h1 className={style.headerTitle}>All transfers history</h1>
        <div className={style.listContainer}>
          <div className={style.headerRow}>
            <p className={style.nr1}>Item name</p>
            <p className={style.nr2}>From user</p>
            <p className={style.nr2}>To user</p>
            <p className={style.nr3}>Condition</p>
            <p className={style.nr8}>Transfer comment</p>
            <p className={style.nr5}>Transfer status</p>
            <p className={style.nr2}>Transfer date</p>
          </div>
          <ul className={style.list}>
            {transferListData.map((item) =>
              item.status === "completed" || item.status === "declined" ? (
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
                  <p className={style.nr3}>{item.condition}</p>
                  <p className={style.nr8}>{item.transfer_comment}</p>
                  <p className={style.nr5}>{item.status}</p>
                  <p className={style.nr2}>
                    {item.transfer_date.split("T").join(" ").slice(0, 16)}
                  </p>
                </li>
              ) : null
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default TransferList;
