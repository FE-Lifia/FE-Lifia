import React, { useState } from "react";
import { debounce } from "lodash";
//그라데이션 있는 inputbox

const ColoredInputBox = ({
  placeholder,
  onChange,
  background = "#FAFAFA",
  type = "text",
  useDebounce = false,
}) => {
  const [inputValue, setInputValue] = useState("");

  const handleInput = ({ target }) => {
    onChange(target.value);
    setInputValue(target.value);
  };

  return (
    <input
      value={inputValue}
      type={type}
      placeholder={placeholder}
      onChange={useDebounce ? debounce(handleInput, 550) : handleInput}
      style={{
        padding: "20px",
        height: "50px",
        width: "100%",
        boxSizing: "border-box",
        border: "0.5px solid #B6B6B6",
        borderRadius: "10px",
        fontSize: "15px",
        background:
          "linear-gradient(to right, #8FC7EA, #94C4E9, #99C1E8, #9CBEE8, #9FBCEA)",
        color: "black",
      }}
    />
  );
};

export default ColoredInputBox;
