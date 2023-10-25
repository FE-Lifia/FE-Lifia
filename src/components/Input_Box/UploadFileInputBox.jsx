import React, { useState } from "react";
import { debounce } from "lodash";
import { FaFolderOpen } from "react-icons/fa";

const UploadFileInputBox = ({ placeholder, onChange, background = "#FAFAFA", type = "text", useDebounce = false }) => {
    const [inputValue, setInputValue] = useState("");

    const handleInput = ({ target }) => {
        onChange(target.value);
        setInputValue(target.value);
    };

    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        // 파일 업로드에 대한 로직 처리 부분
        console.log("업로드된 파일:", file);
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
            {/* 파일 업로드 버튼 추가 */}
            <label htmlFor="fileInput" style={{ position: "absolute", top: "50%", right: "10px", transform: "translateY(-50%)" }}>
                <input type="file" id="fileInput" style={{ display: "none" }} onChange={handleFileUpload} />
                <FaFolderOpen size={20} color="#446590" />
            </label>
        </div>
    );
};

export default UploadFileInputBox;
