import { InputGroup, Button, Form } from "react-bootstrap";
import './../css/FormStyle.css';

function App({ onSubmitInsert, categories }) {

    //전송 버튼을 누르면 전송된 이벤트에 의하여 아래 함수 동작
    const SubmittedData = (event) => {
        const formData = event.target; //전송된 폼 양식 객체 정보
        onSubmitInsert(formData);
    }

    // categories 배열로 동적 콤보박스 만들기
    const categoryOptions = categories.map((cate, index) =>
        //cate 는 카테고리 1개 의미
        <option key={index} value={cate.engCategoryName}>{cate.korCategoryName}</option>
    );

    //<option value="food">Food</option>

    return (
        <div className="App">
            <h2>
                상품등록
            </h2>
            <form action="#" onSubmit={SubmittedData}>
                <InputGroup className="custom-input-group">
                    <InputGroup.Text>이름</InputGroup.Text>
                    <Form.Control type="text" name="name"></Form.Control>
                </InputGroup>
                <InputGroup className="custom-input-group">
                    <InputGroup.Text>가격</InputGroup.Text>
                    <Form.Control type="text" name="price"></Form.Control>
                </InputGroup>
                <InputGroup className="custom-input-group">
                    <InputGroup.Text>카테고리</InputGroup.Text>
                    <Form.Select name="category">
                        <option value="-">--카테고리 선택--</option>
                        {categoryOptions}
                    </Form.Select>
                </InputGroup>
                <InputGroup className="custom-input-group">
                    <InputGroup.Text>재고</InputGroup.Text>
                    <Form.Control type="text" name="stock"></Form.Control>
                </InputGroup>
                <InputGroup className="custom-input-group">
                    <InputGroup.Text>이미지</InputGroup.Text>
                    <Form.Control type="text" name="image"></Form.Control>
                </InputGroup>
                <InputGroup className="custom-input-group">
                    <InputGroup.Text>상품설명</InputGroup.Text>
                    <Form.Control type="textarea" name="description"></Form.Control>
                </InputGroup>
                <div className="d-grid gap-2">
                    <Button variant="primary" size="lg" type="submit">등록</Button>
                </div>
            </form >
        </div >
    );
}
export default App;