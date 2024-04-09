import React, { useState, useEffect } from 'react';
import './Write.css';

function Write() {
    // 제목과 내용을 상태로 관리합니다.
    const [title, setTitle] = useState('');
    const [contents, setContents] = useState('');

    const [userId, setUserId] = useState('');

    useEffect(() => {
        setUserId(sessionStorage.getItem('userId'));
        console.log("이거 나와야 함==>", userId);
    }, [userId]);

    const handleSubmit = async (event) => {
        event.preventDefault(); // 기본 동작 방지

        setTitle('');
        setContents('');

        try {
            const response = await fetch(`http://localhost:4000/write?userId=${userId}&title=${title}&contents=${contents}`, {
                method: 'GET',
            });
            // 서버로부터의 응답 처리
            const data = await response.json();
            console.log('글쓰기 응답 ==>', data);
            if (data.success) {
                if (window.confirm('글이 성공적으로 작성되었습니다. 홈으로 이동하시겠습니까?')) {
                    
                    window.location.href = "/";
                }
            } else {
                console.error('글쓰기 요청 실패 ==>', data.error);
            }
        } catch (error) {
            console.error('글쓰기 요청 실패:', error);
        }
    };

    return (
        <div className="container gaegu-regular">
            <form onSubmit={handleSubmit}>
                <div className="input-group-container">
                    <label htmlFor="title">제목:</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required//꼭 입력해야 하는 값
                    />
                </div>
                <div className="input-group-container">
                    <label htmlFor="contents">내용:</label>
                    <textarea
                        id="contents"
                        value={contents}
                        onChange={(e) => setContents(e.target.value)}
                        required
                    />
                </div>
                <button className="submit-button" type="submit">글쓰기</button>
            </form>
        </div>
    );
}

export default Write;