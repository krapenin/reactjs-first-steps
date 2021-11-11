import React from "react";

export default function TextBox({name, value}) {
    return (
        <><input type="text" name={name} value={value}/></>
    );
}