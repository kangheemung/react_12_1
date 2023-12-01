import React, { useState } from "react";

const Input = () => {
    const [inputValue, setInputValue] = useState("Pedro");
    
    let onChange = (event) => {
        const newValue = event.target.value;
        setInputValue(newValue);
    };

    return (
        <div>
            <input placeholder="Enter your name" onChange={onChange} value={inputValue} />
            {inputValue}
        </div>
    );
};

export default Input;
