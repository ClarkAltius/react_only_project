import Top from './ui/Top01';  //ui 폴더에 있는 Top01 이라는 앱을 가져와서 Top이라고 부를거야
import Content from './ui/Content01';
import Bottom from './ui/Bottom01';

function App() {
    console.log('Sample');

    return (
        <div className="App">
            <Top />
            <Content />
            <Bottom />
        </div>
    );
}

export default App;