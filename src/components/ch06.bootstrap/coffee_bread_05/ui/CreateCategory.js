import { InputGroup, Button, Form } from "react-bootstrap";
import './../css/FormStyle.css';


function CreateCategory({ onSubmitCategoryAdd }) {

    const SubmittedData = (event) => {
        const formData = event.target; //전송된 폼 양식 객체 정보
        onSubmitCategoryAdd(formData);
    }
    console.log('Dis is Da Kategory Add page Boss!');
    const comment = '추가'
    return (
        <div className="App">
            <h2>
                카테고리 {comment}
            </h2>
            <form action="#" onSubmit={SubmittedData}>
                <InputGroup className="custom-input-group">
                    <InputGroup.Text>영문 이름</InputGroup.Text>
                    <Form.Control type="text" name="engCategoryName"></Form.Control>
                </InputGroup>
                <InputGroup className="custom-input-group">
                    <InputGroup.Text>한글 이름</InputGroup.Text>
                    <Form.Control type="text" name="korCategoryName"></Form.Control>
                </InputGroup>
                <div className="d-grid gap-2">
                    <Button variant="primary" size="lg" type="submit">{comment}</Button>
                </div>
            </form >
        </div >
    );
}
export default CreateCategory;