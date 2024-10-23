import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import AddUpdateTemplate from "./AddUpdateTemplate.jsx";
import style from "./AddUpdate.module.css";
import ButtonBig from "../buttons/ButtonBig.jsx";
const Update = () => {
  const { item, updateActive, handleUpdateActiveOFF, handleUpdateClick } =
    useContext(GlobalContext);
  return (
    <div
      className={`${style.form} ${style.formUpdate}`}
      data-active={updateActive}
    >
      <h1>Update selected Item</h1>
      <AddUpdateTemplate />
      <div className={style.btnBlock}>
        <ButtonBig
          onClick={(e) => handleUpdateClick(e, item)}
          text={"UPDATE"}
        />
        <ButtonBig onClick={handleUpdateActiveOFF} text={"CANCEL"} />
      </div>
    </div>
  );
};

export default Update;
