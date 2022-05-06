import { useEffect, useState  } from 'react'
import { useParams,  useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { Nav } from 'react-bootstrap'
import '../Detail.scss';
import { connect } from 'react-redux';

// data.js 에 있는 id 값을 불러와야함
// 지금은 URL 0이면 그냥 id 값이 뭐든 가져오는데
// id 값에 맞는걸 가져와야한다



let YellowBtn = styled.button`
	background : ${props => props.bg};
	color : ${props => props.bg == 'blue' ? 'pink' : 'black'};
	padding : 10px;
`
let BlackBox = styled.div`
	background : black;
	padding: 20px;
	width: 150px;
	height: 100px;
	color: #fff;
`
// setTimeout(() => {실행할 코드}, 1000 ms) 
function DetailApp(props) {

	let navigate = useNavigate();
	let [mainFade, setMainFade ] = useState('');
	let [idInpuData, setidInputData] = useState(0);

	let { id } = useParams();
	let 찾은상품 = props.shoes.find(function (x) {
		return x.id == id;
	});

	let [alert, setAlert] = useState(true)

	let [tab, setTab] = useState(0)

	useEffect(() =>{
		let a = setTimeout(() => {
			setMainFade('mainEnd')
		}, 100)
		
		return () => {
			clearTimeout(a);
			setMainFade('')
		}
	}, [tab])

	return (
		<div className={"container " + "mainStart " + mainFade}>
			<div className="red">제목</div>
			{/* {count}
			<YellowBtn onClick={() => {
				setCount(count + 1);
			}}>버튼</YellowBtn> */}
			{/* <YellowBtn bg="blue">버튼</YellowBtn> */}
			{
				alert === true ? <BlackBox className='myAlert'>
					<p>
						재고가 얼마안남았습니다</p>2초 안에 누르면 할인</BlackBox> : null
			}
			<div className='myAlert2'>
					<p>
						재고가 얼마안남았습니다</p>2초 안에 누르면 할인</div>


			<div className="row">
				<div className="col-md-6">
					<img src={`${찾은상품.image}`} width="100%" alt="#" />
				</div>
				<div className="col-md-6">
					<h4 className="pt-5">{찾은상품.title}</h4>
					<p>{찾은상품.content}</p>
					<p>{찾은상품.price}</p>
					<input type={"text"}></input>
					{
						console.log(찾은상품.id)
					}

					<button onClick={() => {
						props.dispatch({
							type : '항목추가',
							payload : {
								id : 찾은상품.id + 2,
								name : 찾은상품.title,
								quan : 1,
							}
						}); 
						navigate('/Cart');
					}} className="btn btn-danger">주문하기</button>
				</div>
			</div>
			<section className="subMenus">
				<Nav variant="tabs" defaultActiveKey="link1">
					<Nav.Item>
						<Nav.Link onClick={() => { setTab(0) }} eventKey="link0">버튼0</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link onClick={() => { setTab(1) }} eventKey="link1">버튼1</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link onClick={() => { setTab(2) }} eventKey="link2">버튼2</Nav.Link>
					</Nav.Item>
				</Nav>
				<TabContent tab={tab}  />
			</section>
		</div>
	)
}

function TabContent({tab}){

let [fade, setFade] = useState('')

	useEffect(() =>{
		let a = setTimeout(() => {
			setFade('end')
		}, 100)
		
		return () => {
			clearTimeout(a);
			setFade('')
		}
	}, [tab])

	return <div className={'start ' + fade}>
		{[<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][tab]}
	</div>
}

function DetailReducer(state) {
	
	return {
		state: state.reducer,
		alert열렸니 : state.reducer2,
	}
}


export default connect(DetailReducer)(DetailApp);