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
        { id: 1, title: '여섯번째 여름', content: '영원을 말했죠 꿈이 아니기를 혼돈 속을 지나면 반짝일 거라고 소나기가 내려오면 이건 잠시뿐일 거야 눈이...' },
        { id: 2, title: '두 번째 게시물', content: <img className="custom-image" src="data:image/jpeg;base64,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"></img> },
        { id: 3, title: '세 번째 게시물', content: 'I dreamed A blue sky, like tears Even when the day breaks, it eventually pours I said its eternal...' },
        { id: 4, title: '네 번째 게시물', content: 'This place Ive reached is the sixth It was the beginning of summer I dreamed A blue sky, like tears...' },
        { id: 5, title: '다섯번째 게시물', content: 'The memory of that dazzling day Its a miracle, you know A little further, further Can I reach? In this long...' },
        { id: 6, title: '여섯번째 게시물', content: <img className="custom-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWI8_vNEqktdUt4o6tp3bF4H6wOjgigytrqEODEl2Q35XRZmLa5UJ_sSfMjQ&ss"></img>}
    ];

    async function fetchUserInfo() {
        try {
            let userId = sessionStorage.getItem("userId"); // getItem 인자로 키 값 넣기
            const response = await fetch(`http://localhost:4000/profile?userId=${userId}`);
            const jsonData = await response.json();
            setUserInfo(jsonData);
        } catch (error) {
            console.log("에러!:", error);
        }
    };

    return <div>
        <div id="container">
            <div className="profile-header orbit-regular">
                <div className="profile-image">
                    <img src="data:image/jpeg;base64,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"></img>
                </div>
                <h2 className="profile-name">은호</h2>
                <p className="addr">강원도 원주시</p>
            </div>
            <div className="sidebar">
                <div className="user-settings orbit-regular">
                    <h4>설정</h4>
                    <ul className="user-settings2">
                        <li><a href="#">내프로필</a></li>
                        <li><a href="#">보안설정</a></li>
                        <li><a href="#">이력관리</a></li>
                    </ul>
                </div>
            </div>
            <div className="profile-posts orbit-regular">
                <h5>내가 작성한 게시글</h5>
                <div className="row orbit-regular">
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