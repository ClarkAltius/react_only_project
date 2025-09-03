function Top(){
    return(
        <header>
            <h1>안녕하다 이것은 인사말</h1>
            안녕하신가
        </header>
    );
}

function Content(){
    return(
        <nav>
            <ul>
                <li><a href="http://www.naver.com">네이버</a></li>
                <li><a href="http://www.daum.com">다음</a></li>
                <li><a href="http://www.google.com">구글</a></li>
            </ul>

        </nav>
    );
}

function Bottom(){
    return(
        <article>
            <h2>이것은 맺음말</h2>
            부자 되거라
        </article>
    );
}

function App(){
    console.log('컴포넌트 분리 연습');

/*
JSX 문법 규칙
최상위 요소는 반드시 1개여야 함.
태그들은 대소문자 구분
태그는 열기/닫기로 구성
기존 html 태그는 모두 사용 가능
여닫 사이에 내용물이 없으면 <태그 /> 형식으로 작성 가능
개발자 직접 작성한 앱도 사용 가능
속성 작성은 숫자 형식이라도 이름="값"의 형식으로 작성
하위 앱으로 넘기는 props 역시 이름="값" 형식으로 작성 
위 두 조건은 웹 표준
*/    
    return(
        <div age="20">
            <Top money="100"/>
            <Content />
            <Bottom />

        </div>
    );
}

export default App;