function App(){
    console.log('자바 스크립트 배열 관련 map 함수');
    const numbers = [4, 9, 16, 25];

    function multiply(numbers){
        return (10 * numbers).toFixed(3);
    }

    const result01 = numbers.map(multiply);
    console.log(result01);

    console.log('비어있는 배열은??')
    const result02 = [].map(multiply);
    console.log(result02);

    console.log('\nmap 함수와 화살표 함수를 조합')
    const twoTimes = (n) => 2 * n;
    const result03 = numbers.map(twoTimes);
    console.log(result03);

    console.log(`\n let's use javascript math object too`)
    const result04 = numbers.map(Math.sqrt);
    console.log(result04);

    const foods = ['라면','우동','짜장면','짬뽕','칼국수','마라탕','소면'];
    console.log(foods);

    const result05 = foods.map((item, index) => (
        <li key={index}>Tasty {item} is DA BEST!</li>

    ));
    console.log(result05)

    const result06 = foods.map((item,index) => {
        if(index % 2 ===0){
            return <li key={index}>{item} is TASTY AF!!</li>;
        }else{
            return <li key={index}>Imma munch on dat {item} BOYZ!</li>
        }
    });

    const words = ['love','peace', 'hello', 'sea', 'identification', 'creat', 'table'];
    console.log('화살표 함수와 String 객체의 length() 함수를 같이 사용해 봅시다.');
    const mylength = 4 ; //허용 가능한 문자열의 최대 길이
    let min_length = []; //비어있는 배열
    
    words.map((sentence) => {
        if(sentence.length <= mylength){
            min_length.push(sentence);
        }
    });

    console.log(min_length);

    //list of customers array comprised of multiple objects
    const customers = [
        {firstname:'민정', lastname:'김',age:10},
        {firstname:'효리', lastname:'최',age:20},
        {firstname:'지영', lastname:'강',age:30},
    ] ;

    //고객 한명 정보를 <li> 태그로 변환해주는 함수
    function getCustomerOne(person,index){
        //김 민정님, 나이 : xx살 (미성년자) 로 출력되도록 써보자
        const isAdult = person.age >= 19 ? '성인' : '미성년자';
        return(
            <li key={index}>
                {person.lastname} {person.firstname}님, 나이 : {person.age}살 ({isAdult})
            </li>
        );
    };

    //고객들을 목록 형식으로 만든 컴포넌트 
    const CustomerList = () => {
        const mylist = customers.map(getCustomerOne);
        return <ol>{mylist}</ol>;
    };


    //<strong> tag makes the letters more dense
    //<p> tag means a part
    //겨울 품목 리스트를 위한 컴포넌트

    const WinterItems = () => {

        const items = [
            { name:'눈사람', description:'겨울철 친구'},
            { name:'얼음', description:'차갑 단단'},
            { name:'눈', description:'하얗 폭신'},
            { name:'바람', description:'크아앗 추어엌'},
        ] ;

        const itemList = items.map((item, index)=>{
            return (
            <li key={index}>
                <strong>{item.name}</strong>
                <p>{item.description}</p>
            </li>
            );
        });

        return(
            <ul>{itemList}</ul>
        );
    };

    return(
        <div className="App">
            <h3>단순 출력</h3>
            <ul>{result05}</ul>
            <h3>Binary Choice</h3>
            <ul>{result06}</ul>
            <h3>고객 리스트</h3>
            <CustomerList />
            <h3>겨울 품목 리스트</h3>
            <WinterItems />
            배열 함수 (map)

        </div>
    );
}

export default App;