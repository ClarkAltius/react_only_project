//프로그램 모드에 따라 화면을 분기해주는 스위치 앱

import Display from './Display';
import CreateContent from './CreateContent';
import UpdateContent from './UpdateContent';
import CreateCategory from './CreateCategory';

function Switcher({ mode, product, onSubmitInsert, onSubmitUpdate, onSubmitCategoryAdd, categories }) {
    console.log(`4. 현재 모드 : ${mode}`);
    const onSwitchInsert = (formData) => {
        console.log(`등록 버튼 누름(Switcher)`)
        onSubmitInsert(formData); //넘어온 form 정보를 main 파일로 넘김
    }

    const onSwitchUpdate = (formData) => {
        console.log(`수정 버튼 누름(switcher)`);
        onSubmitUpdate(formData);
    }

    const onSwitchCategory = (formData) => {
        console.log('카테고리 등록 버튼 누름');
        onSubmitCategoryAdd(formData);
    }

    switch (mode) {
        case 'detail':  //상품 상세보기
            return <Display product={product} />;
        case 'get_insert':  //상품 등록화면으로 이동
            return <CreateContent onSubmitInsert={onSwitchInsert} categories={categories} />;
        case 'read':  //읽기 모드
            return <div />;
        case 'get_update':  //상품 업데이트 화면으로 이동
            return <UpdateContent product={product} onSubmitUpdate={onSwitchUpdate} />;
        case 'get_category_add':  //카테고리 등록 화면
            return <CreateCategory onSubmitCategoryAdd={onSwitchCategory} />;

        default:
            //product 는 수정하고자 하는 기존 상품 데이터
            return null;
    };
}
export default Switcher
    ;