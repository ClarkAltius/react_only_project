//프로그램 모드에 따라 화면을 분기해주는 스위치 앱

import Display from './Display';
import CreateContent from './CreateContent';

function Switcher({ mode, product, onSubmitInsert }) {
    console.log(`현재 모드 : ${mode}`);

    const onSwitchInsert = (formData) => {
        console.log(`등록 버튼 누름(Switcher)`)
        onSubmitInsert(formData); //넘어온 form 정보를 main 파일로 넘김

    }

    switch (mode) {
        case 'detail':  //상품 상세보기
            return <Display product={product} />;
        case 'get_insert':  //상품 등록화면으로 이동
            return <CreateContent onSubmitInsert={onSwitchInsert} />;
        case 'read':  //읽기 모드
            return <div />;

        default:
            return null;
    };
}
export default Switcher
    ;