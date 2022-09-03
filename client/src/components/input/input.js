import React from "react";

const input = ({ text, types, className }) => {
    return (
        <div>
            <input className={className} placeholder={text} type={types} ></input>
        </div>
    )
}

export default input;