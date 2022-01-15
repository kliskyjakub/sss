import styles from "./Button.module.css";

const Button = (props) => {
  console.log(props.filled);
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
