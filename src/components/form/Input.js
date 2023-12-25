const Input = ({ name, label, ...rest }) => (
  <div>
    <label htmlFor={name}>{label}</label>
    <input name={name} {...rest} />
  </div>
);

export default Input;
