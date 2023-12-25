import styles from "./TextArea.module.css";

const TextArea = ({ name, label, ...rest }) => {
  return (
    <div className={styles["textarea-container"]}>
      <label htmlFor={name}>{label}</label>
      <textarea name={name} {...rest}></textarea>
    </div>
  );
};

export default TextArea;
