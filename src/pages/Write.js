import React, { useState } from 'react';
import './Write.css';

function Write() {
    // 제목과 내용을 상태로 관리합니다.
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    // 글쓰기 버튼을 눌렀을 때 실행되는 함수입니다.
    const handleSubmit = (event) => {
        event.preventDefault(); // 기본 동작 방지

        // 입력된 제목과 내용을 콘솔에 출력합니다.
        console.log('제목:', title);
        console.log('내용:', content);

        // 입력값 초기화
        setTitle('');
        setContent('');
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
                    <label htmlFor="content">내용:</label>
                    <textarea
                        id="content"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                    />
                </div>
                <button className="submit-button" type="submit">글쓰기</button>
            </form>
        </div>
    );
}

export default Write;