import React from "react";

const Label = ({ text, className, onclick }) => {
    return (
        <>
            <label className={className} onClick={onclick}>{text}</label>
        </>
    )
}

export default Label;