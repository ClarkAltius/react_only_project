function App() {
    const image_small_size = 90;
    const image_large_size = 400;
    const image_path = '/images'; //public 폴더 아래에 images 폴더 생성

    const MouseMoveEvent = (event) => {
        const imageSrc = event.target.src;
        console.log(`current image : ${imageSrc}`);

        document.getElementById('large_image').src = imageSrc;

    };

    console.log('샘플');
    return (
        <div className="App">
            <h2>Moussssssssssssss</h2>
            <p> 임의의 이미지에 마우스가 해당 영역으로 들어가면 큰 이미지 표시</p>
            <table >
                <tbody>
                    <tr>
                        <td>
                            <img src={`${image_path}/french_baguette_01.png`} alt="바게트" width={image_small_size} height={image_small_size} onMouseMove={MouseMoveEvent} />
                        </td>
                        <td rowSpan="4" width={image_large_size}>
                            {/*여기는 큰 이미지가 들어가는 곳! */}
                            <img id="large_image" alt="noimage" width={image_large_size} height={image_large_size} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img src={`${image_path}/croissant_01.png`} alt="크로아상" width={image_small_size} height={image_small_size} onMouseMove={MouseMoveEvent} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img src={`${image_path}/brioche_02.png`} alt="브리오슈" width={image_small_size} height={image_small_size} onMouseMove={MouseMoveEvent} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img src={`${image_path}/ciabatta_01.png`} alt="챠바타" width={image_small_size} height={image_small_size} onMouseMove={MouseMoveEvent} />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
export default App;