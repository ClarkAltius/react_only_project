import { useEffect, useState } from "react";

function App() {
    const imageSize = 300;
    const [count, setCount] = useState(0);
    const [multiplication2, setMulti] = useState(0);
    const [complex, setComplex] = useState(0);


    const imagePath = '/images';
    const [image, setImage] = useState('');
    const [imageIdx, setImageIdx] = useState(0); //현재 선택된 이미지의 색인번호

    const imageArray = [
        'americano01.png',
        'avante.png',
        'brioche_01.png',
        'croissant01.png',
    ];

    const TodoSomething = () => {
        console.log('카운트 변수 값 : ' + count);
        setMulti(() => 2 * count);
        setComplex(() => (3 * count) + 1);

        console.log('현재 이미지의 색인 번호: ' + imageIdx)

        const currentImage = `${imagePath}/${imageArray[imageIdx]}`;
        setImage(currentImage);

        const nextImageIdx = (imageIdx + 1) % imageArray.length;
        setImageIdx(nextImageIdx);
    };


    //최초 실행 후 count 변경시 마다 rendering
    useEffect(TodoSomething, [count]);

    return (
        <div className="App">
            <table style={{ border: '5px solid grey' }}>
                <tbody>
                    <tr>
                        <td style={{ border: '2px dotted green' }}>카운터</td>
                        <td style={{ border: '2px dotted green' }}>{count}</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td style={{ border: '2px dotted green' }}>2 곱하기</td>
                        <td style={{ border: '2px dotted green' }}>{multiplication2}</td>
                    </tr>
                    <tr>
                        <td style={{ border: '2px dotted yellow' }}>3 곱하기 더하기 1</td>
                        <td style={{ border: '2px dotted green' }}>{complex}</td>
                    </tr>
                </tbody>
            </table>
            <hr />
            <button onClick={() => { setCount(() => count + 1) }}>
                &nbsp;카운트 값 1 더하기&nbsp;
            </button>
            <br />
            <div>
                <img src={image} alt="alternate text" width={imageSize} height={imageSize} />
            </div>
        </div>
    );
}
export default App;