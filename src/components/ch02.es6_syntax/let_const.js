function App() {
  let su = 10 ;
  su += 3;
  console.log('su : ' + su);

  let str = 'horhorhor' ;
  str = 'harharhar' ;
  console.log('str : ' + str) ;

  let arr = [] ; //empty array
  arr = [10, 20, 30] ; //array uses square brackets
  console.log('arr : ' + arr) ;

  let obj = {} ; //object uses curly brackets
  obj = {name:'hong', password:'abc123', age:30} ;
  console.log('obj : ');
  console.log(obj);

  //curly brackets are called blocks
  //scope : determines whether we have access to it or not

  if(true){
    let x1 = 10; //let keyword is only valid inside block scope
    var x2 = 20;
  }

  //console.log('x1 : ' + x1);
  console.log('x2 : ' + x2);


  //const 써보기

  const su2 = 10;
//  su2 += 3; <- this will cause an error because a constant can't be modified. 
  console.log('su2: ' + su2);

  const str2 = 'horhorhorhor'; 
//  str2 += 'harharharrr' ; <- this will also cause an error
  console.log('str2 : ' + str2);


  const arr2 = [40, 50, 60];
  console.log('arr2 : ' + arr2);

  const obj2 = {name:'park', password:'howdy123', gender:'Male'} ;
  console.log('obj2 : ' + obj2);


  return (
    <div className="App">
      안녕하세요
      ECMAScript
    </div>
  );
}

export default App;
