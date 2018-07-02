import React, {Component} from 'react';
import Search from '../blocks/search/search';
import Download from '../blocks/download/download';
import TableList from '../blocks/tableList';
import Paginator from '../blocks/paginator/paginator';

class List extends Component {
	render() {
		return (
			<div>
				<Search/>
				<Download/>
				<TableList/>
				<Paginator/>
			</div>

		);
	}
}

export default List;