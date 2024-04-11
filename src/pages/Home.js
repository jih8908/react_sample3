import Menu from "../components/Menu";
import './Home.css';
import Navbar from "../components/Navbar";

function Home() {
    const list = [
        { id: 1, title: '여섯번째 여름', content: '영원을 말했죠 꿈이 아니기를 혼돈 속을 지나면 반짝일 거라고 소나기가 내려오면 이건 잠시뿐일 거야 눈이 부신 그날의 기억은 기적이니까요 좀 더 멀리멀리 닿을 수 있을까 길고 긴 여정에...' },
        { id: 2, title: '두 번째 게시물', content: <img id="custom-image" src="data:image/jpeg;base64,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"></img> },
        { id: 3, title: '세 번째 게시물', content: 'I dreamed A blue sky, like tears Even when the day breaks, it eventually pours I said its eternal Underneath the azure canopy, dreams ascend...' },
        { id: 4, title: '네 번째 게시물', content: 'This place Ive reached is the sixth It was the beginning of summer I dreamed A blue sky, like tears...' },
        { id: 5, title: '다섯번째 게시물', content: 'その眩しい日の記憶。それは奇跡です、分かりますか？もう少し、もっと遠くまで。この長い中で、私は到達できるのでしょうか...' },
        { id: 6, title: '여섯번째 게시물', content: <img id="custom-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWI8_vNEqktdUt4o6tp3bF4H6wOjgigytrqEODEl2Q35XRZmLa5UJ_sSfMjQ&ss"></img> }];


    return <div>
        <div className="containerBox">
            <div className="home-image">
                <img width={1600} height={400} src="https://img.freepik.com/free-vector/banner-with-diverse-happy-people-group-standing-together-white_90220-141.jpg?t=st=1712806292~exp=1712809892~hmac=7b9dbb56f205b0da66c66cca1444afe70a1d9146278d0dfc615be81604fb876d&w=1380"></img>
            </div>
        </div>
        <div className="containerBox2 orbit-regular">
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