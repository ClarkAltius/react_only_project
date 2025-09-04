//this is the function template

function App({ farewell, comment }) {
    // console.log('Sample');

    return (
        <article>
            <h2>{farewell}</h2>
            <p>{comment}</p>
        </article>
    );
}

export default App;