import Menu from "../components/Menu";
import './Home.css';
import Navbar from "../components/Navbar";

function Home() {
    const list = [
        { id: 1, title: '여섯번째 여름', content: '영원을 말했죠꿈이 아니기를혼돈 속을 지나면반짝일 거라고 소나기가 내려오면이건 잠시뿐일 거야눈이 부신 그날의 기억은...' },
        { id: 2, title: '두 번째 게시물', content: '인권에 대한 무시와 경멸이 인류의 양심을 격분시키는 만행을 초래하였으며, 인간이 언론과 신앙의 자유, 그리고 공포와...' },
        { id: 3, title: '세 번째 게시물', content: 'I dreamed A blue sky, like tears Even when the day breaks, it eventually pours I said its eternal...' },
        { id: 4, title: '네 번째 게시물', content: 'This place Ive reached is the sixth It was the beginning of summer I dreamed A blue sky, like tears...' },
        { id: 5, title: '다섯번째 게시물', content: 'The memory of that dazzling day Its a miracle, you know A little further, further Can I reach? In this long...' },
        { id: 6, title: '여섯번째 게시물', content: <img src="data:image/jpeg;base64,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" alt="게시물 이미지"></img> },
    ];

    return <div>
        <div className="containerBox">
            <div className="home-image">
                <img src=""></img>
            </div>
        </div>
        <div className="containerBox2 gaegu-regular">
            <h1 className="text-center my-5">INSTARWORD</h1>
            <div className="row">
                {list.map(item => (
                    <div className="col-sm-6 col-md-4 col-lg-3" key={item.id}>
                        <Menu title={item.title} content={item.content}></Menu>
                    </div>
                ))}
            </div>
        </div>
    </div>
}
export default Home;