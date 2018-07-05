import React, {Component} from 'react';
import Download from '../blocks/download/download';

var headers = ["ID", "Transactions ID", "Volume", "Markup", "Exchange Fee", "Webmaster Fee", "Revenue"];
var data = [
	[100, "dfdf-234dfe-ffdf2-e43fdfd", 100, 0.5, 0.1, 0.2, 0.2],
	[99, "dfdf52-3dfe-ffdf2-e43fdfd", 10, 0.05, 0.02, 0.015, 0.015],
	[99, "dfdf52-3dfe-ffdf2-e43fdfd", 10, 0.05, 0.02, 0.015, 0.015]
];

class TotalTransactions extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: this.props.initialData
		}
	}

	render() {

		var TotalTransactions = data.length;

		return TotalTransactions;

	}
}

class TotalVolume extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: this.props.initialData
		}
	}

	render() {

		var totalVolume = 0;

		for (var i = 0; i < data.length; i++) {
			totalVolume += data[i][2];
		}

		return totalVolume+" BTC";

	}
}

class TotalMarkup extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: this.props.initialData
		}
	}

	render() {

		var totalMarkup = 0;

		for (var i = 0; i < data.length; i++) {
			totalMarkup += data[i][3];
		}

		return totalMarkup.toFixed(2) + " BTC" + " (" + totalMarkup.toFixed(2) + "%" + ")";

	}
}

class ExchangeFee extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: this.props.initialData
		}
	}

	render() {

		var exchangeFee = 0;

		for (var i = 0; i < data.length; i++) {
			exchangeFee += data[i][4];
		}

		return exchangeFee.toFixed(2) + " BTC" + " (" + exchangeFee.toFixed(2) + "%" + ")";

	}
}


class WebmasterFee extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: this.props.initialData
		}
	}

	render() {

		var webmasterFee = 0;

		for (var i = 0; i < data.length; i++) {
			webmasterFee += data[i][5];
		}

		return webmasterFee.toFixed(2) + " BTC" + " (" + webmasterFee.toFixed(2) + "%" + ")";

	}
}

class TotalRevenue extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: this.props.initialData
		}
	}

	render() {

		var totalRevenue = 0;

		for (var i = 0; i < data.length; i++) {
			totalRevenue += data[i][6];
		}

		return totalRevenue.toFixed(2) + " BTC" + " (" + totalRevenue.toFixed(2) + "%" + ")";

	}
}

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
				<div className="table__wrapper table__wrapper_transactions">
					<table ref="table" className="table">
						<thead>
						<tr>
							<th className="table__head table__big table__empty"/>
							<th className="table__head table__big table__head_accent">Total Transactions</th>
							<th className="table__head table__big table__head_accent">Total Volume</th>
							<th className="table__head table__big table__head_accent">Total Markup</th>
							<th className="table__head table__big table__head_accent">Total Exchange Fee</th>
							<th className="table__head table__big table__head_accent">Total Webmaster Fee</th>
							<th className="table__head table__big table__head_accent">Total Revenue</th>
						</tr>
						</thead>
						<tbody>

						<tr>
							<td></td>
							<td  className="table__prop table__big">
								<TotalTransactions/>
							</td>
							<td  className="table__prop table__big">
								<TotalVolume initialData={data}/>
							</td>
							<td  className="table__prop table__big">
								<TotalMarkup initialData={data}/>
							</td>
							<td  className="table__prop table__big">
								<ExchangeFee initialData={data}/>
							</td>
							<td  className="table__prop table__big">
								<WebmasterFee initialData={data}/>
							</td>
							<td  className="table__prop table__big">
								<TotalRevenue initialData={data}/>
							</td>
						</tr>

						</tbody>
					</table>
					<table ref="table" className="table">
						<thead>
						<tr>
							{headers.map((header, index) => {
								return <th className="table__head table__big table__head_accent"
								           key={index}>{header}</th>
							})}
						</tr>
						</thead>
						<tbody>
						{this.state.data.map((row, rowindex) =>
							<tr key={rowindex}>
								{<td className="table__prop table__big">{row[0]}</td>}
								{<td className="table__prop table__big">{row[1]} </td>}
								{<td className="table__prop table__big">{row[2] + " BTC"}</td>}
								{<td
									className="table__prop table__big">{row[3] + " BTC" + " (" + row[3] + "%" + ")"}</td>}
								{<td
									className="table__prop table__big">{row[4] + " BTC" + " (" + row[4] + "%" + ")"}</td>}
								{<td
									className="table__prop table__big">{row[5] + " BTC" + " (" + row[5] + "%" + ")"}</td>}
								{<td
									className="table__prop table__big">{row[6] + " BTC" + " (" + row[6] + "%" + ")"}</td>}
							</tr>)}
						</tbody>
					</table>
				</div>
			</div>
		);
	}
}

class TableTransactions extends Component {
	render() {
		return (
			<Table headers={headers} initialData={data}/>
		);
	}
}

export default TableTransactions;
