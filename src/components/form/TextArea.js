const TextArea = ({ name, label, ...rest }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <textarea name={name} {...rest}></textarea>
    </div>
  );
};

export default TextArea;
