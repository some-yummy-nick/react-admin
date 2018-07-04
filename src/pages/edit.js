import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Download from '../blocks/download/download';
import Paginator from '../blocks/paginator/paginator';
import Chartist from '../blocks/chartist/chartist';
var headers = ["ID", "Email", "Referrals", "Transactions", "Volume", "Total income", "Total withdrawal", "Balance", "Revenue Share", "Label"];
var data = [
	[100, "mail@amil.ru", 1650, 21355, 14, 24, 144, 4, "0.25%", "BestChange"]
];

class Edit extends Component {
	render() {
		return (
			<div>
				<Link to="/list" className="back">
					<span className="icon icon_back"/>
					<span className="back__text">Back</span>
				</Link>
				<table className="table">
					<thead>
					<tr>
						{headers.map((header, index) => {
							return <th className="table__head table__big table__head_accent" key={index}>{header}</th>
						})}
					</tr>
					</thead>
					<tbody>
					{data.map((row, rowindex) =>
						<tr key={rowindex}>
							{<td className="table__prop table__big">{row[0]}</td>}
							{<td className="table__prop table__big">{row[1]}
								<Link to="edit" className="edit">
									<span className="icon icon_edit"/>
									<span className="table__text">Edit</span>
								</Link>
							</td>}
							{<td className="table__prop table__big">{row[2]}
								<Link to="info" className="edit">
									<span className="icon icon_edit"/>
									<span className="table__text">Info</span>
								</Link>
							</td>}
							{<td className="table__prop table__big">{row[3]}</td>}
							{<td className="table__prop table__big">{row[4]}</td>}
							{<td className="table__prop table__big">{row[5]}</td>}
							{<td className="table__prop table__big">{row[6]}</td>}
							{<td className="table__prop table__big">{row[7]}</td>}
							{<td className="table__prop table__big">{row[8]}
							<Link to="edit" className="edit">
								<span className="icon icon_edit"/>
								<span className="table__text">Edit</span>
							</Link>
							</td>}
							{<td className="table__prop table__big">{row[9]}
							<Link to="edit" className="edit">
								<span className="icon icon_edit"/>
								<span className="table__text">Edit</span>
							</Link>
							</td>}
							{<td className="table__empty">{row[10]}
								<button type="button" className="btn btn_freeze">Freeze</button>
								<button type="button" className="btn btn_ban">Ban</button>
							</td>}
						</tr>)}
					</tbody>
				</table>
				<Chartist/>
				<Paginator/>
			</div>

		);
	}
}

export default Edit;