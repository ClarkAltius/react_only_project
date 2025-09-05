function App() {
    // console.log('샘플');
    const ClickEvent01 = (event) => {
        console.log('Dis is Da Klick Event!');
        console.log(event);
    };
    const ClickEvent02 = (name) => {
        const result = `Yer ${name}!`;
        console.log(result);
    };
    const ClickEvent03 = (name, declaration) => {
        const result = `I am ${name} The ${declaration}!`;
        console.log(result);
    };
    const ClickEvent04 = (message, event) => {
        const result = `Parameter Info : ${message}`;
        console.log(result);
        /**해당 이벤트가 보유하고 있는 속성(property) 목록을 저장할 배열 */
        const eventArray = [];
        for (const evt in event) {
            eventArray.push(evt);
        }
        console.log('해당 이벤트 객체가 보유한 속성 정보');
        console.log(eventArray);
        console.log(`이벤트 유형 : ${event.type}`);
        console.log(`이벤트 유형 : ${event.target}`);
    };
    const ClickEvent05 = (event) => {
        const result = `등록되었도다`;
        console.log(`이벤트 발생 요소 : ${event.target}`);
        console.log(`이벤트 발생 요소 ID : ${event.target.id}`);

        const myId = event.target.id;

        if (myId === 'register') {
            console.log('등록하거라');
        } else if (myId === 'cnacel') {
            console.log('취소할거냐');
        } else {
            console.log('잘못눌렀니?');
        }

        console.log(result);
    };


    return (
        <div className="App">
            <h2>Dis is da Klick Event!</h2>

            {/* Bu'ons!*/}
            {/* Click it and fings happen! */}
            <button onClick={ClickEvent01}>Hwe Hwe Hwe Hwe (wiv 0 parameta)</button><br />
            {/**매게 변수가 0개 일 땐 함수 이름만 명시하면 된다 */}
            <hr></hr>
            {/* 매게변수가 있는 경우엔 화살표 함수로 둘러 싸야 한다? */}
            <button onClick={() => ClickEvent02('Grimgor')}>Hwe Hwe Hwe Hwe (wiv 1 parameta)</button><br />
            <hr></hr>
            {/* 매게변수2개! */}
            <button onClick={() => ClickEvent03('Settra!', 'Imperishable')}>Click Voice (wiv 2 parameta)</button><br />
            <hr></hr>
            {/*이벤트 객체? */}
            <button onClick={(event) => ClickEvent04('Greetings', event)}>Event Parameter!!</button><br />
            <button id="register" onClick={(event) => ClickEvent05(event)}>등록</button><br />
            <button id="cancel" onClick={(event) => ClickEvent05(event)}>취소</button><br />




        </div>
    );
}
export default App;