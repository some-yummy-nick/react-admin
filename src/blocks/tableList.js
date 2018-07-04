import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../blocks/search/search.css';
import Download from '../blocks/download/download';

var headers = ["ID", "Email", "Referrals", "Transactions", "Volume", "Total income", "Total withdrawal", "Balance", "Revenue Share", "Label"];
var data = [
	[100, "mail@amil.ru", 1650, 21355, 14, 24, 144, 4, "0.25%", "BestChange"],
	[99, "tatar@amil.ru", 2890, 1355, 9, 20, 158, 89, "0.29%", "Change"],
	[98, "look@amil.ru", 156, 550, 90, 59, 78, 12, "0.15%", "Change"]
];

class Table extends Component {

	constructor(props) {
		super(props);
		this.state = {
			data: this.props.initialData
		}
	}


	search = (e) => {
		e.preventDefault();
		var needle = e.target.querySelector("input").value.toLowerCase();
		if (!needle) {
			this.setState({data: this.props.initialData});
			return;
		}

		var searchdata = this.props.initialData.filter(function (data) {
			return data.toString().toLowerCase().indexOf(needle) > -1;
		});

		this.setState({data: searchdata});
	};



	render() {
		return (

			<div>
				<div className="search">
					<form className="search__form" onSubmit={this.search}>
						<input type="text" className="search__input"/>
						<button className="btn btn_border" type="submit">Find Webmaster</button>
					</form>

				</div>
				<Download/>
				<table className="table">
					<thead>
					<tr>
						{headers.map((header, index) => {
							return <th className="table__head table__big table__head_accent" key={index}>{header}</th>
						})}
					</tr>
					</thead>
					<tbody>
					{this.state.data.map((row, rowindex) =>
						<tr key={rowindex}>
							{<td className="table__prop table__big">{row[0]}</td>}
							{<td className="table__prop table__big">{row[1]}
								<Link to="edit" className="edit">
									<span className="icon icon_edit"/>
									<span className="table__text">Edit</span>
								</Link>
							</td>}
							{<td className="table__prop table__big">{row[2]}</td>}
							{<td className="table__prop table__big">{row[3]}</td>}
							{<td className="table__prop table__big">{row[4]}</td>}
							{<td className="table__prop table__big">{row[5]}</td>}
							{<td className="table__prop table__big">{row[6]}</td>}
							{<td className="table__prop table__big">{row[7]}</td>}
							{<td className="table__prop table__big">{row[8]}</td>}
							{<td className="table__prop table__big">{row[9]}</td>}
							{<td className="table__empty">{row[10]}
								<button type="button" className="btn btn_freeze">Freeze</button>
								<button type="button" className="btn btn_ban">Ban</button>
							</td>}
						</tr>)}
					</tbody>
				</table>
			</div>
		);
	}
}

class TableList extends Component {
	render() {
		return (
			<Table headers={headers} initialData={data}/>
		);
	}
}

export default TableList;
