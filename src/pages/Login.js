import React, { useState } from 'react';
import './Login.css';
import Menu from "../components/Menu";

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    fetch('http://localhost:4000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('로그인 실패');
    })
    .then(data => {
      // 서버에서 반환한 데이터를 처리합니다.
      console.log(data);
      setLoggedIn(true);
    })
    .catch(error => {
      console.error('로그인 에러:', error);
      alert('올바른 사용자 이름과 비밀번호를 입력하세요.');
    });
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUsername('');
    setPassword('');
  };

  return (
    <div className="App">
      <div className="login-container">
        {loggedIn ? (
          <div>
            <h2>로그인 성공!</h2>
            <button onClick={handleLogout}>로그아웃</button>
          </div>
        ) : (
          <div>
            <h2>로그인</h2>
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
              <label htmlFor="password">비밀번호:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button onClick={handleLogin}>로그인</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Login;