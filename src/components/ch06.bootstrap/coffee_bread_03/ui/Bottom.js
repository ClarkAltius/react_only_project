import { Button, ButtonGroup } from "react-bootstrap";

function Bottom({ message, onClickToBottom }) {

    const ClickMenu = (event) => {
        /**ID속성에 mode값을 작성 */
        const targetId = event.target.id;
        onClickToBottom(targetId);
        console.log(`(Bottom) 작동 체크`)
    }
    // console.log('샘플');
    return (
        <>
            <h2>Bottom</h2>
            <ButtonGroup aria-label="Basic example">
                <Button id="get_insert" variant="secondary" onClick={ClickMenu}>생성</Button>{` `}
                <Button id="get_update" variant="secondary" onClick={ClickMenu}>수정</Button>{` `}
                <Button id="get_delete" variant="secondary" onClick={ClickMenu}>삭제</Button>{` `}
                <Button id="get_category_add" variant="secondary" onClick={ClickMenu}>카테고리 추가</Button>
            </ButtonGroup>
            <br />

            {message}
        </>
    );
}
export default Bottom;