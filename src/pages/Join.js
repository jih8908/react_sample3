import React, { useState } from 'react';
import './Join.css';
import Menu from "../components/Menu";
import { useEffect } from 'react';
import { useLocation   } from 'react-router-dom';

function Join() {
  var [cnt, setCnt] = useState(1);//재 랜더링(실시간 반응) 하기 위해 사용 => useState
  var [userId, setUserId] = useState("");
  var [userName, setUserName] = useState("");
  var [addr, setAddr] = useState("");
  var [pwd, setPwd] = useState("");
  var [result, setResult] = useState("");
  // function fnAddCnt(){
  //     setCnt(cnt+1);
  // } 함수 선언 위치 안에서 해도 가능
  // function, const 함수 동일
  // const fnAddCnt = ()=>{
  //     setCnt(cnt+1);
  // }

  // const fnAddCnt = () => {
  //   setCnt(cnt + 1);
  // }

  const location = useLocation();

  const fnAddUserInfo = async () => {
    // 입력된 정보가 유효한지 확인
    if (!userId || !userName || !pwd || !addr) {
      alert('입력된 정보가 유효하지 않습니다.');
      return;
    }
    try {
      const userData = {
        userId: userId,
        userName: userName,
        password: pwd,
        address: addr
      };
  
      // 서버에 회원가입 정보를 전송
      const response = await fetch(`http://localhost:4000/signup?userId=${userId}&userName=${userName}&password=${pwd}&address=${addr}`, {
        method: 'GET',
      });
  
      // 서버 응답을 확인하여 회원가입 성공 또는 실패를 처리
      if (response.ok) {
        alert('회원가입 성공!');
        if (location.pathname !== '/') {
          window.location.href = '/'; // 현재 페이지가 홈이 아니라면 홈으로 이동
        }
      } else {
        alert('회원가입 실패!');
      }
    } catch (error) {
      alert('에러 발생:', error);
    }
  };
  

  const fnIdCheck = (e) => {
    setUserId(e.target.value);//이벤트 객체 활용 => value에 대한 이벤트 실행
    //console.log(userId);
  }
  useEffect(() => {
    if (userId == "") {
      setResult("");
    }
    async function fetchIdCheck() {
      try {
        const response = await fetch(`http://localhost:4000/idCheck.dox?userId=${userId}`);
        const jsonData = await response.json();
        setResult(jsonData.result);
        console.log(jsonData.result);
      } catch (error) {
        console.error("에러!");
      }
    }
    fetchIdCheck();
  }, [userId]);//[userId] 무한 루프에 빠지는 걸 방지하기 위해 명시해두기



  useEffect(() => {
    console.log("Array!", cnt);
  }, [cnt]);


  return (
    <div>
      {/* <div>{cnt}</div>
      <button onClick={fnAddCnt}>증가!</button> */}
      <h2>회원가입</h2>
      <div className="input-group">
        이름 :
        <input type="text" placeholder='홍길동' id="userName" value={userName} onChange={(e) => setUserName(e.target.value)}>
        </input>
      </div>
      <div>
        아이디 : <input type="text" placeholder='아이디입력하세요' onChange={fnIdCheck} value={userId}></input>
        {/* {userId != "" && <div>{result}</div>} */}
        {/* {}안에서 userId != "" 는 if로 조건줌*/}
        {/* setResult = result로 변경 */}
        {/* {userId == "" && <div>아이디 입력하세요</div>} */}
        {userId != "" ? <div>{result}</div> : <div>아이디 입력하세요</div>}
      </div>
      <div>
        비밀번호 : <input type="password" value={pwd} onChange={(e) => setPwd(e.target.value)}></input>
      </div>
      <div>
        주소 : <input type="text" placeholder='서울시' value={addr} onChange={(e) => setAddr(e.target.value)}></input>
      </div>
      <button onClick={fnAddUserInfo}>회원가입</button>
    </div>)
}

export default Join;