import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

// data.js 에 있는 id 값을 불러와야함
// 지금은 URL 0이면 그냥 id 값이 뭐든 가져오는데
// id 값에 맞는걸 가져와야한다



let YellowBtn = styled.button`
	background : ${props => props.bg};
	color : ${ props => props.bg == 'blue' ? 'pink' : 'black' };
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

	
	let [count, setCount] = useState(0)
	let {id} = useParams();
	let 찾은상품 = props.shoes.find(function(x){
		return x.id == id;
	});	

	let [alert, setAlert] = useState(true)

	let [textInp, setInp] = useState('')


	useEffect(() => {
		let a = (() => {
			
		})
		return () => {
			
			clearTimeout(a);
		}

	},[ ])

	


	return (
		<div className="container">
			{count}
			<YellowBtn onClick={() => {
				setCount(count+1);
			}}>버튼</YellowBtn>
			<YellowBtn bg="blue">버튼</YellowBtn>
{
	alert === true ? <BlackBox >2초 안에 누르면 할인</BlackBox> : null
}

			
			<div className="row">
				<div className="col-md-6">
					<img src={`${찾은상품.image}`} width="100%" alt="#"/>
				</div>
				<div className="col-md-6">
					<h4 className="pt-5">{찾은상품.title}</h4>
					<p>{찾은상품.content}</p>
					<p>{찾은상품.price}</p>
					<input type={"text"}></input>
					<button className="btn btn-danger">주문하기</button>
				</div>
			</div>
		</div>
	)
}

export default DetailApp