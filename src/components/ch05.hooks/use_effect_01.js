import { useEffect, useState } from "react";

function App() {
    const imageSize = 100;
    const imagePath = '/images';
    const [count, setCount] = useState(0);
    const [image, setImage] = useState(`${imagePath}/americano.png`);
    const interval = 1000; //타이머를 위한 인터벌

    const imageArray = [
        'americano01.png',
        'avante.png',
        'brioche_01.png',
        'croissant01.png',
    ];

    useEffect(() => {
        const timerId = setInterval(() => {
            setCount(c => c + 1);
            const randomImg = imageArray[Math.floor(imageArray.length * Math.random())];
            setImage(`/images/${randomImg}`);
            setTimeout(timerId, 5000);
        }, 1000);
        return () => clearInterval(timerId); // Cleanup is still required
    }, []);


    // const SomeAction = () => {
    //     console.log('aktion');
    //     setCount((count) => count + 1);
    // };
    // const randomIdx = Math.floor(imageArray.length * Math.random());
    // const randomImage = imageArray[randomIdx];
    // setImage(`${imagePath}/${randomImage}`)

    // const MyTimer = () => {
    //     setTimeout(SomeAction, interval);
    // };

    // useEffect(MyTimer, [count]);



    return (
        <>
            <h1>카운터: {count}</h1>
            <div>
                <img src={image} alt="alternate text" width={imageSize} height={imageSize} />
            </div>

        </>
    );
}
export default App;