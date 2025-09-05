import { keyboard } from "@testing-library/user-event/dist/keyboard";

function App() {
    const KeyboardEvent = (param, event) => {
        console.log(`파라미터 : ${param}`);
        console.log(`이벤트 타입 : ${event.type}`);
        console.log(`이벤트 요소 : ${event.target}`);
        console.log(`아스키 코드 : ${event.keyCode}`);
        console.log(`키 코드 : ${event.key}`);
        console.log(`ctrl 누름 여부 : ${event.ctrlKey}`);
        console.log(`alt 누름 여부: ${event.altKey}`);
        console.log(`shift 누름 여부 : ${event.shiftKey}`);

        if (event.keyCode >= 48 && event.keyCode <= 57) {
            console.log('숫자를 입력함');
        } else {
            console.log('non nombar')
        }

    }
    return (
        <div className="App">
            <he>key 이벤트</he>
            keyyyyyyyyyy
            Key Down : <input onKeyDown={(event) => KeyboardEvent('hello', event)}
                onKeyUp={(event) => KeyboardEvent('updy up', event)} /><br />
        </div>
    );
}
export default App;