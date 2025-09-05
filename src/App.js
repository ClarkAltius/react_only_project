//특정 페이지로 이동하기 위한 링크
import { Link } from 'react-router-dom';

//개발자가 작성한 외부 파일
import AppRouters from './routes/AppRoutes';
import { menuData } from './routes/menuData';

//문서 스타일 담당
import './Style/App.css';

function App() {
    return (
        <div className="App">
            <h1>React Example Navigation</h1>
            <table border="1">
                <thead>
                    <tr>
                        {menuData.map((item, index) => (
                            <th key={index}>{item.chapter}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {menuData.map((item) => (

                            <td key={item.chapter}>
                                <ul>
                                    {item.items.map((bean) => (
                                        <li key={bean.path}>
                                            <Link to={bean.path}>
                                                {bean.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </td>
                        ))}
                        {/* <td>
                            <ul>
                                <li><Link to='/let_const'>let & const 실습</Link></li>
                                <li><Link to='/template_string'>템플릿 문자열</Link></li>
                                <li><Link to='/make_subject_list'>과목 목록 표시</Link></li>                            
                                <li><Link to='/make_function'>함수 만들기</Link></li>   
                                <li><Link to='/arrow_function'>화살표 함수</Link></li>   
                                <li><Link to='/array_map'>배열 함수</Link></li>   
                                <li><Link to='/spread_operator'>전개 연산자</Link></li>   
                            </ul>
                        </td> */}
                        <td>hurhurhur burburbur :) </td>
                    </tr>
                </tbody>
            </table>
            {/*라우터 모음*/}
            <AppRouters />
        </div>
    );
}

export default App;