import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      onClick={props.onClick}
      className={props.filled ? styles.button : styles["button_outline"]}
    >
      {props.children}
    </button>
  );
};

export default Button;
