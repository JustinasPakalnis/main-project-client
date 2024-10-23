import style from "./NavBar.module.css";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../../context/LoginContext.jsx";
import { GlobalContext } from "../../context/GlobalContext.jsx";
import { UserListContext } from "../../context/UserListContext.jsx";
import { FaExclamationCircle } from "react-icons/fa";
const NavBar = () => {
  const navigate = useNavigate();
  const { authorizedUser } = useContext(LoginContext);
  const { fetchAllUsers } = useContext(UserListContext);
  const {
    handleInsertActive,
    fetchAllItems,
    handleActiveItems,
    handleRemowedItems,
    handleTranfsersItems,
    selectedMenu,
    setSelectedMenu,
    setinsertActive,
    setUpdateActive,
    setTransferClickID,
    handleTransferMenuClose,
    handleUpdateActiveOFF,
    transferListData,
    fetchTransferListData,
  } = useContext(GlobalContext);

  const [myTransferCount, setTransferCount] = useState(0);
  useEffect(() => {
    setTransferCount(
      transferListData.filter(
        (transfer) =>
          transfer.status === "pending" &&
          authorizedUser.userID === transfer.to_user
      ).length
    );
  }, [fetchTransferListData]);

  return (
    <section className={style.navigationContainer}>
      <span className={style.navigationTitle}>Navigation</span>

      <button
        className={style.navButton}
        data-selected={selectedMenu === 1}
        onClick={() => {
          navigate("/main/fullinventory");
          fetchAllItems();
          setSelectedMenu(1);
          setinsertActive(false);
          handleTransferMenuClose();
          handleUpdateActiveOFF();
        }}
      >
        Inventory
      </button>
      <span
        onClick={() => {
          navigate("/main/fullinventory");
          handleInsertActive();
          handleTransferMenuClose();
          handleUpdateActiveOFF();
          {
            selectedMenu === 8 ? setSelectedMenu(1) : setSelectedMenu(8);
          }
        }}
        data-selected={selectedMenu === 8}
        className={style.navLink}
      >
        Create item
      </span>
      <span
        data-selected={selectedMenu === 2}
        onClick={() => {
          navigate("/main/inventory/mylist");
          handleActiveItems();
          setSelectedMenu(2);
          handleTransferMenuClose();
          handleUpdateActiveOFF();
        }}
        className={style.navLink}
      >
        My items
      </span>
      <span
        data-selected={selectedMenu === 3}
        onClick={() => {
          navigate("/main/inventory/removed");
          handleRemowedItems();
          setSelectedMenu(3);
          handleTransferMenuClose();
          handleUpdateActiveOFF();
        }}
        className={style.navLink}
      >
        Remowed items
      </span>
      <span
        data-selected={selectedMenu === 4}
        onClick={() => {
          navigate("/main/inventory/transfers");
          handleTranfsersItems();
          setSelectedMenu(4);
          handleTransferMenuClose();
          handleUpdateActiveOFF();
          fetchTransferListData();
        }}
        className={style.navLink}
      >
        Pending transfers
        <span className={style.count}>
          {myTransferCount > 0 && <FaExclamationCircle />}
        </span>
      </span>

      <span
        data-selected={selectedMenu === 5}
        onClick={() => {
          navigate("/main/inventory/transfers/history");
          handleTranfsersItems();
          setSelectedMenu(5);
          handleTransferMenuClose();
          handleUpdateActiveOFF();
        }}
        className={style.navLink}
      >
        Transfers history
      </span>

      <button
        data-selected={selectedMenu === 6}
        className={style.navButton}
        onClick={() => {
          fetchAllUsers();
          setSelectedMenu(6);
          handleTransferMenuClose();
          handleUpdateActiveOFF();
          navigate("/main/personell");
        }}
      >
        Personell
      </button>
      <span
        data-selected={selectedMenu === 7}
        className={style.navLink}
        onClick={() => {
          navigate("/main/createnewuser");
          setSelectedMenu(7);
          handleTransferMenuClose();
          handleUpdateActiveOFF();
        }}
      >
        Create new USER
      </span>
    </section>
  );
};

export default NavBar;
