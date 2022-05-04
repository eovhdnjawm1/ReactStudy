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

let NewBtn = styled.button(YellowBtn)`

`

let BlackBox = styled.div`
	background : black;
	padding: 20px;
	width: 25px;
	height: 25px;
`

function DetailApp(props) {
	let {id} = useParams();
	let 찾은상품 = props.shoes.find(function(x){
		return x.id == id;
	});	
	return (
		<div className="container">
			<YellowBtn>버튼</YellowBtn>
			<YellowBtn bg="blue">버튼</YellowBtn>
			<BlackBox></BlackBox>
			<div className="row">
				<div className="col-md-6">
					<img src={`${찾은상품.image}`} width="100%" alt="#"/>
				</div>
				<div className="col-md-6">
					<h4 className="pt-5">{찾은상품.title}</h4>
					<p>{찾은상품.content}</p>
					<p>{찾은상품.price}</p>
					<button className="btn btn-danger">주문하기</button>
				</div>
			</div>
		</div>
	)
}

export default DetailApp