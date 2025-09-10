import { Table } from "react-bootstrap";

function App({ contents }) {
    const ProductList = () => {
        return (
            <tbody>
                {contents.map((item, index) => (
                    <tr key={index}>
                        <td className="text-center">{item.name}</td>
                        {/**숫자 형식으로 바꾸고 콤마 추가 */}
                        <td align="center">{Number(item.price).toLocaleString()}원</td>
                        <td align="center">{item.category === 'bread' ? '빵' : '음료'}</td>
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