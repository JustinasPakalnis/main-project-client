import { useContext, useState, useEffect } from "react";
import style from "./General.module.css";
import Add from "../newItem/Add.jsx";
import Notification from "./Notification.jsx";
import { GlobalContext } from "../../context/GlobalContext";
import { LoginContext } from "../../context/LoginContext.jsx";
import { FaSearch } from "react-icons/fa";
const FullInventoryList = () => {
  const {
    items,
    handleDelete,
    handleUpdateActive,
    handleTransferMenuOpen,
    transferClickID,
  } = useContext(GlobalContext);
  const [searchName, setSearchName] = useState("");
  const [newSearchList, setNewSearchList] = useState(items);
  const { authorizedUser } = useContext(LoginContext);
  useEffect(() => {
    setNewSearchList(items);
  }, [items]);

  function handleSearch() {
    setNewSearchList(
      items.filter((item) =>
        item.item.toLowerCase().includes(searchName.toLowerCase())
      )
    );
  }

  return (
    <>
      <div className={style.mainListContainer}>
        <Notification text="Item has been created"></Notification>
        <Add></Add>
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
              <p className={style.nr2}>Owner</p>
              <p className={style.nr3}>Condition</p>
              <p className={style.nr4}>Location</p>
              <p className={style.nr5}>Status</p>
              <p className={style.nr6}>Value</p>
              <p className={style.nr7}>Date created</p>
              <p className={style.nr8}>Comment</p>
            </div>

            <ul className={style.list}>
              {newSearchList.map((item, index) => (
                <li
                  key={item.id}
                  className={
                    index % 2 === 0
                      ? style.listItem
                      : `${style.listItem} ${style.listItem2}`
                  }
                >
                  <p className={style.nr1}>{item.item}</p>
                  <p className={style.nr2}>{item.owner}</p>
                  <p className={style.nr3}>{item.condition}</p>
                  <p className={style.nr4}>{item.location}</p>
                  <p className={style.nr5}>{item.status}</p>
                  <p className={style.nr6}>{item.value.toFixed(2)} Eur</p>
                  <p className={style.nr7}>{item.createdate}</p>
                  <p className={style.nr8}>{item.comment}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default FullInventoryList;
