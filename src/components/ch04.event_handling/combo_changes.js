import { useState } from "react";

function App() {
    const [selectedList, setSelectedList] = useState(['']);
    const handleItemClick = (itemname) => {
        alert(`BOSS! 'ERE YER GO!\n${itemname}`);
    };

    const coffeeList = ["Kuffee", "Muhrika-No", "Banal-Latte", "Machiavellito", "Krappucino"];
    const breadList = ["Bwed", "Bha-Ghet", "K'Hoi-Sankt", "Bray-O'Shu", "Tza-Ba-Taah"];

    const ChangeEvent = (event) => {
        const target_id = event.target.id;
        const target_value = event.target.value;
        setSelectedList(target_value);

        console.log(`Object ID : ${target_id}`);
        console.log(`Object Value : ${target_value}`);

        // if (target_value === "coffeeList") {
        //     console.log(`${coffeeList}`);
        //     setSelectedList(coffeeList);
        // } else if (target_value === "breadList") {
        //     console.log(`${breadList}`);
        //     setSelectedList(breadList);
        // } else {
        //     setSelectedList([]);
        // }
    }
    console.log('Console Log End');
    return (
        <div className="App">
            <h2>homewaaaaaaaaark</h2>

            <select id="food_select" onChange={ChangeEvent}>
                <option value="-">CHOOZE IT BOSS!</option>
                <option value="coffeeList">KUFFEE!</option>
                <option value="breadList">BWED!!</option>
            </select>

            {
                selectedList === 'coffeeList' ? (
                    <div>
                        <h3>KUFFEE</h3>
                        <ul>{coffeeList.map(item => <li onClick={() => handleItemClick(item)} key={item}>{item} </li>)}</ul>
                    </div>
                ) : selectedList === 'breadList' ? (
                    <div>
                        <h3>BWED</h3>
                        <ol>{breadList.map(item => <li onClick={() => handleItemClick(item)} key={item}>{item} </li>)}</ol>
                    </div>
                ) : (
                    <div>
                        <h3>nope</h3>
                    </div>
                )
            }
            {/* <table border={"1"}>
                <thead>
                    <tr>
                        <th>MENU is back!</th>
                    </tr>
                </thead>
                <tbody>
                    {selectedList.map((item, index) => (
                        <tr key={index}>
                            <td>{item}</td>
                        </tr>
                    ))}
                </tbody>
            </table> */}

            {/* <h2>클릭 이벤트 테스트</h2>
            <ul style={{ cursor: "pointer", backgroundColor: "#f0f0f0" }}>
                <li onClick={handleItemClick}>아이템 1</li>
                <li onClick={handleItemClick}>아이템 2</li>
                <li onClick={handleItemClick}>아이템 3</li>
            </ul>
 */}
        </div>
    );
}
export default App;