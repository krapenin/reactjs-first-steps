import './App.css';
import Box from "./components/Box";
import {useState} from "react";


function App() {

    const [propsCheckStatusBox, setPropsCheckStatusBox] = useState({
        "classValue": "box-class",
        "title": "Check status",
        "textName": "textBox1",
        "buttonValue": "Check",
        "buttonDisabled": ""
    })

    const [propsCheckStatusBox2, setPropsCheckStatusBox2] = useState({
        "classValue": "box-class",
        "title": "Check status 2",
        "textName": "textBox2",
        "buttonValue": "Check 2",
        "buttonDisabled": ""
    })

    const toggleButton = (callBack) => {
        callBack( prevState => ({
            ...prevState,
            "buttonDisabled": prevState.buttonDisabled === "disabled" ? "" : "disabled"
        }));

    }

    const handleOnClickButton = () => {
        toggleButton(setPropsCheckStatusBox2);
        setTimeout(function() {
            toggleButton(setPropsCheckStatusBox2)
        }, 2000 )
    };

    const handleOnClickButton2 = () => {
        toggleButton(setPropsCheckStatusBox);
        setTimeout(function() {
            toggleButton(setPropsCheckStatusBox)
        }, 2000 )
    };

  return (
    <div className="App">
        <Box data={propsCheckStatusBox} callBack={handleOnClickButton} />
        <Box data={propsCheckStatusBox2} callBack={handleOnClickButton2}/>
    </div>
  );
}

export default App;
