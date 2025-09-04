import Top from './ui/Top02';  //ui 폴더에 있는 Top01 이라는 앱을 가져와서 Top이라고 부를거야
import Content from './ui/Content02';
import Bottom from './ui/Bottom02';

function App() {
    console.log('Sample');

    const breadlist = ["슈금방", "당파빵", "상도으치", "도우나스스스"]
    const coffeelist = ["Uhmerika-no", "Banal-Latte", "Krappucino", "Machiavellio"]

    return (
        <div className="App">
            <Top greeting="어서오너라" welcome="우리 차 마신다 장소" />
            {/* <Content bread01="슈굼방" bread02="당파빵" bread03="상도으치" bread04="도우낫" /> */}
            <Content type="ul" menus={breadlist} />
            <hr />
            <Content type="ol" menus={coffeelist} />
            <Bottom farewell="Tchus" comment="Hasta La Vista, BABY." />
        </div>
    );
}

export default App;