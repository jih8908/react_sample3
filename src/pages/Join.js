import React, { useState } from 'react';
import './Join.css'; // 스타일 파일 import

function Join() {
  // 상태 변수 설정
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // 회원가입 버튼 클릭 시 실행되는 함수
  const handleSignup = () => {
    // 여기에 회원가입 처리 로직을 추가할 수 있습니다.
    // 실제로는 서버와 통신하여 회원가입 정보를 저장하거나, 로컬 상태에 저장할 수 있습니다.
    console.log('회원가입 정보:', username, email, password);
    // 회원가입 처리 로직을 추가하세요
  };

  return (
    <div className="signup-container">
      <h2>회원가입</h2>
      <div className="input-group">
        <label htmlFor="username">사용자 이름:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label htmlFor="email">이메일:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label htmlFor="password">비밀번호:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleSignup}>회원가입</button>
    </div>
  );
}

export default Join;