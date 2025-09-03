//this is the function template

function App(){
    const function01 = function(){
        return 'howdy worldy (Gimpy Emperial Standard Version)';
    }

    const function02 = () => {
        return 'howdy worrrldy (Epic Arrer Boyz Funktion)';
    }

    const function03 = () => 'good to c ya';

    const function04 = (name) => {
        if(name === undefined){
            return 'State your name and purpose, infidel!';
        }
        return `Twas a pleasure to meet thee, ${name}`;

    }

    const function05 = (first, second) => {
        var calc = first + second ;
        return `${first} 더하기 ${second}는 ${calc}!`;
    }

    const function06 = (first, second) => 
        `The addition of ${first} and ${second} yields ${first + second}! WRRRRYYYYY!`;

    const adultCheck = (name, age) => {
        let adult = `${age >= 19 ? 'Adult' : 'Teen'}`;
        const result = `${name} is a respectable ${adult} at the ripe old age of ${age}!!`
        return result;
    }

    const function07 =  (first, second) => {
        const result = {add:first + second, mul:first * second};
        console.log(result);
        return result;
    }


    console.log('매개 변수가 없는 함수 표현식');
    console.log(function01());

    console.log('\n매개 변수가 없는 화살표 함수 표현식');
    console.log(function02());
    
    console.log('\n중괄호와 매개 변수가 없는 화살표 함수 표현식');
    console.log(function03());

    console.log('\n매개변수 1개 짜리 화살표 함수 표현식');
    console.log(function04());

    console.log('\n매개변수 2개 짜리 화살표 함수');
    console.log(function05(3,4));

    console.log('\n중괄호와 return 없는 매개변수 2개 짜리 화살표 함수');
    console.log(function06(10, 9));

    console.log(`\n삼환연상자 사용한 매개변수 2개 짜리 함수`);
    console.log(adultCheck('김환자',33));
    console.log(adultCheck('Alex',17));

    console.log(`\n반환타입이 객체인 경우 (When the parameter is an object)`);
    console.log(function07(14, 5));

    console.log('대괄호 기호와 key 이름을 이용하여 접근 가능 (square brackets and key)');
    console.log('addition results : ' + function07(14,5)['add']);
    console.log('multiplication results : ' + function07(14,5)['mul']);

    let answer = function07(10, 20);
 
    console.log('Sample');

    return(
        <div className="App">
            화살표 함수우우
        </div>
    );
}

export default App;