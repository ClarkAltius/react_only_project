function App(){
    console.log('Sample');

    let arr01 = ['김의찬', '이기현'] ;
    let arr02 = ['강유리', '심수현'] ;

    let merge01 = [arr01[0], arr01[1], arr02[0], arr02[1]];
    let merge02 = arr01.concat(arr02);
    let merge03 = [].concat(arr01, arr02);
    
    console.log('merge01: ' + merge01);



    console.log('점 3개 ... 는 해당 배열 요소를 풀어 헤치는 역할');
    
    let arr03 = ['사과', '오렌지'];
    let arr04 = ['복숭아', '키위'];

    let merge04 = [...arr03, ...arr04];
    console.log('merge04 : '+ merge04);

    const arr05 = ['라면','우동','짜장면','짬뽕','칼국수','마라탕','소면'];
    console.log(arr05);

    let [food01, food02, food03 = 'nofood', ...others] = arr05;
    console.log('food01 : ' + food01);
    console.log('food02 : ' + food02);
    console.log('food03 : ' + food03);

    const myCar = {brand:'현대', model:'소나타', colour:'흰색' };
    console.log(myCar) ;

    const myUpdateCar = {type:'중형', year:'2025', colour:'검정' };
    console.log(myUpdateCar) ;

    const myCarInfo = {myCar, myUpdateCar} ;
    console.log(myCarInfo);

    return(
        <div className="App">
            전개 연산자
        </div>
    );
}

export default App;