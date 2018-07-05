import React, {Component} from 'react';
import Paginator from '../blocks/paginator/paginator';
import TableTransactions from "../blocks/tableTransactions";

class Transactions extends Component {
	render() {
		return (
			<div>
				<TableTransactions/>
				<Paginator/>
			</div>

		);
	}
}

export default Transactions;