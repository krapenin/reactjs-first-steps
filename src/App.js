import './App.css';
import Title from "./components/TItle";
import TextBox from "./components/TextBox";
import Button from "./components/Button";


function App() {

    const handleOnClickButton = () => {
        console.info("Acabas de pulsarme");
    };


    return (
        <div className="App">
            <Title text="Texto para título 1"/>
            <TextBox name="text1"/>
            <Button value="púlsame" callBack={handleOnClickButton}/>
        </div>
    );
}

export default App;
