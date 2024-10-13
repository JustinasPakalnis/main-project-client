import { useContext } from "react";
import style from "./List.module.css";
import { GlobalContext } from "../../context/GlobalContext";
import { LoginContext } from "../../context/LoginContext.jsx";
const TransferList = ({ type }) => {
  const { transferListData, acceptTransfer, declineTransfer } =
    useContext(GlobalContext);
  const { authorizedUser } = useContext(LoginContext);

  let displayedIndex = 0;
  return (
    <>
      <section className={style.transferContainer}>
        <h1 className={style.transferTitle}>All transfers history</h1>
        <div className={style.listContainer}>
          <div className={style.listTitles}>
            <p>Item name</p>
            <p>From user</p>
            <p>To user</p>
            <p>Condition</p>
            <p>Transfer comment</p>
            <p>Transfer status</p>
            <p>Transfer date</p>
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
                  <p>{item.item}</p>
                  <p>{item.fromUserFullName}</p>
                  <p>{item.toUserFullName}</p>
                  <p>{item.condition}</p>
                  <p>{item.transfer_comment}</p>
                  <p>{item.status}</p>
                  <p>{item.transfer_date.split("T").join(" ").slice(0, 16)}</p>
                </li>
              ) : null
            )}
          </ul>
        </div>
      </section>
    </>
  );
};

export default TransferList;
