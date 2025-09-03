function App(){

// ES5 version
    let string1 = 'hello';
    let string2 = 'world';
    let greeting = string1 + string2;
    console.log('greeting : ' + greeting)

    let product = {name:'apple', price:20000};
    let message = `product : ${product.name}, price : ${product.price}`;
    console.log(message);

// Post ES6
// backtick (`) is used for string interpolation
    let string3 = 'howdy';
    let string4 = 'worlday';
    greeting = `${string3}~~~${string4}`;
    console.log('greeting : ' + greeting);

    let multiline = 'hello\neveryone';
    console.log(multiline);


    let value1 = 14;
    let value2 = 5;
    let boolValue = false ;
    let operator1 = 'Calculation : ' + (value1*value2);
    console.log(operator1);

    let operator2 = '삼항 연산자 : ' + (boolValue ? '참' : '거짓');
    console.log(operator2);

    boolValue = 14 > 5 ;
    operator1 = `Addition results :  ${value1+value2}`;
    console.log(operator1);

    operator1 = `True or False? : ${boolValue ? 'True' : 'False'}`;
    console.log(operator1);

    let price = 30000;
    let discount = 0.3;
    message = `Discount price : ${((1-discount)*price).toLocaleString()} krw`;
    console.log(message);


    return(
        <div className="App">
            템플릿 문자열
        </div>
    );
}

export default App ;