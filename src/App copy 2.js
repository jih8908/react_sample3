import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function Main(props){//props 넘겨줄때 태그안 속성에 변수명 새로 설정해야됨
  return <div>
            <h1>메인이다!</h1>
            <div>슬라이더~~~
              <Product x={props.i}></Product>
            </div>
         </div>
}

function Product(props){
  return <div>
            제품목록~~~~~~
            <Board y={props.x}></Board>
          </div>

}

function Board(props){
  return <div>
            게시판 목록~~~<br/>
            {props.y}
        </div>
}

function Main2(props){
  return <div>
            <h1>서브 메인이다!</h1>
            <div>슬라이더~~~
              <Product2 onAddNum={()=>{props.onAddNum()}}></Product2>
            </div>
         </div>
}

function Product2(props){
  return <div>
            제품목록~~~~~~
            <Board2 onAddNum={()=>{props.onAddNum()}}></Board2>
          </div>

}

function Board2(props){
  // 컴포넌트 안에서 기능 넣지 말기
  return <div>
            숫자 : <button onClick={()=>{props.onAddNum()}}>증가</button><br/>          
            게시판 목록~~~<br/>
        </div>
}

function App() {//여기서만 내가 필요한 기능 재정의 가능, 컴포넌트 안에서 재정의 금지
  let [num, setNum] = useState(1);//초기값 1로
  return (
    <>
      <Main i={num}></Main>
      <Main2 onAddNum={()=>{setNum(num+1)}}></Main2>
      {/* <Main2 onAddNum={()=>{setNum(num+5)}}></Main2> */}
    </>
  );
}

export default App;
