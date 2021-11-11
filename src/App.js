import './App.css';
import Title from "./components/TItle";
import TextBox from "./components/TextBox";
import Button from "./components/Button";

function App() {
  return (
    <div className="App">
      <Title text="Texto para título 1"/>
      <TextBox name="text1" value=""/>
      <Button value="púlsame"/>
    </div>
  );
}

export default App;
