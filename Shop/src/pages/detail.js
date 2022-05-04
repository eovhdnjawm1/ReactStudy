import { useParams } from 'react-router-dom'

// data.js 에 있는 id 값을 불러와야함
// 지금은 URL 0이면 그냥 id 값이 뭐든 가져오는데
// id 값에 맞는걸 가져와야한다

function DetailApp(props) {
	let {id} = useParams();
	let 찾은상품 = props.shoes.find(function(x){
		return x.id == id;
	});	
	
	

	return (
		<div className="container">
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