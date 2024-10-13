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
        <UserListWrapper>
          <Routes>
            <Route path="/" element={<Navigate to="/main/FullInventory" />} />
            <Route path="/FullInventory" element={<FullInventoryList />} />
            <Route path="/Inventory/mylist" element={<MyInventoryList />} />
            <Route path="/Inventory/removed" element={<RemovedInventory />} />
            <Route
              path="/Inventory/transfers"
              element={<TransferList type="Transfer" />}
            />
            <Route
              path="/Inventory/transfers/history"
              element={<TransferHistoryList type="history" />}
            />
            <Route path="/Personell" element={<PersonellList />} />
            <Route path="/createNewUser" element={<RegistrationTemplate />} />
          </Routes>
        </UserListWrapper>
      </section>
    </>
  );
};

export default MainPage;
