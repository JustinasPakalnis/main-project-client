import { useContext, useState, useEffect } from "react";
import style from "./General.module.css";
import Add from "../newItem/Add.jsx";
import Update from "../newItem/Update.jsx";
import Transfer from "../newItem/Transfer.jsx";
import Notification from "./Notification.jsx";
import { GlobalContext } from "../../context/GlobalContext.jsx";
import { LoginContext } from "../../context/LoginContext.jsx";
import { FaSearch } from "react-icons/fa";
import ButtonSmall from "../buttons/ButtonSmall.jsx";
const MyInventoryList = () => {
  const {
    items,
    handleDelete,
    handleUpdateActive,
    handleTransferMenuOpen,
    transferClickID,
    notificationPrompt,
  } = useContext(GlobalContext);
  const { authorizedUserFullName } = useContext(LoginContext);

  const [searchName, setSearchName] = useState("");
  const [newSearchList, setNewSearchList] = useState(items);
  useEffect(() => {
    setNewSearchList(items);
  }, [items, authorizedUserFullName]);

  function handleSearch() {
    setNewSearchList(
      items.filter((item) =>
        item.item.toLowerCase().includes(searchName.toLowerCase())
      )
    );
  }
  let displayedIndex = 0;
  return (
    <>
      <div className={style.mainListContainer}>
        <Notification text={notificationPrompt}></Notification>
        <h1 className={style.headerTitle}>My items</h1>
        <Transfer></Transfer>
        <Update></Update>
        <div className={style.listContainer}>
          <div className={style.searchBox}>
            <input
              className={style.formField}
              type="text"
              placeholder="search item"
              name="search"
              value={searchName}
              onChange={(e) => setSearchName(e.target.value)}
            />
            <FaSearch className={style.searchBtn} onClick={handleSearch} />
          </div>
          <div className={style.itemListContainer}>
            <div className={style.headerRow}>
              <p className={style.nr1}>Item</p>
              <p className={style.nr3}>Condition</p>
              <p className={style.nr4}>Location</p>
              <p className={style.nr5}>Status</p>
              <p className={style.nr6}>Value</p>
              <p className={style.nr7}>Date created</p>
              <p className={style.nr8}>Comment</p>
            </div>

            <ul className={style.list}>
              {newSearchList.map((item, index) =>
                item.owner === authorizedUserFullName &&
                item.status === "Active" ? (
                  <li
                    className={
                      displayedIndex++ % 2 === 0
                        ? style.listItem
                        : `${style.listItem} ${style.listItem2}`
                    }
                    data-checkedtransfer={transferClickID === index}
                    key={item.id}
                  >
                    <p className={style.nr1}>{item.item}</p>
                    <p className={style.nr3}>{item.condition}</p>
                    <p className={style.nr4}>{item.location}</p>
                    <p className={style.nr5}>{item.status}</p>
                    <p className={style.nr6}>{item.value.toFixed(2)} Eur</p>
                    <p className={style.nr7}>{item.createdate}</p>
                    <p className={style.nr8}>{item.comment}</p>
                    <div className={style.buttonBlock}>
                      <ButtonSmall
                        onClick={() => handleUpdateActive(item.id)}
                        text={"Update"}
                      />
                      <ButtonSmall
                        onClick={() => handleDelete(item.id)}
                        text={"Delete"}
                      />
                      <ButtonSmall
                        onClick={() => handleTransferMenuOpen(item.id, index)}
                        text={"Transfer"}
                      />
                    </div>
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

export default MyInventoryList;
