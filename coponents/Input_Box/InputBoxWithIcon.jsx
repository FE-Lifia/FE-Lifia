import React, { useState } from "react";
import { debounce } from "lodash";
import { FaMagnifyingGlass } from "react-icons/fa6";

const InputBoxWithIcon = ({ placeholder, onChange, background = "#FAFAFA", type = "text", useDebounce = false }) => {
    const [inputValue, setInputValue] = useState("");
    const [showDropdown, setShowDropdown] = useState(false);
    const [selectedOption, setSelectedOption] = useState("");

    const handleInput = ({ target }) => {
        onChange(target.value);
        setInputValue(target.value);
    };

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    const selectOption = (option) => {
        setSelectedOption(option);
        setInputValue(option);
        toggleDropdown();
    }; 

    return (
        <div style={{ position: "relative" }}>
            <input
                type={type}
                placeholder={placeholder}
                value={inputValue}
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
                    color: "black",
                }}
            />
            <div style={{ position: "absolute", top: "50%", right: "10px", transform: "translateY(-50%)" }}>
                <FaMagnifyingGlass size={20} color="#446590" onClick={toggleDropdown} />
            </div>

            {showDropdown && (
                <div style={{ //드롭다운 꾸미기
                    position: "absolute",
                    top: "100%",
                    left: "0",
                    width: "100%",
                    backgroundColor: "white",
                    zIndex: "999",
                    borderRadius: "0 0 10px 10px", 
                    border: "0.5px solid #B6B6B6", 
                }}>
                    <div
                        onClick={() => selectOption("문정 래미안")}
                        style={{ padding: "10px", borderBottom: "0.5px solid #B6B6B6", cursor: "pointer" }}>
                        문정 래미안
                    </div>
                    <div
                        onClick={() => selectOption("북한산 래미안")}
                        style={{ padding: "10px", borderBottom: "0.5px solid #B6B6B6", cursor: "pointer" }}>
                        북한산 래미안
                    </div>
                    <div
                        onClick={() => selectOption("래미안 대치 팰리스")}
                        style={{ padding: "10px", borderBottom: "0.5px solid #B6B6B6", cursor: "pointer" }}>
                        래미안 대치 팰리스
                    </div>
                    <div
                        onClick={() => selectOption("래미안 마포리버웰")}
                        style={{ padding: "10px", cursor: "pointer" }}>
                        래미안 마포리버웰
                    </div>
                </div>
            )}
        </div>
    );
};

export default InputBoxWithIcon;
