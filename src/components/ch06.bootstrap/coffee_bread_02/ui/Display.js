//display that comes out on clicking the table

import { Table } from "react-bootstrap";
import './../css/Display.css';

function App({ product }) {
    console.log('샘플');
    return (
        <div className="mytable">
            <Table striped bordered hover>
                <tbody>
                    <tr className="text-center">
                        <td width="40%">
                            <Table striped bordered hover>
                                <tbody>
                                    <tr>
                                        <td className="myLeft">아이디</td>
                                        <td className="myMiddle">{product.id}</td>
                                    </tr>
                                    <tr>
                                        <td className="myLeft">이름</td>
                                        <td className="myMiddle">{product.name}</td>
                                    </tr>
                                    <tr>
                                        <td className="myLeft">단가</td>
                                        <td className="myMiddle">{Number(product.price).toLocaleString()}</td>
                                    </tr>
                                    <tr>
                                        <td className="myLeft">카테고리</td>
                                        <td className="myMiddle">{product.category === 'bread' ? '빵' : '음료수'}</td>
                                    </tr>
                                    <tr>
                                        <td className="myLeft">재고</td>
                                        <td className="myMiddle">{Number(product.stock).toLocaleString()}</td>
                                    </tr>

                                </tbody>
                            </Table>
                        </td>
                        <td>
                            <img src={`/images/${product.image}`} alt={product.name} />
                        </td>
                        <td dotted bordered hover>
                            <p className="myDescription">
                                {product.description}
                            </p>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
}
export default App;