function App() {
    const ChangeTest = (event) => {
        const where = event.target.value;

        console.log(`Target Destination : ${where}`);

        if (where === '-') {
            alert('Chooze yer destiny BOSS!')
        } else {
            document.getElementById('myform').action = where;
            document.getElementById('myform').submit();
        }
    }

    const SubmitTest = (event) => {
        alert(`Event Type : ${event.type}`)
        const isChecked = document.getElementById('go').checked;

        if (isChecked === true) {
            alert(`액션 페이지로 이동`);
        } else {
            alert(`이동 중지. 체크해주세요`);
            event.preventDefault(); //이벤트 전파 방지
        }
    }

    return (
        <div className="App">
            <h2>Submit Event Testttttt</h2>
            <form id="myform" onSubmit={SubmitTest} action={`http://www.naver.com`}>
                <select onChange={ChangeTest}>
                    <option value="-">CHOOZE YER PATH GIT!</option>
                    <option value="http://www.naver.com">NAVER</option>
                    <option value="http://www.google.com">GOOGLE</option>
                    <option value="http://www.yahoo.com">YAHOO</option>
                </select>
                <br /><br />

                <input type="checkbox" id="go" />IF chekked, GO GIT!
                <br /><br />
                <input type="submit" value="전송" />
            </form>
        </div>
    );
}
export default App;