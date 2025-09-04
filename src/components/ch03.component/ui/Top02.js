//this is the function template
//넘겨진 프로퍼티는 소괄호 () 내에 적어 주면 됩니다. 

function App({ greeting, welcome }) {
    // console.log('Sample');

    return (
        <header>
            <h1>{greeting}</h1>
            <p>{welcome}</p>
        </header>
    );
}

export default App;