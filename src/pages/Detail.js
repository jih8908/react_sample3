import './Detail.css';
import React, { useState } from 'react';

function Detail() {
    const [title, setTitle] = useState('');
    const [contents, setContents] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault(); // 기본 동작 방지
        setTitle('');
        setContents('');
    };

    return (
        <div className="container gaegu-regular">
            <div className="input-group-container">
                <label htmlFor="title">제목:</label>
                <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required // 꼭 입력해야 하는 값
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
            {/* <button>글쓰기</button> */}
            <div>박스 1</div>
            <div>박스 2</div>
        </div>
    );
}

export default Detail;