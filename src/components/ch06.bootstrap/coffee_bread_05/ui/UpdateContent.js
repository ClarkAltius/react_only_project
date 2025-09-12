import { InputGroup, Button, Form } from "react-bootstrap";
import './../css/FormStyle.css';
import { useState } from "react";

/*
등록 화면과의 차이.
1. 코멘트 등록->수정
2. 수정할 정보도 props로 넘어와야함  `App({ product, onSubmitUpdate ` 부분
3. 각 입력 양식에 기존 상품 정보를 전달
4. id항목도 노출시키되 읽기전용으로
5. id 항목은 사용자에게 보여주되 읽기 전용으로 처리. 진짜 정보는 hidden으로 처리
*/

function UpdateContent({ product, onSubmitUpdate }) {
    const comment = '수정';

    //넘겨진 이전 상품 정보를 관리하기 위한 state. 값 할당
    const [formData, setFormData] = useState(product);

    //전송 버튼을 누르면 전송된 이벤트에 의하여 아래 함수 동작
    const SubmittedData = (event) => {
        event.preventDefault();
        const formData = event.target; //전송된 폼 양식 객체 정보
        onSubmitUpdate(formData);
    }

    const InputChange = (event) => {
        console.log(`Checking update`);
        const { name, value } = event.target;
        console.log(`파라미터 이름: ${name} , 새로운 값: ${value}`);

        /**전개 연산자를 사용하여 과거 데이터는 보존하되 신규 바뀐 정보만 다시 갱신 */
        //previous 변수는 리엑트가 자동으로 넣어주는 값으로  이름은 자유롭게 지정 가능
        setFormData((previous) => ({ ...previous, [name]: value }))
    }

    return (
        <div className="App">
            <h2>
                상품등록
            </h2>
            <form action="#" onSubmit={SubmittedData}>
                <InputGroup className="custom-input-group">
                    <InputGroup.Text>ID</InputGroup.Text>
                    <input name="id" onChange={InputChange} value={product.id} hidden />
                    <Form.Control type="text" name="fakeid" onChange={InputChange} value={product.id} disabled></Form.Control>
                </InputGroup>
                <InputGroup className="custom-input-group">
                    <InputGroup.Text>이름</InputGroup.Text>
                    <Form.Control type="text" name="name" onChange={InputChange} value={formData.name}></Form.Control>
                </InputGroup>
                <InputGroup className="custom-input-group">
                    <InputGroup.Text>가격</InputGroup.Text>
                    <Form.Control type="text" name="price" onChange={InputChange} value={formData.price}></Form.Control>
                </InputGroup>
                <InputGroup className="custom-input-group">
                    <InputGroup.Text>카테고리</InputGroup.Text>
                    <Form.Select name="category" onChange={InputChange}>
                        <option value="-">--카테고리 선택--</option>
                        <option value="food" selected={product.category === 'bread'}>Food</option>
                        <option value="beverage" selected={product.category === 'beverage'}>Beverage</option>
                    </Form.Select>
                </InputGroup>
                <InputGroup className="custom-input-group">
                    <InputGroup.Text>재고</InputGroup.Text>
                    <Form.Control type="text" name="stock" onChange={InputChange} value={formData.stock}></Form.Control>
                </InputGroup>
                <InputGroup className="custom-input-group">
                    <InputGroup.Text>이미지</InputGroup.Text>
                    <Form.Control type="text" name="image" onChange={InputChange} value={formData.image}></Form.Control>
                </InputGroup>
                <InputGroup className="custom-input-group">
                    <InputGroup.Text>상품설명</InputGroup.Text>
                    <Form.Control type="textarea" name="description" onChange={InputChange} value={formData.description}></Form.Control>
                </InputGroup>
                <div className="d-grid gap-2">
                    <Button variant="primary" size="lg" type="submit">등록</Button>
                </div>
            </form >
        </div >
    );
}
export default UpdateContent;