import styles from "./TextArea.module.css";

const TextArea = ({ name, label, ...rest }) => {
  return (
    <div className={styles.container}>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <textarea
        id={name}
        className={styles.textarea}
        name={name}
        {...rest}
      ></textarea>
    </div>
  );
};

export default TextArea;
