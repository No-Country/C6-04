import React from "react";

const Label = ({ text, className, onclick }) => {
    return (
        <div>
            <label className={className} onClick={onclick}>{text}</label>
        </div>
    )
}

export default Label;