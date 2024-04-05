import React, { useState } from 'react';
import './Login.css';
import Menu from "../components/Menu";
import { useEffect } from 'react';


function Login() {
  var [userId, setUserId] = useState("");
  var [pwd, setPwd] = useState("");
  var [result, setResult] = useState("");

  const fnLogin = async () => {
    console.log(userId);
    try {
      const response = await fetch(`http://localhost:4000/login?userId=${userId}&pwd=${pwd}`);
      const jsonData = await response.json();
      // setResult(jsonData.result);
      console.log(jsonData.result);
    } catch (error) {
      console.error("에러!");
    }
  }

  const fnIdCheck = (e) => {
    setUserId(e.target.value);
  }

  const fnPassWorld = (e) => {
    setPwd(e.target.value);
  }

  return (
    <div>
      <div>
        아이디 : <input type='text' placeholder='아이디입력하셈' onChange={fnIdCheck} value={userId}></input>
      </div>
      <div>
        비밀번호 : <input type='password' placeholder='비번입력하셈' onChange={fnPassWorld} value={pwd}></input>
      </div>
      <button onClick={fnLogin}>로그인!</button>
    </div>
  );
}

export default Login;