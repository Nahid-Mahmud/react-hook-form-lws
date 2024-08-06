const NumberInput = ({ value=1, onChange, ...rest }) => {
  const handleChange = (e) => {
    const inputValue = e.target.valueAsNumber || 0;
    onChange(inputValue);
  };
  return (
    <div>
      <input type="number" min={0} onChange={handleChange} value={value} {...rest} />
    </div>
  );
};

export default NumberInput;
