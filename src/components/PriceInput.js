//PriceInput component to handle price input[PhyoMin]
function PriceInput({ value, label, onChange }) {
  const handleChange = (event) => {
    const inputValue = event.target.value;
    //Check if the input value is a number and greater than or equal to 0[PhyoMin]
    if (inputValue !== undefined && !isNaN(inputValue) && inputValue >= 0) {
      onChange(inputValue);
    }
  };
  return (
    <div>
      <label>{label}</label>
      <input
        value={value}
        onChange={handleChange}
        placeholder="Numbers Only"
        maxLength={20}
      />
    </div>
  );
}

export default PriceInput;
