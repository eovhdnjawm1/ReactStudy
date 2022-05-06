import React from 'react';
import { Table } from 'react-bootstrap'
import { connect, useDispatch, useSelector } from 'react-redux';
import { useParams,  useNavigate, Link } from 'react-router-dom'

function Cart(props) {

	// redux안에 있는 모든 state

	let state = useSelector((state) => state.reducer)
	console.log(state)
	let dispatch = useDispatch();

	return (
		<div>
			<Table responsive>
				<tbody>
					<tr>
						<th>상품명</th>
						<th>수량</th>
						<th>가격</th>
						<th>변경</th>
					</tr>
				</tbody>

				<tbody>
					{
						state.map((a, i) => {
							return (
								<tr key={i}>
									<td> {a.name}</td>
									<td> {a.id}</td>
									<td> {a.quan}</td>
									<td> <button onClick={() => {
										dispatch({
											type : '수량증가',
											payload : {name: 'Kim'}
										}) 
									}}>+</button>
									
									
									</td>
									<td><button onClick={() => {
										dispatch({
											type : '',
											countChange: '수량감소'
										}) 
									}}>-</button></td>
								</tr>
							)
						})
					}
					
				</tbody>
			</Table>
			{
				props.alert열렸니 === true ? 
			(<div className='my-alert'>
				<p>지금 구매하시면 신규할인 20%</p>
				<button onClick={() => {
					props.dispatch({
						type : '닫힘',
					})
				}}>닫기</button>
			</div>)
			: <button onClick={() => {
				props.dispatch({
					type : '열림',
				})
			}}>열림</button>
			}

			<Link to='/detail/0'>디테일페이지로</Link>
		</div>
	)
}

// function CartPage(state) {
	
// 	return {
// 		state: state.reducer,
// 		alert열렸니 : state.reducer2,
		
// 		// state는 props 처럼 만들어준다.
// 		// state안에 있는 데이터를 다 state로 받아주세요
// 		// 상품명: state[0].name,
// 	}
// }
// export default connect(CartPage)(Cart);
export default Cart;