import { useState } from "react";

function App() {
    const [color, setColor] = useState('red');
    const [name, setName] = useState('cappucino');
    const [image, setImage] = useState('cappuccino01.png');

    const ClickEvent = () => {
        console.log(`현재 색상 : ${color}`);
        if (color === 'red') {
            setColor('blue');
        } else {
            setColor('red');
        }

        if (name === 'cappuccino') {
            setName('croissant');
            setImage('croissant_01.png');
        } else {
            setName('cappuccino');
            setImage('cappuccino01.png');
        }


    }

    return (
        <div className="App">
            <h1>United States of {color}!</h1>
            <span style={{ color: color, fontWeight: 'bold' }}>letter colours</span>
            <br /><br />
            <button type="button" onClick={ClickEvent}>
                click changes image and colour to {color}!
            </button>
            <br /><br />
            <h4>{name}</h4>
            <img src={`/images/${image}`} alt={name} width="210" height="210" />
        </div>
    );
}
export default App;