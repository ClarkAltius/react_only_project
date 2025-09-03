import {Component} from "react";


class App extends Component{
    //render : 클라이언트가 데이터를 입력 받아서 화면에 그려 주는 동작
    //<div> 태그는 요소들을 담기 위한 컨테이너 역할
    //<img> 태그는 그림을 담기 위한 태그
    //public 경로가 웹 페이지의 최상위 경로가 된다
    render(){
        console.log('클래스형 컴포넌트');

        return(
            <div className = "App">
                <div>클래스 방식 (초간단 JSX 실습)</div>
                이미지 넣기
                <img src="http://localhost:3000/americano01_bigsize.png" 
                    width="300" height="300" />
                <div>반갑습니다.</div>
            </div>
        );
    }
}
//export 키워드는 App을 외부에서 참조 가능토록 해주는 문장
//주의사항 반드시 이 페이지에서 App이라고 적혀있는 부분은 동일해야한다 (App외 다른 이름도 사용 가능)
export default App;