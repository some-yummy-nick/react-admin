import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class TableList extends Component {
	render() {
		return (

			<table className="table">
				<tbody>
				<tr>
					<th className="table__head table__big table__head_accent">ID</th>
					<th className="table__head table__big table__head_accent">Email</th>
					<th className="table__head table__big table__head_accent">Referrals</th>
					<th className="table__head table__big table__head_accent">Transactions</th>
					<th className="table__head table__big table__head_accent">Volume</th>
					<th className="table__head table__big table__head_accent">Total income</th>
					<th className="table__head table__big table__head_accent">Total withdrawal</th>
					<th className="table__head table__big table__head_accent">Balance</th>
					<th className="table__head table__big table__head_accent">Revenue Share</th>
					<th className="table__head table__big table__head_accent">Label</th>
					<th className="table__head table__empty"/>
				</tr>

				<tr>
					<td className="table__prop table__big">#100</td>
					<td className="table__prop table__big">mail@amil.ri
						<Link to="edit" className="edit">
							<span className="icon icon_edit"/>
							<span className="table__text">Edit</span>
						</Link>
					</td>
					<td className="table__prop table__big">1650</td>
					<td className="table__prop table__big">21355</td>
					<td className="table__prop table__big">14</td>
					<td className="table__prop table__big">24</td>
					<td className="table__prop table__big">144</td>
					<td className="table__prop table__big">4</td>
					<td className="table__prop table__big">0.25%</td>
					<td className="table__prop table__big">BestChange</td>
					<td className="table__empty">
						<button type="button" className="btn btn_freeze">Freeze</button>
						<button type="button" className="btn btn_ban">Ban</button>
					</td>
				</tr>
				<tr>
					<td className="table__prop table__big">#99</td>
					<td className="table__prop table__big">mail@amil.ri
						<Link to="edit" className="edit">
							<span className="icon icon_edit"/>
							<span className="table__text">Edit</span>
						</Link>
					</td>
					<td className="table__prop table__big">1650</td>
					<td className="table__prop table__big">21355</td>
					<td className="table__prop table__big">14</td>
					<td className="table__prop table__big">24</td>
					<td className="table__prop table__big">144</td>
					<td className="table__prop table__big">4</td>
					<td className="table__prop table__big">0.25%</td>
					<td className="table__prop table__big">BestChange</td>
					<td className="table__empty">
						<button type="button" className="btn btn_freeze">Freeze</button>
						<button type="button" className="btn btn_ban">Ban</button>
					</td>
				</tr>
				<tr>
					<td className="table__prop table__big">#98</td>
					<td className="table__prop table__big">mail@amil.ri
						<Link to="edit" className="edit">
							<span className="icon icon_edit"/>
							<span className="table__text">Edit</span>
						</Link>
					</td>
					<td className="table__prop table__big">1650</td>
					<td className="table__prop table__big">21355</td>
					<td className="table__prop table__big">14</td>
					<td className="table__prop table__big">24</td>
					<td className="table__prop table__big">144</td>
					<td className="table__prop table__big">4</td>
					<td className="table__prop table__big">0.25%</td>
					<td className="table__prop table__big">BestChange</td>
					<td className="table__empty">
						<button type="button" className="btn btn_freeze">Freeze</button>
						<button type="button" className="btn btn_ban">Ban</button>
					</td>
				</tr>
				<tr>
					<td className="table__prop table__big">#97</td>
					<td className="table__prop table__big">mail@amil.ri
						<Link to="edit" className="edit">
							<span className="icon icon_edit"/>
							<span className="table__text">Edit</span>
						</Link>
					</td>
					<td className="table__prop table__big">1650</td>
					<td className="table__prop table__big">21355</td>
					<td className="table__prop table__big">14</td>
					<td className="table__prop table__big">24</td>
					<td className="table__prop table__big">144</td>
					<td className="table__prop table__big">4</td>
					<td className="table__prop table__big">0.25%</td>
					<td className="table__prop table__big">BestChange</td>
					<td className="table__empty">
						<button type="button" className="btn btn_freeze">Freeze</button>
						<button type="button" className="btn btn_ban">Ban</button>
					</td>
				</tr>
				<tr>
					<td className="table__prop table__big">#96</td>
					<td className="table__prop table__big">mail@amil.ri
						<Link to="edit" className="edit">
							<span className="icon icon_edit"/>
							<span className="table__text">Edit</span>
						</Link>
					</td>
					<td className="table__prop table__big">1650</td>
					<td className="table__prop table__big">21355</td>
					<td className="table__prop table__big">14</td>
					<td className="table__prop table__big">24</td>
					<td className="table__prop table__big">144</td>
					<td className="table__prop table__big">4</td>
					<td className="table__prop table__big">0.25%</td>
					<td className="table__prop table__big">BestChange</td>
					<td className="table__empty">
						<button type="button" className="btn btn_freeze">Freeze</button>
						<button type="button" className="btn btn_ban">Ban</button>
					</td>
				</tr>
				</tbody>
			</table>
		);
	}
}

export default TableList;