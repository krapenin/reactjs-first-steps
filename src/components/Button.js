import React from "react";

export default function Button({value, disabled, callBack}) {
    return (
        <><input type="button" disabled={disabled}  value={value} onClick={callBack}/></>
    );
}