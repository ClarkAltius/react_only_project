import { useState } from "react";

function App() {
    const imageSize = 120;

    const [car, setCar] = useState({
        model: 'avante',
        color: 'blue',
        year: 2023,
        image: 'avante.png',
        comment: 'ollllld AF',
        message: '아반떼(Avante)',
        modelName: 'Avante'
    });

    /**관리할 상태 정의 */
    // const [model, setModel] = useState('blue');
    // const [color, setColor] = useState('avante');
    // const [year, setYear] = useState(2023);
    // const [image, setImage] = useState('avante.png');
    // const [comment, setComment] = useState('olddddd AF');
    // const [message, setMessage] = useState('carrrr');
    // const [modelName, setModelName] = useState('Avante');

    const carMap = new Map([
        ['avante', '아반떼'],
        ['sonata', '소나타'],
        ['grandeur', '그랜저'],
    ]);

    const ChangeTest = (event) => {
        const targetId = event.target.id;
        const targetValue = event.target.value;

        console.log(`이벤트 발생 값 : ${targetValue}`)
        console.log(`이벤트 발생 객체 id: ${targetId}(${targetValue})`);

        if (targetId === 'model') {
            const newMessage = `${carMap.get(targetValue)}(${targetValue})`;
            console.log(`message test: ${car.message}`);
            setCar({ ...car, model: targetValue, image: targetValue, message: newMessage });
        } else if (targetId === 'color') {
            setCar({ ...car, color: targetValue })
        } else if (targetId === 'year') {
            setCar({ ...car, year: targetValue });
            if (targetValue === '2025') {
                setCar({ ...car, comment: 'Tis neewwwwwww AF.' });
            } else {
                setCar({ ...car, comment: 'Hmm. Serviceable.' });
            }

        } else {

        }

    }
    return (
        <div className="App">
            <h1>CARS GO BRRRUM 2</h1>
            <p>
                자동차의 종류에 따라서 이미지 변경
            </p>

            차종 변경 : &nbsp;
            <select id="model" value={car.model} onChange={ChangeTest}>
                <option value="avante">아반떼</option>
                <option value="sonata">소나타</option>
                <option value="grandeur">그랜저</option>
            </select>
            <br /><br />
            색상 변경 : &nbsp;
            <select id="color" value={car.color} onChange={ChangeTest}>
                <option value="yellow">노랑</option>
                <option value="blue">파랑</option>
                <option value="red">빨강</option>
                <option value="green">초록</option>
            </select>
            <br /><br />
            생산 연도 : &nbsp;
            <select id="year" value={car.year} onChange={ChangeTest}>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
            </select>
            <br /><br />

            <p>
                <span style={{ color: car.color, fontWeight: 'bold' }}>
                    {car.color}
                </span>색상의
                {car.year} 연산 {car.message} 모델
            </p>
            <br /><br />
            {car.comment}
            <br /><br />



            <img src={`/images/${car.image}.png`} alt="name" width={imageSize} height={imageSize} />

        </div>
    );
}
export default App;