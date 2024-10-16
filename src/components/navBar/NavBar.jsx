import style from "./NavBar.module.css";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../../context/LoginContext.jsx";
import { GlobalContext } from "../../context/GlobalContext";
import { UserListContext } from "../../context/UserListContext.jsx";
const NavBar = () => {
  const navigate = useNavigate();
  const { darkTheme } = useContext(LoginContext);
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
  } = useContext(GlobalContext);

  return (
    <section className={style.navigationContainer} data-visible={darkTheme}>
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
        }}
        className={style.navLink}
      >
        Pending transfers
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
          navigate("/main/personell");
          fetchAllUsers();
          setSelectedMenu(6);
          handleTransferMenuClose();
          handleUpdateActiveOFF();
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
      <span className={style.navLink}>Active personnel(future)</span>
      <span className={style.navLink}>Former personnel(future)</span>
    </section>
  );
};

export default NavBar;
