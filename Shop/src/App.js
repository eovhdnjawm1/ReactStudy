import { Button, Navbar, Container, Nav, Row, Col } from 'react-bootstrap'
import './App.css';
import { useState } from "react"
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import DetailPage from './pages/detail.js';
import BackImg from './img/background.jpg'
import data from './data.js';
import axios from 'axios';

function App() {
  let [shoes, setShoes] = useState(data);
  let navigate = useNavigate();

  return (
    <div className="App">
      

        <Link to="/">홈</Link>
        <Link to="/detail">상세페이지</Link>

        <Button variant="primary">Primary</Button>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">호두네점빵</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link onClick={() => { navigate('/') }}>홈</Nav.Link>
              <Nav.Link onClick={() => { navigate('/detail') }}>메뉴</Nav.Link>
              <Nav.Link onClick={() => { navigate(-1) }}>주문하기</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        
        <Routes>
        <Route  path="/" element={ <Container style={{  padding:"0"}}>
          <div className='main-bg' style={{ width:"100vw", objectFit:"cover",  backgroundImage: `url(${BackImg})` }}></div>
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
        
        <Route path="*" element={<h1>없는 페이지 입니다.</h1>} />
      </Routes>
        <button onClick={() => {
          
          axios.get('https://codingapple1.github.io/shop/data2.json')
          .then((result) => {
            const arr1 = [...shoes];
            const arr2 = [...result.data];
            
            arr1.push(...arr2);
            console.log(arr1)
            setShoes(arr1);
          })
          .catch((e) => {
            console.log(e,'실패함');
          })
        }}>버튼</button>
    </div>
  );
}

function Event() {
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
