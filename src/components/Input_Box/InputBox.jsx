import React, { useState } from "react";
import { debounce } from "lodash";

const InputBox = ({
  placeholder,
  onChange,
  background = "#FAFAFA",
  type = "text",
  useDebounce = false,
}) => {
  const [inputValue, setInputValue] = useState("");

  const handleInput = (e) => {
    onChange(e.target.value);
    setInputValue(e.target.value);
  };

  return (
    <input
      type={type}
      placeholder={placeholder}
      value={inputValue}
      onChange={useDebounce ? debounce(handleInput, 550) : handleInput}
      style={{
        padding: "20px",
        height: "50px",
        width: "100%",
        boxSizing: "border-box",
        border: "0.5px solid #B6B6B6",
        borderRadius: "10px",
        fontSize: "15px",
        background: background,
        color: "black",
      }}
    />
  );
};

export default InputBox;
