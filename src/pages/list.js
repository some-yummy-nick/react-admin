import React, {Component} from 'react';
import TableList from '../blocks/tableList';
import Paginator from '../blocks/paginator/paginator';

class List extends Component {
	render() {
		return (
			<div>
				<TableList/>
				<Paginator/>
			</div>

		);
	}
}

export default List;