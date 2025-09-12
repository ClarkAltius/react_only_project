//this is main

//bootstrap import
import { Card } from 'react-bootstrap';
import { useState } from 'react';

//하위 컴포넌트 추가하기 (import)
import Top from './ui/Top';
import Content from './ui/Content';
import Bottom from './ui/Bottom';
import Switcher from './ui/Switcher';
import { getNextKeyDef } from '@testing-library/user-event/dist/keyboard/getNextKeyDef';

function Main() {
    const title = 'React 맛집 2222 copyyyyyyyy';
    const comment = 'Wilkommen we has many brot und beverages';
    const message = 'Orderen at das Table und haben eine gut time';

    //setProducts가 필수 사항은 아닙니다. --> 생성 버튼이 준비되었으니 이제 필요하기에 추가. 
    const [products, setProducts] = useState([
        { id: 1, name: "Bha-Ghet", price: 1000, category: 'bread', stock: 111, image: 'french_baguette_01.png', description: "프랑스의 대표적인 빵 중 하나로, 길쭉하고 얇은 형태의 식빵입니다. 바삭하면서도 촉촉한 식감과 진한 맛이 특징입니다." },
        { id: 2, name: "크로와상", price: 2000, category: 'bread', stock: 222, image: 'croissant_02.png', description: "프랑스의 대표적인 베이커리 중 하나로, 층층이 쌓인 반죽에 버터를 추가하여 구워낸 과자입니다." },
        { id: 3, name: "아메리카노", price: 3000, category: 'beverage', stock: 333, image: 'americano01.png', description: "에스프레소의 쓴 맛과 향을 좋아하는 사람들이 물을 추가해서 즐기는 음료로, 물과 에스프레소의 비율에 따라서 쓴 맛과 진하게 즐길 수 있습니다." },
        { id: 4, name: "카푸치노", price: 4000, category: 'beverage', stock: 444, image: 'cappuccino01.png', description: "스팀밀크와 거품을 올린 것을 섞어 만든 이탈리아의 전통적인 커피 음료입니다." }
    ]);

    const [categoryTranslations, setCategoryTranslations] = useState({
        bread: '빵',
        beverage: '음료수',
        cake: '케익'
    });

    /**mode: 현재 상태의 모드 지정 */
    /**insert, update, delete, read, detail etc */
    const [mode, setMode] = useState('');

    /* 프로그램 최초 시작시 1번 선택되었다고 가정*/
    const [selectedId, setSelectedId] = useState(1);

    const ClickArrived = (id) => {
        console.log(`상품 ID: ${id}`);
        setSelectedId(Number(id));
        setMode('detail');
    }

    /**수정하고자 하는 상품 1개의 정보 저장하기 위하여 정의 */
    // const [currentProduct, setCurrentProduct] = useState(null);

    //click button to change mode
    const ModeChanged = (mode) => {
        console.log(`1. 변경된 모드: ${mode}`);

        if (mode === 'get_delete') {//사용자가 항목 삭제 시도
            console.log(`Deleting item with ID : ${selectedId}`)
            const remainProduct = getExceptData(selectedId);
            setProducts(remainProduct);
            setMode('read');
            setSelectedId(null);
            console.log('deleted?')
        } else {
            setMode(mode);

        }


        // if (mode === 'get_update') {
        //     //     const currentProduct = getProductById();
        //     //     console.log(`수정 할 상품 정보 출력 : `)
        //     //     console.log(currentProduct);
        //     // 
        //     setCurrentProduct(getProductById());
        // }
    }


    const getProductById = () => {
        const selectedProduct = products.filter((bean) => bean.id === selectedId);

        //selecetedProduct는 배열로  반환 (객체 1개 저장)
        //1번째 항목은 [0]으로 가져와야한다
        return selectedProduct[0];
    }
    /**신규 상품을 관리 state 정의 */
    // const [newItem, setNewItem] = useState(null);



    //사용자가 상품 등록 화면에서 내용을 기입하고 등록 버튼을 누름//
    const InsertData = (formData) => {
        console.log(`등록버튼 누름(main)`);
        console.log(`입력 값: ${formData.name.value}`);
        console.log(`입력 값: ${formData.price.value}`);
        console.log(`입력 값: ${formData.category.value}`);
        console.log(`입력 값: ${formData.stock.value}`);
        console.log(`입력 값: ${formData.image.value}`);
        console.log(`입력 값: ${formData.description.value}`);

        const newId = Math.max(...products.map((bean) => bean.id)) + 1;

        const newData = [{
            id: Number(newId),
            name: formData.name.value,
            price: Number(formData.price.value),
            category: formData.category.value,
            stock: Number(formData.stock.value),
            image: formData.image.value,
            description: formData.description.value,
        }];

        //사용자가 상품 수정 화면에서 내용을 수정하고 [수정] 버튼을 눌렀습니다.

        const newProducts = products.concat(newData);
        setProducts(newProducts);
        setMode('read');

    }

    const getExceptData = (id) => {
        return products.filter((item) => item.id !== id);

    }

    // 상품 수정 화면에서 내용을 수정하고 수정 버튼 클릭
    const UpdateData = (formData) => {
        //수정된 상품을 ㅔ외하고 나머지 추출
        console.log(`수정버튼 누름(Main)`);
        const anotherProduct = getExceptData(formData.id);
        //추출된 상품 목록ㄷ과 수정된 상품 합치기
        const newProductList = anotherProduct.concat(formData);
        setProducts(newProductList);
        setMode('read');
    };


    /*카테고리 정보는 동적으로 갱신되어야함으로 자바스크립트 배열을 만들어서 처리하는게 장기적으로 유용
    1. 자바스크립트 배열로 카테고리 초기화
    2. 관리해야하니까 state 처리
    3. 폼 양식으로 카테고리를 동적으로 생성
    4. 추가 삭제 작업 발생시 동적으로 갱신
    */
    const categoryList = [
        { engCategoryName: 'bread', korCategoryName: '빵' },
        { engCategoryName: 'beverage', korCategoryName: '음료수' },
        { engCategoryName: 'cake', korCategoryName: '케익' },

    ];

    const [categories, setCategories] = useState(categoryList);

    //카테고리 추가 화면에서 내용을 기입하고 추가 버튼 누름
    const InsertCategory = (formData) => {
        const newEngName = formData.engCategoryName.value;
        const newKorName = formData.korCategoryName.value;
        // formData는 신규 추가할 카테고리입니다.
        const newCategory = { engCategoryName: formData.engCategoryName.value, korCategoryName: formData.korCategoryName.value };
        const totalCategory = categories.concat(newCategory);
        setCategories(totalCategory);
        setCategoryTranslations(prevTranslations => ({
            ...prevTranslations,
            [newEngName]: newKorName
        }))
        setMode('read');
    }


    console.log('3. Bottom에서 넘어옴');
    return (
        <Card>
            <Card.Header>
                <Top title={title} comment={comment} />
            </Card.Header>
            <Card.Body>
                {/** onClicktoContent가 리턴 된 후 ={ClickArrived} 동작한다*/}
                <Content
                    contents={products}
                    onClickToContent={ClickArrived}
                    translations={categoryTranslations}
                />
            </Card.Body>
            <Card.Body>
                <Switcher
                    mode={mode}
                    product={getProductById()}
                    onSubmitInsert={InsertData}
                    onSubmitUpdate={UpdateData}
                    onSubmitCategoryAdd={InsertCategory}
                    categories={categories}
                />
            </Card.Body>
            <Card.Footer>
                <Bottom message={message} onClickToBottom={ModeChanged} />
            </Card.Footer>
        </Card>
    );
}
export default Main;