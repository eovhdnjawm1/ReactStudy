import { Button, Navbar, Container, Nav, Row, Col } from 'react-bootstrap'
import './App.css';
import { useContext, useState } from "react"
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import DetailPage from './pages/detail.js';
import BackImg from './img/background.jpg'
import data from './data.js';
import axios from 'axios';
import React from 'react';
import Cart from './Cart.js';

let 재고context = React.createContext();

function App() {
  let [shoes, setShoes] = useState(data);
  let navigate = useNavigate();
  let [jsonCount, setjsonCount] = useState(2);
  let [btnOnOff, setBtnOnOff] = useState(true);
  let [loding, setLoding] = useState(false);

  let [재고, 재고변경] = useState([10, 11, 12]);

  return (
    <div className="App">

      <재고context.Provider value={재고}>
        <div>
          재고값 {재고[0]}
          <Event />
        </div>
      </재고context.Provider>
      <p>
        두번째 재고값 {재고[0]}
      </p>
      <Navbar bg="dark" variant="dark" style={{width:"100vw"}}>
        <div>
          <Navbar.Brand href="#home">호두네점빵</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => { navigate('/') }}>홈</Nav.Link>
            <Nav.Link onClick={() => { navigate('/detail') }}>메뉴</Nav.Link>
            <Nav.Link onClick={() => { navigate(-1) }}>주문하기</Nav.Link>
          </Nav>
        </div>
      </Navbar>

      <Routes>
        <Route path="/" element={<Container style={{ margin:"0", padding: "0", width:"100vw" }}>
          <div className='main-bg' style={{ marginLeft:"50px", width: "100vw", objectFit: "cover", backgroundImage: `url(${BackImg})` }}></div>
          <Row>
            {
              shoes.map(function (val, i) {
                return (
                  <Col sm className="shoes" key={i}>
                    <MenusCom shoes={shoes} i={i} />
                  </Col>
                )
              })
            }
          </Row>
        </Container>} />
        <Route path="/detail/:id" element={<DetailPage shoes={shoes} />} />
        <Route path="/about" element={<About />} />
        <Route path="/event" element={<Event />}>
          <Route path="one" element={<div>첫 주문시 양배추즙 서비스</div>} />
          <Route path="two" element={<div>생일기념 쿠폰받기</div>} />
        </Route>
        <Route path="/Cart" element={<Cart />}>
          
        </Route>
        <Route path="*" element={<h1>없는 페이지 입니다.</h1>} />
      </Routes>
      {/* <Link onClick={() => {navigate('/Cart')}}>디테일 페이지로 갑시다</Link> */}
      <Link to="/Cart">디테일 페이지로 갑시다</Link>
      <Link to="/">홈 페이지로 갑시다</Link>

      {

        btnOnOff === true ? <button onClick={() => {

          axios.get(`https://codingapple1.github.io/shop/data${jsonCount}.json`)
            .then((result) => {
              // 로딩중 띄우기
              setLoding(true);
              const arr1 = [...shoes];
              const arr2 = [...result.data];
              setjsonCount(jsonCount += 1)
              jsonCount > 3 ? setBtnOnOff(false) : jsonCount += 1;

              arr1.push(...arr2);
              console.log(arr1)
              setShoes(arr1);
              setLoding(false);

            })
            .catch((e) => {
              console.log(e, '실패함');
              // 로딩중 숨기기~
            })
        }}>버튼</button>
          : <h2>더이상 상품이 없다.</h2>}
      {
        loding === true ? <h2>로딩중...</h2> : null
      }
      
    </div>
  );
}

function Event() {
  
  let 재고 = useContext(재고context);

  return (
    <div>
      <h2>오늘의 이벤트</h2>
      <Outlet></Outlet>
    </div>
  )
}


function About() {
  return (
    <div>
      <h4>회사정보임</h4>
      <Outlet></Outlet>
    </div>
  )
}


function MenusCom(props) {
  return (
    <div>
      <img src={`${props.shoes[props.i].image}`} alt="#" width="80%" />
      <h4>{props.shoes[props.i].title}</h4>
      <p>{props.shoes[props.i].price}</p>
    </div>
  )
}



export default App;
