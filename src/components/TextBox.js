import React, {useState} from "react";

export default function TextBox({name}) {

    const [value, setValue] = useState("")

    const handleOnKeyUp = (e) => {
        setValue(e.target.value);
    };

    return (
        <><input type="text" placeholder="código de oficina" name={name} value={value} onChange={handleOnKeyUp}/></>
    );
}