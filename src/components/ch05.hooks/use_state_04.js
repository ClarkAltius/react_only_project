import { useState } from "react";


function App() {
    const [name, setName] = useState(''); //names
    const [age, setAge] = useState(0); //age
    const [members, setMembers] = useState([
        { id: 1, name: '김길선', age: 22 },
        { id: 2, name: '임우영', age: 45 },
        { id: 3, name: '황인태', age: 60 },
        { id: 4, name: '윤철용', age: 15 },
    ]);

    const RemoveSelectedRow = (event) => {
        const id = event.target.id;
        console.log('Check Data Type: ' + typeof id);
        console.log('Chosen ID: ' + id);

        const filteredData = members.filter((bean) => bean.id !== Number(id));
        setMembers(filteredData);

    };


    const memberList = members.map((bean) => {
        return <li id={bean.id} key={bean.id} onDoubleClick={RemoveSelectedRow}>
            {bean.name}({bean.age})
        </li>;
    });


    const NameChange = (event) => {
        const targetValue = event.target.value;
        console.log(`Name: ${targetValue}`);
        setName(targetValue);
    };

    const AgeChange = (event) => {
        const targetValue = event.target.value;
        console.log(`Age: ${targetValue}`);
        setAge(targetValue);
    };

    const [nextId, setNextId] = useState(0);

    const AddMember = (event) => {
        const newNextId = Math.max(...members.map((bean) => bean.id)) + 1;
        const newMembers = members.concat({ id: newNextId, name: name, age: age });

        setMembers(newMembers); //회원 명단 갱신

        //입력 양식 초기화
        setName('');
        setAge(0);

        //다음 추가를 위하여 식별자 번호 +1 하기
        setNextId(newNextId + 1);
    }        /*
        End AddMember */



    return (
        <div className="App">
            <h2>Settra does not SERVE!</h2>
            <h2>Settra RULES!</h2>
            Name : &nbsp;&nbsp; <input type="text" value={name} onChange={NameChange} />
            <br />
            Name : &nbsp;&nbsp; <input type="text" value={age} onChange={AgeChange} />
            <br />

            <button on onClick={AddMember}>추가</button>
            <br />
            <h4>회원 목록</h4>
            <ul>{memberList}</ul>

        </div>
    );
}
export default App;