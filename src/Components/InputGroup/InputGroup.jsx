import "./InputGroup.css";
const InputGroup = ({ label, placeholder, type, name, onChange }) => {
  return (
    <div className="input_group">
      <label htmlFor="">{label ? label : "label"}</label>
      <input
        type={type}
        name={name}
        onChange={onChange}
        required
        placeholder={placeholder ? placeholder : "Enter"}
      />
    </div>
  );
};

export default InputGroup;
