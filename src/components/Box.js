import React from "react";
import Title from "./TItle";
import TextBox from "./TextBox";
import Button from "./Button";

export default function Box({data: {classValue, title, textName, buttonValue, buttonDisabled}, callBack}) {

    return (
        <div className={classValue}>
            <Title text={title}/>
            <TextBox name={textName}/>
            <Button value={buttonValue} disabled={buttonDisabled} callBack={callBack}/>
        </div>
    )
}