import './App.css';
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

  return (
    <div className="App">
      <button onClick={() => {
        const sortArray = [...글제목];
        sortArray.sort()
        b(sortArray)}}>가나다순 정리 버튼 </button>
      <div className="black-nav">
        <h4 >{logo}</h4>
      </div>
      <div className="list"> 
        <h4>{글제목[0]}<span onClick={()=>{따봉변경(따봉 += 1)}}>✌</span> {따봉} </h4>
        <p>2월 17일 발행</p>
        <button onClick={() => {
          let copy = [...글제목];
          copy[0] = '여자코트 추천'
          b(copy);
        }}>제목 변경하기</button>
      </div>

      <div className="list">
        <h4>{글제목[1]}<span>✌</span> {따봉} </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[2]}<span>✌</span> {따봉} </h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}

export default App;
