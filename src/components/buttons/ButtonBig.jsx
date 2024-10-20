import style from "./Buttons.module.css";

const ButtonBig = ({ type, onClick, text }) => {
  return (
    <>
      <button type={type} onClick={onClick} className={style.buttonBig}>
        {text}
      </button>
    </>
  );
};

export default ButtonBig;
