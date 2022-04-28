import './App.css';
import { useState } from 'react'

function App() {

  const [title, setTitle] = useState(['남자코트 추천', '강남 우동맛집', '파이썬 독학'])
  const [title2, setTitle2] = useState(['여자 코트 추천', '역삼 우동맛집', 'c++ 독학'])
  const [good, goodCount] = useState([0,0,0])
  const [modalOnOff, setModal] = useState(false)
  const [propsTitle, setPropsTitle] = useState(0)
  const [입력값, 입력값변경] = useState('');
  const [표시값, 표시값변경] = useState('');
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

      <div >
        {
          title.map(function (val, i) {
            return (
              <div className='list' key={i}>
                <button onClick={() => {
                  
                    setPropsTitle(i)
                    setModal(!modalOnOff)
                  
                }}>모달창 오픈</button>
                <h4>{val}
                  <span onClick={() => {
                    var 따봉 = [...good]
                    따봉[i] += 1;
                    
                    goodCount(따봉);
                  }}>{good[i]}
                  </span>
                <button onClick={() => {
                  // const num = i;
                  // setTitle(title.filter((입력값, i) => i !== num))
                  
                  let copy = [...title];
                  copy.splice(i, 1);
                  setTitle(copy);
                }}>리스트 삭제</button>
                </h4>
                <p>2월 17일 발행</p>
              </div>
            )
          })
        }
        <input type="text" onChange={(e) => {
          console.log(e.target.value);
          입력값변경(e.target.value);
          표시값변경(입력값);

          // e.target 요 이벤트가 발생하는곳
          // e.target.value 입력한 값을 알려줌
        }}>

        </input>
        <button onClick={() => {
          
          return(
            
            setTitle([입력값, ...title ])

          )
        }}>추가하기</button>
        <h4>{표시값}</h4>
      </div>
      {
        modalOnOff === true ? <Modal setTitle={setTitle} title={title} title2={title2} propsTitle={propsTitle} /> : null
      }
    </div>
  );
}

function Modal(props) {
  return(
    <div className='modal'>
      <div>제목 {props.title[props.propsTitle]}</div>
      <div>날짜</div>
      <div>상세내용</div>
      <button onClick={ () => {
        // props.setTitle[props.title2]
        props.setTitle(props.title2)
      }}>제목 변경하기</button>
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
