import Home from "./Home";
import Menu from "../components/Menu";
import './Profile.css';
import React, { useState, useEffect } from 'react';

function Profile() {

    const [userId, setUserId] = useState(sessionStorage.getItem("userId"));
    const [sessionInfo, setSessionInfo] = useState([]);
    const [userInfo, setUserInfo] = useState("");
    const [userName, setUserName] = useState("");
    const [userPwd, setuserPwd] = useState("");

    useEffect(() => {
        // fetchSessionInfo(userId);
        console.log(userId);
    }, [userId]); // userId가 변경될 때마다 useEffect가 호출되도록 설정

    // const fetchSessionInfo = async (userId) => {
    //     try {
    //         const response = await fetch(`http://localhost:4000/sessionInfo?userId=${userId}`);
    //         const sessionData = await response.json();
    //         setSessionInfo(sessionData); // 가져온 세션 정보를 상태에 저장
    //         console.log(userId);
    //     } catch (error) {
    //         console.error("세션 정보를 가져오는 중 에러 발생:", error);
    //     }
    // };

    const onSubmit = async () => {
        const response = await fetch(`http://localhost:4000/login?userId=${userId}&userPwd=${userPwd}`);
        const jsonData = await response.json();
        if (jsonData.result == "success") {
            sessionStorage.setItem('userId', userId);// sessionStrorage에 저장
            sessionStorage.setItem('userName', userName);
        } else {
            alert("로그인 실패!");
        }
    };

    async function fetchUserInfo() {
        try {
            let userId = sessionStorage.getItem("userId"); // getItem 인자로 키 값 넣기
            const response = await fetch(`http://localhost:4000/login?userId=${userId}`);
            const jsonData = await response.json();
            setUserInfo(jsonData);
        } catch (error) {
            console.log("에러!:", error);
        }
    };

    const list = [
        { id: 1, title: '여섯번째 여름', content: '영원을 말했죠꿈이 아니기를혼돈 속을 지나면반짝일 거라고 소나기가 내려오면이건 잠시뿐일 거야 눈이...' },
        { id: 2, title: '두 번째 게시물', content: '인권에 대한 무시와 경멸이 인류의 양심을 격분시키는 만행을 초래하였으며, 인간이 언론과 신앙의 자유, 그리고...' },
        { id: 3, title: '세 번째 게시물', content: 'I dreamed A blue sky, like tears Even when the day breaks, it eventually pours I said its eternal...'},
        { id: 4, title: '네 번째 게시물', content: 'This place Ive reached is the sixth It was the beginning of summer I dreamed A blue sky, like tears...' },
        { id: 5, title: '다섯 번째 게시물', content: 'The memory of that dazzling day Its a miracle, you know A little further, further Can I reach? In this long...' },
        { id: 6, title: '여 번째 게시물', content: <img src="data:image/jpeg;base64,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" alt="게시물 이미지"></img> },
    ];

    return <div>
        <div id="container">
            <div className="profile-header">
                <div className="profile-image">
                    <img src="data:image/jpeg;base64,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"></img>
                </div>
                <h2 className="profile-name">{sessionInfo.userName}</h2>
                <p className="addr">{sessionInfo.addr}</p>
            </div>
            <div className="sidebar">
                <div className="user-settings poor-story-regular">
                    <h4>설정</h4>
                    <ul className="user-settings2">
                        <li><a href="#">내프로필</a></li>
                        <li><a href="#">보안 설정</a></li>
                        <li><a href="#">이력 관리</a></li>
                    </ul>
                </div>
            </div>
            <div className="profile-posts poor-story-regular">
                <h5>내가 작성한 게시글</h5>
                <div className="row">
                    {list.map(item => (
                        <div className="col-sm-6 col-md-4 col-lg-4" key={item.id}>
                            <Menu title={item.title} content={item.content}></Menu>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>


}

export default Profile;