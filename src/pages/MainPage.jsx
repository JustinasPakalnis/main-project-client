import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { UserListWrapper } from "../context/UserListContext";
import SecondaryHeader from "../components/secondaryHeader/SecondaryHeader.jsx";
import NavBar from "../components/navBar/NavBar.jsx";
import InventoryList from "../components/list/List.jsx";
import MyInventoryList from "../components/list/MyInventoryList.jsx";
import FullInventoryList from "../components/list/FullInventoryList.jsx";
import TransferList from "../components/list/TransferList.jsx";
import RemovedInventory from "../components/list/RemovedInventory.jsx";
import TransferHistoryList from "../components/list/TransferHistoryList.jsx";
import PersonellList from "../components/personellList/PersonellList.jsx";
import RegistrationTemplate from "../components/registrationTemplate/RegistrationTemplate.jsx";
import { GlobalContext } from "../context/GlobalContext";
import style from "./Main.module.css";
import Header from "../components/header/Header.jsx";
const MainPage = () => {
  const { visibleItems, activeItems, transferItems, remowedItems } =
    useContext(GlobalContext);
  return (
    <>
      <section className={style.mainCotainer}>
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<Navigate to="/main/fullinventory" />} />
          <Route path="/fullinventory" element={<FullInventoryList />} />
          <Route path="/inventory/mylist" element={<MyInventoryList />} />
          <Route path="/inventory/removed" element={<RemovedInventory />} />
          <Route
            path="/inventory/transfers"
            element={<TransferList type="transfer" />}
          />
          <Route
            path="/inventory/transfers/history"
            element={<TransferHistoryList type="history" />}
          />
          <Route path="/personell" element={<PersonellList />} />
          <Route path="/createNewUser" element={<RegistrationTemplate />} />
        </Routes>
        y
      </section>
    </>
  );
};

export default MainPage;
