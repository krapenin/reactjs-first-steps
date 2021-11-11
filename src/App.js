import './App.css';
import Box from "./components/Box";


function App() {

    const handleOnClickButton = () => {
        console.info("Acabas de pulsar el check status 1");
    };

    const handleOnClickButton2 = () => {
        console.info("Acabas de pulsar el check status 2");
    };

    const propsCheckStatusBox = {
        "classValue": "box-class",
        "title": "Check status",
        "textName": "textBox1",
        "buttonValue": "Check",
    }

    const propsCheckStatusBox2 = {
        "classValue": "box-class",
        "title": "Check status 2",
        "textName": "textBox2",
        "buttonValue": "Check 2"
    }


  return (
    <div className="App">
        <Box data={propsCheckStatusBox} callBack={handleOnClickButton} />
        <Box data={propsCheckStatusBox2} callBack={handleOnClickButton2}/>
    </div>
  );
};

export default App;
