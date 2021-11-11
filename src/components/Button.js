import React from "react";

export default function Button({value, callBack}) {
    return (
        <><input type="button" value={value} onClick={callBack}/></>
    );
}