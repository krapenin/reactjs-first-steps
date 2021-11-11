import React from "react";
import Title from "./TItle";
import TextBox from "./TextBox";
import Button from "./Button";

export default function Box({data: {classValue, title, textName, buttonValue}, callBack}) {

    return (
        <div className={classValue}>
            <Title text={title}/>
            <TextBox name={textName}/>
            <Button value={buttonValue}  callBack={callBack}/>
        </div>
    )
}