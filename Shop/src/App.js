import { Button, Navbar, Container, Nav, Row, Col } from 'react-bootstrap'
import './App.css';
import BackImg from './img/background.jpg'
import data from './data.js';
import { useState } from "react"


function App() {

  let [shoes, setShoes] = useState(data);
  console.log(shoes)
  return (
    <div className="App">
      
      <Button variant="primary">Primary</Button>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">호두네점빵</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">홈</Nav.Link>
            <Nav.Link href="#features">메뉴</Nav.Link>
            <Nav.Link href="#pricing">주문하기</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className='main-bg' style={{ backgroundImage: `url(${BackImg})` }}>

      </div>
      <div>
        <Container>
          <Row>

            {
              shoes.map(function(val, i) {
                return (
                  <Col sm className="shoes" key={i}>
                    <MenusCom shoes={shoes}  i={i} />
                  </Col>
                )
              })
            }
          </Row>
        </Container>
      </div>

    </div>
  );
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
