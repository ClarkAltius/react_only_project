import { Table } from "react-bootstrap";

function App({ contents, onClickToContent }) {

    {/**테이블의 특정 행의 셀 1개를 클릭했다 */ }
    const ClickItem = (event) => {
        {/** 선택 항목의 부모 id 읽어와서 할당 */ }
        const itemId = event.target.parentNode.id;
        console.log(`선택된 상품 id: ${itemId}`);

        onClickToContent(itemId); /**상위 컴포넌트에 해당 id를 넘겨준다 */

    }

    const ProductList = () => {
        return (
            <tbody>
                {contents.map((item, index) => (
                    <tr id={item.id} key={index}>
                        <td className="text-center" onClick={ClickItem}>{item.name}</td>
                        {/**숫자 형식으로 바꾸고 콤마 추가 */}
                        <td align="center" onClick={ClickItem}>{Number(item.price).toLocaleString()}원</td>
                        <td align="center" onClick={ClickItem}>{item.category === 'bread' ? '빵' : '음료'}</td>
                    </tr>
                ))}
            </tbody>
        )
    };
    // console.log('샘플');
    return (
        <>
            <h2>Content</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th className="text-center">이름</th>
                        <th className="text-center">가격</th>
                        <th className="text-center">카테고리</th>
                    </tr>
                </thead>
                {/** 화살표 함수를 사용하여 상품 목록 생성 */}
                {ProductList()}
            </Table>
        </>
    );
}
export default App;