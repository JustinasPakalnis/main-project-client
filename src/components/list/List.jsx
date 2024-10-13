import { useContext } from "react";
import style from "./List.module.css";
import ListTemplate from "./ListTemplate.jsx";
import Transfer from "../newItem/Transfer.jsx";
import { GlobalContext } from "../../context/GlobalContext";
import Add from "../newItem/Add.jsx";
import Update from "../newItem/Update.jsx";
import SecondaryHeader from "../secondaryHeader/SecondaryHeader.jsx";
import { UserListContext } from "../../context/UserListContext.jsx";
const InventoryList = ({ props, type }) => {
  const {
    item,
    handleInputChange,
    transferData,
    handleTransferDataChange,
    createTransfer,
    handleTransferComment,
    transfervisible,
  } = useContext(GlobalContext);
  const { usersFullNames } = useContext(UserListContext);
  return (
    <>
      <section>
        <Update></Update>
        <Transfer></Transfer>
        <div className={style.s}>
          <ListTemplate props={props} type={type} />
        </div>
      </section>
    </>
  );
};

export default InventoryList;
