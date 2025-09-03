function App(){
    console.log('함수 만들기 예시');
    function square01(a, b){
        if(b == undefined){
            console.log('매개 변수에 값 할당이 안 되면 undefined 에러 발생');
            console.log('b : ' + b);
        }
        return (a*a + b*b);
    }

    let su01 = 2;
    let su02 = 3;
    let message = `square01(${su01}, ${su02})의 실행결과`;
    console.log(message + square01(su01, su02));

    console.log('\n함수 표현식');
    const square02 = function(a, b = 5){
        return (a*a) + (b*b) ;
    }

    console.log(square01(5));
    console.log('NaN은 Not A Number의 줄임말.');

    let su03 = 4 ;
    let su04 = 5 ;
    message = `square02(${su03}, ${su04})의 실행결과`;
    console.log(message + square02(su03, su04));

    console.log(square02(3));

    return(
        <div className="App">
            Sampllllle
        </div>
    );
}

export default App;