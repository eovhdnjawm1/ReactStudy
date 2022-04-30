import {Button, Navbar, Container, Nav, Row, Col} from 'react-bootstrap'
import './App.css';
import BackImg from './img/background.jpg'

function App() {
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
  <div className='main-bg' style={{backgroundImage : `url(${BackImg})`}}>

  </div>
    <div>
    <Container>
  <Row>
    <Col sm>
      <img src="https://codingapple1.github.io/shop/shoes1.jpg" alt="#" width="80%" />
      <h4>상품명</h4>
      <p>상품설명</p>
      </Col>
    <Col sm><img src="https://codingapple1.github.io/shop/shoes2.jpg" alt="#" width="80%" />
      <h4>상품명</h4>
      <p>상품설명</p></Col>
    <Col sm><img src="https://codingapple1.github.io/shop/shoes3.jpg" alt="#" width="80%" />
      <h4>상품명</h4>
      <p>상품설명</p></Col>
  </Row>
</Container>
    </div>

    </div>
  );
}

export default App;
