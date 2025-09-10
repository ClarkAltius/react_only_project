//this is main

//bootstrap import
import { Card } from 'react-bootstrap';
import { useState } from 'react';

//하위 컴포넌트 추가하기 (import)
import Top from './ui/Top';
import Content from './ui/Content';
import Bottom from './ui/Bottom';
import Switcher from './ui/Switcher';

function App() {
    const title = 'React 맛집 2222';
    const comment = 'Wilkommen we has many brot und beverages';
    const message = 'Orderen at das Table und haben eine gut time';

    //setProducts가 필수 사항은 아닙니다.
    const [products] = useState([
        { id: 1, name: "Bha-Ghet", price: 1000, category: 'bread', stock: 111, image: 'french_baguette_01.png', description: "프랑스의 대표적인 빵 중 하나로, 길쭉하고 얇은 형태의 식빵입니다. 바삭하면서도 촉촉한 식감과 진한 맛이 특징입니다." },
        { id: 2, name: "크로와상", price: 2000, category: 'bread', stock: 222, image: 'croissant_02.png', description: "프랑스의 대표적인 베이커리 중 하나로, 층층이 쌓인 반죽에 버터를 추가하여 구워낸 과자입니다." },
        { id: 3, name: "아메리카노", price: 3000, category: 'beverage', stock: 333, image: 'americano01.png', description: "에스프레소의 쓴 맛과 향을 좋아하는 사람들이 물을 추가해서 즐기는 음료로, 물과 에스프레소의 비율에 따라서 쓴 맛과 진하게 즐길 수 있습니다." },
        { id: 4, name: "카푸치노", price: 4000, category: 'beverage', stock: 444, image: 'cappuccino01.png', description: "스팀밀크와 거품을 올린 것을 섞어 만든 이탈리아의 전통적인 커피 음료입니다." }
    ]);

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

    const getProductById = () => {
        const selectedProduct = products.filter((bean) => bean.id === selectedId);

        //selecetedProduct는 배열로  반환 (객체 1개 저장)
        //1번째 항목은 [0]으로 가져와야한다
        return selectedProduct[0];
    }

    console.log('샘플');
    return (
        <Card>
            <Card.Header>
                <Top title={title} comment={comment} />
            </Card.Header>
            <Card.Body>
                {/** onClicktoContent가 리턴 된 후 ={ClickArrived} 동작한다*/}
                <Content contents={products} onClickToContent={ClickArrived} />
            </Card.Body>
            <Card.Body>
                <Switcher mode={mode} product={getProductById()} />
            </Card.Body>
            <Card.Footer>
                <Bottom message={message} />
            </Card.Footer>
        </Card>
    );
}
export default App;