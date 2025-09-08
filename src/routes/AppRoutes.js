//'react-router-dom' 은 라우팅을 위한 라이브러리
//기본으로 설치되어있지 않아 차후 설치 필요
//npm install react-router-dom  <- 설치 커맨드
import { Routes, Route } from 'react-router-dom';
//ch02 
//import 앱이름 from 전체경로/파일명
import AppLetConst from './../components/ch02.es6_syntax/let_const';
import AppTemplateString from '../components/ch02.es6_syntax/template_string';
import AppSubjectList from './../components/ch02.es6_syntax/make_subject_list';
import AppMakeFunction from './../components/ch02.es6_syntax/make_function';
import AppArrowFunction from './../components/ch02.es6_syntax/arrow_function';
import AppArrayMap from './../components/ch02.es6_syntax/array_map';
import AppSpreadOperator from './../components/ch02.es6_syntax/spread_operator';
//기호 . 는 현재 폴더, ..는 상위 폴더, / 는 폴더 구분자

//ch03
import AppClassComponents from './../components/ch03.component/components01';
import AppFunctionComponents from './../components/ch03.component/components02';
import AppComponentSeparate from './../components/ch03.component/component_separate';
import AppUseProps from './../components/ch03.component/use_props';
import AppFileSeparator from './../components/ch03.component/file_separator';
import AppMakeTable01 from './../components/ch03.component/array_and_tables_01';
import AppMakeTable02 from './../components/ch03.component/array_and_tables_02';

//ch04
import AppClickEvent from './../components/ch04.event_handling/click_event';
import AppChangeEvent from './../components/ch04.event_handling/change_event';
import AppMouseEvent from './../components/ch04.event_handling/mouse_event';
import AppKeyEvent from './../components/ch04.event_handling/key_event';
import AppComboEvent from './../components/ch04.event_handling/combo_changes';
import AppSubmitEvent from './../components/ch04.event_handling/submit_event';

//ch05
import AppUseState01 from './../components/ch05.hooks/use_state_01';
import AppUseState02 from './../components/ch05.hooks/use_state_02';
import AppUseState03 from './../components/ch05.hooks/use_state_03';

function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<AppLetConst />} />
            <Route path='/let_const' element={<AppLetConst />} />
            <Route path='/template_string' element={<AppTemplateString />} />
            <Route path='/make_subject_list' element={<AppSubjectList />} />
            <Route path='/make_function' element={<AppMakeFunction />} />
            <Route path='/arrow_function' element={<AppArrowFunction />} />
            <Route path='/array_map' element={<AppArrayMap />} />
            <Route path='/spread_operator' element={<AppSpreadOperator />} />

            {/*ch03*/}
            <Route path='/components01' element={<AppClassComponents />} />
            <Route path='/components02' element={<AppFunctionComponents />} />
            <Route path='/component_separate' element={<AppComponentSeparate />} />
            <Route path='/use_props' element={<AppUseProps />} />
            <Route path='/file_separator' element={<AppFileSeparator />} />
            <Route path='/array_and_tables_01' element={<AppMakeTable01 />} />
            <Route path='/array_and_tables_02' element={<AppMakeTable02 />} />

            {/*ch04*/}
            <Route path='/click_event' element={<AppClickEvent />} />
            <Route path='/change_event' element={<AppChangeEvent />} />
            <Route path='/mouse_event' element={<AppMouseEvent />} />
            <Route path='/key_event' element={<AppKeyEvent />} />
            <Route path='/combo_changes' element={<AppComboEvent />} />
            <Route path='/submit_event' element={<AppSubmitEvent />} />

            {/*ch05*/}
            <Route path='/use_state_01' element={<AppUseState01 />} />
            <Route path='/use_state_02' element={<AppUseState02 />} />
            <Route path='/use_state_03' element={<AppUseState03 />} />


        </Routes>
    );
}

export default AppRoutes;