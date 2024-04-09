import React, { useState } from 'react';
import './Login.css';
import Menu from "../components/Menu";
import { useEffect } from 'react';


function Login() {
  var [userId, setUserId] = useState("");
  var [pwd, setPwd] = useState("");
  var [result, setResult] = useState("");

  const fnLogin = async () => {
    try {
      const response = await fetch(`http://localhost:4000/login?userId=${userId}&pwd=${pwd}`);
      const jsonData = await response.json();
      if (jsonData.result === "success") {
        
        alert("로그인 성공!");
        await sessionStorage.setItem("userId", userId);
        window.location.href = `/profile?userId=${userId}`;//세션 가져감
        console.log(userId);       
      } else {
        alert("로그인 실패!");
        alert("로그인에 실패했습니다. 아이디와 비밀번호를 확인해주세요.");
      }
      //console.log(jsonData.result);
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
    <div className='gaegu-regular container'>
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