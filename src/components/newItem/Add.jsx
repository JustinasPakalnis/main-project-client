import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { UserListContext } from "../../context/UserListContext";
import AddUpdateTemplate from "./AddUpdateTemplate.jsx";
import style from "./AddUpdate.module.css";
import ButtonBig from "../buttons/ButtonBig.jsx";
const Add = () => {
  const {
    insertActive,
    handleFieldClear,
    handleInsertClick,
    handleInsertActive,
  } = useContext(GlobalContext);
  return (
    <>
      <div
        className={`${style.form} ${style.formInsert}`}
        data-active={insertActive}
      >
        <h1>Create new item</h1>
        <AddUpdateTemplate />
        <div className={style.btnBlock}>
          <ButtonBig onClick={handleInsertClick} text={"Create"} />
          <ButtonBig onClick={handleFieldClear} text={"Clear"} />
          <ButtonBig onClick={handleInsertActive} text={"Cancel"} />
        </div>
      </div>
    </>
  );
};

export default Add;
