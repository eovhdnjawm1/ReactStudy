import React from 'react';
import { Table } from 'react-bootstrap'
import { connect } from 'react-redux';

function Cart(props) {
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
						props.state.map((a, i) => {
							return (
								<tr key={i}>
									<td> {a.name}</td>
									<td> {a.id}</td>
									<td> {a.quan}</td>
									<td> <button onClick={() => {
										props.dispatch({
											type : '수량증가',
											countChange: '수량증가'
										}) 
									}}>+</button>
									
									
									</td>
									<td><button onClick={() => {
										props.dispatch({
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
			<div className='my-alert'>
				<p>지금 구매하시면 신규할인 20%</p>
				<button>닫기</button>
			</div>
		</div>
	)
}

function CartPage(state) {
	return {
		state: state,

		// state는 props 처럼 만들어준다.
		// state안에 있는 데이터를 다 state로 받아주세요
		상품명: state[0].name,
	}
}
export default connect(CartPage)(Cart);
// export default Cart;