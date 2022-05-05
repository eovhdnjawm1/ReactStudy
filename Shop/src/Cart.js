import React from 'react';
import { Table } from 'react-bootstrap'
import { connect } from 'react-redux';

function Cart(props) {
	return (
		<div>
			<Table responsive>
				<tbody>
					<tr>
						<th>#</th>
						<th>상품명</th>
						<th>수량</th>
						<th>변경</th>
					</tr>
					<tr>
						<td>1</td>
						<td> {props.상품명} </td>
						<td>{props.state[0].quan}</td>
						<td>{props.state[0].id}</td>
					</tr>
				</tbody>
			</Table>
		</div>
	)
}

function CartPage(state) {
	return {
		state: state,
		
		// state는 props 처럼 만들어준다.
		// state안에 있는 데이터를 다 state로 받아주세요
		상품명 : state[0].name,
	}
}
export default connect(CartPage)(Cart);
// export default Cart;