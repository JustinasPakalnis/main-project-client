import style from "./Buttons.module.css";

const ButtonSmall = ({ onClick, text }) => {
  return (
    <>
      <button onClick={onClick} className={style.buttonSmall}>
        {text}
      </button>
    </>
  );
};

export default ButtonSmall;
