function App(){
    let header = 'IT 과목';
    let subject = ['java','react','html','javascript','bootstrap','oracle'];

    let result = '';
    result += `<h1>${header}<\h1>`;

    result += `<ul>`;
    for(const item of subject){
        result += `<li>${item}</li>`;
    }
    result += `</ul>`;


    console.log(result);


    return(
        <div className="App">
            IT 과목 리스트
            {/* 보안*(XSS 공격) 때문에 기본적으로 모든 내용을 문자열로 보여준다 */}
            {/* 문자열 형식으로 HTML 태그 형태로 렌더링*/}
            <div dangerouslySetInnerHTML ={{__html : result}} />
            <hr/> {/*1줄 추가*/}
            {/*여기에 보여주기*/}
            
        </div>
    );  
}

export default App ;