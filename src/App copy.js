import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { legacy_createStore } from 'redux';
import { Provider, useSelector, useDispatch } from 'react-redux';
import _ from 'lodash';

function Main(props) {//props 넘겨줄때 태그안 속성에 변수명 새로 설정해야됨
  return <div>
    <h1>메인이다!</h1>
    <div>슬라이더~~~
      <Product x={props.i}></Product>
    </div>
  </div>
}

function Product(props) {
  return <div>
    제품목록~~~~~~
    <Board y={props.x}></Board>
  </div>

}

function Board(props) {
  var num = useSelector((state)=>{return state.num});//((state)=>state.num)와 같음
  //var num = store.getState().num;와 같은 뜻
  console.log(num);
  return <div>
    게시판 목록~~~<br />
    숫자 : {num}
    {/* state = {num:1} 즉  */}

  </div>
}

function Main2(props) {
  return <div>
    <h1>서브 메인이다!</h1>
    <div>슬라이더~~~
      <Product2 onAddNum={() => { props.onAddNum() }}></Product2>
    </div>
  </div>
}

function Product2(props) {
  let addFunc = useDispatch();
  return <div>
    제품목록~~~~~~
    숫자 : <button onClick={()=>{addFunc({type : "minus"})}}>감소</button><br/>
    <Board2 onAddNum={() => { props.onAddNum() }}></Board2>

  </div>
}

function Board2(props) {
  // 컴포넌트 안에서 기능 넣지 말기
  let addFunc = useDispatch();
  return <div>
    숫자 : <button onClick={()=>{addFunc({type : "add"})}}>증가</button><br/>
    {/* action에 매개변수로 넘겨줌 type 고정 {type : "add"} */}
    게시판 목록~~~<br/>
  </div>
}

function reducer(state, action) {//일반함수는 소문자로 시작, state= 현재 상태값 저장되어있음 및 일반함수값 및 원본값, action=이벤트에 처리하는 키워드 및 내가 만든 함수
  if (state === undefined) {//무조건 첨엔 undefined
    return { num: 1 }
  }
  console.log(action);
  var newState = {...state};// state = { num: 1 }
  if(action.type === "add"){
    newState.num +=1;
  }else if(action.type === "minus"){
    newState.num -=1;
  }
  return newState;
}

const store = legacy_createStore(reducer);//legacy 붙은건 이전 버전, store=객체 및 함수결과 담고 있음
function App() {//여기서만 내가 필요한 기능 재정의 가능, 컴포넌트 안에서 재정의 금지
  // let [num, setNum] = useState(1);//초기값 1로
  // let map = {num : 1};//객체들은 변수 선언하면 저장공간이 아니라 주소 복사, value와 래퍼런스 차이 알기(일반변수, 맵차이?)
  // let newMap = {...map};//{}
  // newMap.num = 10;//
  // console.log("map ==> ", map.num);

  // let num = 1;//일반 변수 선언하면 저장공간 따로 보관
  // let newNum = num;
  // newNum = 10;
  // console.log("num ==>", num);

  // let arr = [1,2,3,4,5]; //배열 = 객체, 객체는 주소 복사
  // let newArr = [...arr]; //...복사기능, 여기선 [1,2,3,4,5]값 복사
  // newArr[3] = 10;
  // console.log("arr=>", arr[3]);//[1,2,3,4,5] 
  // console.log("newArr=>", newArr[3]);//[1,2,3,10,5]

  // let hong = { name: "홍길동", addr: { post: "000", area: "인천시" }, age: 20 };
  // //let copyHong = _.cloneDeep(hong);//이렇게하면 모든 값 복사
  // let copyHong = JSON.parse(JSON.stringify(hong));//모든 값 복사 근데 안에 함수 없어야함 함수뜻 문자열로 바꿔주고 다시 제이슨 형태로 바꿔줌
  // var arr = [1, 2, 3, 4, 5, 6, 7]
  // _.forEach(arr, function (value) {
  //   console.log(value);
  // });

  //forEach = 깊은복사, lodash = 리스트나 맵을 효율적으로 관리하도록 도와줄 수 있는 라이브러리

  return (
    <>
      <Provider store={store}>
        {/* Provider를 정의해서 store에 대한 접근 권한 생김 */}
        <Main></Main>
        <Main2></Main2>
      </Provider>
    </>
  );
}

export default App;
