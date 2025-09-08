function App() {
    const ChangeEvent = (event) => {
        // const eventArray = [];
        // for (const evt in event) {
        //     eventArray.push(evt);
        // }
        // console.log(eventArray);
        // console.log(`Event Type : ${event.type}`);
        // console.log(`Event Occurence Target : ${event.target}`);
        // console.log(`event.target 내의 속성 확인하기`);
        // for (const item in event.target) {
        //     console.log(item);
        // }

        const target_id = event.target.id;
        const target_value = event.target.value;

        console.log(`요소 아이디 :${target_id}`);

        if (target_id === "input_box") {
            console.log(`입력 상자 내용 : ${target_value}`);
        } else if (target_id === "menu_select") {
            console.log(`선택 된 콤보 상자 값 : ${target_value}`);
            if (target_value === '-') {
                alert('보여줄 이미지를 선택하라!');
            } else {
                const image_url = target_value;
                document.getElementById('image01').src = image_url;
                document.getElementById('image01').width = 200;
                document.getElementById('image01').height = 200;
            }
        } else {
            console.log(`이건 버근가? : ${target_value}`);
        }
    };
    // console.log(`요소의 값 :${target_value}`);

    return (
        <div className="App">
            <h2>Change Event</h2>
            <input id="input_box" onChange={ChangeEvent}></input>
            <br />

            <select id="menu_select" onChange={ChangeEvent}>
                <option value="-">Chooze One Boss!</option>
                <option value="americano01_bigsize.png">Wut's a 'Murikano' Boss?</option>
                <option value="croissant_03_bigsize.png">Croissant?</option>
                <option value="brioche_04_bigsize.png">Bri-o-shu</option>
                <option value="french_baguette_01_bigsize.png">Wot's a BAGUETTE?!</option>

            </select>
            <br />

            <img id="image01" src="" alt="Nuffink 'ere BOSS!" />

        </div>
    );
}
export default App;