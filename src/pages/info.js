import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Download from '../blocks/download/download';
import Paginator from '../blocks/paginator/paginator';
import numbers from '../numbers.json';
import InfoLine from '../blocks/infoLine';

const line = numbers.map((number, index) => {
	return (<InfoLine number={number} key={index}/>);
});

class Info extends Component {
	render() {
		return (
			<div>
				<Link to="/edit" className="back">
					<span className="icon icon_back"/>
					<span className="back__text">Back</span>
				</Link>
				<Download/>
				<div className="table__wrapper table__wrapper_info">
					<table className="table">
						<tbody>
						<tr>
							<th className="table__head table__small table__empty"/>
							<th className="table__head table__small table__head_name">ID</th>
							<th className="table__head table__small table__head_name">Source</th>
							<th className="table__head table__small table__head_name">Transactions</th>
							<th className="table__head table__small table__head_name">Volume</th>
							<th className="table__head table__small table__head_name">Total Income</th>
							<th className="table__head table__small table__head_name">Total Webmaster Income</th>
							<th className="table__head table__small table__head_name">Total Net Income</th>
						</tr>
						{line}
						</tbody>
					</table>
				</div>

				<Paginator/>
			</div>

		);
	}
}

export default Info;