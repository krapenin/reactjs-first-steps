import './App.css';
import Box from "./components/Box";
import {useState} from "react";
import '../src/css/Box.css';
import '../src/css/generic.css';
import axios from "axios";
import User from "./components/User";
import status from "./fixtures/status.json";
import StatusResult from "./components/StatusResult";


function App() {

    const [users, setUsers] = useState({});
    const [statusResponse, setStatusResponse] = useState({});

    const [statusBoxProperties, setStatusBoxProperties] = useState({
        "classValue": "box-class",
        "title": "Check Casa status",
        "textName": "textBox1",
        "buttonValue": "Check",
        "buttonDisabled": ""
    })

    const [usersBoxProperties, setUserBoxProperties] = useState({
        "classValue": "box-class",
        "title": "Users",
        "textName": "textBox2",
        "buttonValue": "Obtain",
        "buttonDisabled": ""
    })

    const toggleButton = callBack => {
        callBack(prevState => ({
            ...prevState,
            "buttonDisabled": prevState.buttonDisabled === "disabled" ? "" : "disabled"
        }));
    }

    const checkStatusButtonCallback = () => {
        toggleButton(setUserBoxProperties);
        setTimeout(function () {
            status.office = document.querySelector("input[name='textBox1']").value;
            setStatusResponse(status);
            toggleButton(setUserBoxProperties)
        }, 2000)
    };

    const usersButtonCallback = () => {
        toggleButton(setStatusBoxProperties);
        setTimeout(function () {
            toggleButton(setStatusBoxProperties)
        }, 2000)

        axios.get('https://jsonplaceholder.typicode.com/todos/').then(result => {
            setUsers(result.data);
        });
    };

    return (
        <div className="App">
            <h1>SUPER FEEDSUPPORT</h1>
            <Box data={statusBoxProperties} callBack={checkStatusButtonCallback}/>
            {statusResponse.office !== undefined ? <StatusResult data={statusResponse}/> : ''}
            <Box data={usersBoxProperties} callBack={usersButtonCallback}/>
            {users.length ?
                <table className="table">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>User</th>
                        <th>Title</th>
                        <th>Completed</th>
                    </tr>
                    </thead>
                    <tbody>
                    {users.length && users.map(user => {
                        return <User key={user.id} id={user.id} user={user.userId} title={user.title}
                                     completed={user.completed ? "completed" : ""}/>
                    })}
                    </tbody>

                </table> : ''}

        </div>
    );
};

export default App;
