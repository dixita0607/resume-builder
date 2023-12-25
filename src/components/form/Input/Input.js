import styles from "./Input.module.css";

const Input = ({ name, label, ...rest }) => (
  <div className={styles["input-container"]}>
    <label htmlFor={name}>{label}</label>
    <input name={name} {...rest} />
  </div>
);

export default Input;
