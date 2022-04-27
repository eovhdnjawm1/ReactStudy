import './App.css';
<<<<<<< HEAD
import { useState } from 'react'

function App() {
  let [글제목, b] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬독학'])
  let [logo, setLogo] = useState('ReactBlog')
  let [따봉, 따봉변경] = useState([0, 0, 0]);
  // 작명 2개 할 수 있음

  let [modal, setModal] = useState(false);

  // destructuring 문법
  // let num = [1, 2];
  // let [a, c] = num;

  // state를 왜써야하냐? 차이점이 있다
  // state를 쓰면 html은 자동 재랜더링이 된다.
  // 변수는 재 랜더링이 안된다.

  // state의 단점은? 남발하면?

  // function 함수(){
  //   따봉 + 1;
  // }

  // state 갈아 치울때 기존과 신규가 같으면 변경안해줌 ( 자원 절약 )
  // array/object 특징 array를 변수에 담으면 배열의 주소만을 변수에 담겨져있음
  // 고로 신규 스테이트와 기존 스테이트가 같은 주소값을 바라보고있기 때문에 안바뀜
  const count = [1, 2, 3];
=======
import {useState} from 'react'

function App() {
  let [글제목 ,b] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬독학'])
  let [logo ,setLogo] = useState('ReactBlog')
  let [따봉, 따봉변경] = useState(0);
  // 작명 2개 할 수 있음

// destructuring 문법
// let num = [1, 2];
// let [a, c] = num;

// state를 왜써야하냐? 차이점이 있다
// state를 쓰면 html은 자동 재랜더링이 된다.
// 변수는 재 랜더링이 안된다.

// state의 단점은? 남발하면?

// function 함수(){
//   따봉 + 1;
// }

// state 갈아 치울때 기존과 신규가 같으면 변경안해줌 ( 자원 절약 )
// array/object 특징 array를 변수에 담으면 배열의 주소만을 변수에 담겨져있음
// 고로 신규 스테이트와 기존 스테이트가 같은 주소값을 바라보고있기 때문에 안바뀜

>>>>>>> cd478de141312a4fdbc83aa26c62e9a834ed5d3f
  return (
    <div className="App">
      <button onClick={() => {
        const sortArray = [...글제목];
        sortArray.sort()
<<<<<<< HEAD
        b(sortArray)
      }}>가나다순 정리 버튼 </button>
      {/* <div className="black-nav">
        <h4 >{logo}</h4>
      </div>
      <div className="list">
        <h4>{글제목[0]}<span onClick={() => { 따봉변경(따봉 += 1) }}>✌</span> {따봉} </h4>
=======
        b(sortArray)}}>가나다순 정리 버튼 </button>
      <div className="black-nav">
        <h4 >{logo}</h4>
      </div>
      <div className="list"> 
        <h4>{글제목[0]}<span onClick={()=>{따봉변경(따봉 += 1)}}>✌</span> {따봉} </h4>
>>>>>>> cd478de141312a4fdbc83aa26c62e9a834ed5d3f
        <p>2월 17일 발행</p>
        <button onClick={() => {
          let copy = [...글제목];
          copy[0] = '여자코트 추천'
          b(copy);
        }}>제목 변경하기</button>
      </div>

<<<<<<< HEAD
      <div className="list" style={{ fontSize: "14px" }}>
=======
      <div className="list">
>>>>>>> cd478de141312a4fdbc83aa26c62e9a834ed5d3f
        <h4>{글제목[1]}<span>✌</span> {따봉} </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[2]}<span>✌</span> {따봉} </h4>
        <p>2월 17일 발행</p>
<<<<<<< HEAD
      </div> */}
      {
        // 조건문을 쓸려면 if 는 안되니깐 삼항 연산자를 써야한다.
        modal === true ? <TitleModal /> : null
      }
      {/* <button onClick={() =>{
        if(modal === false)
        setModal(true)
        else
        setModal(false)}}>모달창</button> */}

      <button onClick={() => {
        setModal(!modal)
      }}>모달창</button>

      {
        // 중괄호 안에서는 for이 안된다

        글제목.map(function (val, i) {
          return (
            <div className="list" key={i}>
              <h4>{val}
                <span onClick={() => {
                  var test = [...따봉]
                  test[i] += 1; 
                  // 따봉[i] = test[i]
                  따봉변경(test)
                }}
                
                >✌{따봉[i]}</span>
              </h4>
              <p>2월 17일 발행</p>
            </div>)
        })
      }
=======
      </div>
>>>>>>> cd478de141312a4fdbc83aa26c62e9a834ed5d3f
    </div>
  );
}

function TitleModal() {
  return (
    <div className='modal'>
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

// className = modal -> 하나로 아예 <Modal></Modal> 이렇게 만들 수 있음
// 동적 UI 만드는 Step
// 1. html css로 미리 디자인 완성
// 2. UI 현재 상태를 state로 저장
// 3. state에 따라 UI가 어떻게 보일지 작성

// js 문법 중에 map
// [1, 2, 3].map() 을 쓸 수있다
// [1, 2, 3].map(function(){
//    1. map을 쓰면 콜백함수를 쓸 수 있다. (함수안에서 다른 함수 호출)
//    2. return을 쓰면 배열의 인덱스만큼 return 값을 배열에 넣어 줌
//    3. fucntion(a) console.log(a) 하면 배열의 값을 그대로 출력해준다
// })
export default App;
