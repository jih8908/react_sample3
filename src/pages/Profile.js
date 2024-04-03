import Home from "./Home";
import Menu from "../components/Menu";
function Profile() {

    const list = [
        { id: 1, title: '첫 번째 게시물', content: '첫 번째 게시물입니다.' },
        { id: 2, title: '두 번째 게시물', content: '두 번째 게시물입니다.' },
        { id: 3, title: '세 번째 게시물', content: '세 번째 게시물입니다.' },
        { id: 4, title: '네 번째 게시물', content: '네 번째 게시물입니다.' },
        { id: 5, title: '다섯 번째 게시물', content: '다섯 번째 게시물입니다.' },
    ];

    return <div>
        <div c>
            <div>
                <img src="data:image/jpeg;base64,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" />
            </div>
            <h2>홍길동!</h2>
            <h5>홍길동이다</h5>
            <div>
                20 100 150
            </div>
            <div>
                내가 작성한 게시글
                <div className="row">
                    {list.map(item => (
                        <div className="col-sm-6 col-md-4 col-lg-3" key={item.id}>
                            <Menu title={item.title} content={item.content}></Menu>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>

}

export default Profile;