import React, { useState } from "react";
import { debounce } from "lodash";
import { FaMagnifyingGlass } from "react-icons/fa6";

const InputBoxWithIcon = ({ placeholder, onChange, background = "#FAFAFA", type = "text", useDebounce = false }) => {
    const [inputValue, setInputValue] = useState("");

    const handleInput = ({ target }) => {
        onChange(target.value);
        setInputValue(target.value);
    };

    return (
        <div style={{ position: "relative" }}>
            <input
                type={type}
                placeholder={placeholder}
                onChange={useDebounce ? debounce(handleInput, 550) : handleInput}
                style={{
                    padding: "20px 40px 20px 20px",
                    height: "50px",
                    width: "100%",
                    boxSizing: "border-box",
                    border: "0.5px solid #B6B6B6",
                    borderRadius: "10px",
                    fontSize: "15px",
                    background: "linear-gradient(to right, #8FC7EA, #94C4E9, #99C1E8, #9CBEE8, #9FBCEA)",
                    color: "#B6B6B6",
                }}
            />
             {/* 원하는 아이콘을 여기에 추가 */}
            <div style={{ position: "absolute", top: "50%", right: "10px", transform: "translateY(-50%)" }}>
                <FaMagnifyingGlass size={20} color="#446590"
                 onClick={() => { }} />
            </div>
        </div>
    );
};

export default InputBoxWithIcon;
