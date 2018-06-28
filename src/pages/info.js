import React, {Component} from 'react';
import { Link } from "react-router-dom";
import Download from "../blocks/download/download";
import Paginator from "../blocks/paginator/paginator";

class Info extends Component {
	render() {
		return (
			<div>
				<Link to="/edit" className="back">
					<span className="icon icon_back"></span>
					<span className="back__text">Back</span>
				</Link>
				<Download/>
				<table className="table">
					<tbody>
					<tr>
						<th className="table__head table__empty"></th>
						<th className="table__head table__big table__head_accent">ID</th>
						<th className="table__head table__big table__head_accent">Source</th>
						<th className="table__head table__big table__head_accent">Transactions</th>
						<th className="table__head table__big table__head_accent">Volume</th>
						<th className="table__head table__big table__head_accent">Total income</th>
						<th className="table__head table__big table__head_accent">Total webmaster income</th>
						<th className="table__head table__big table__head_accent">Total next income</th>
					</tr>

					<tr>
						<td className="table__value table__big">21.05.2018</td>
						<td className="table__value table__big">2153</td>
						<td className="table__value table__big">1153</td>
						<td className="table__value table__big">853</td>
						<td className="table__value table__big">93</td>
						<td className="table__value table__big">24</td>
						<td className="table__value table__big">144</td>
						<td className="table__value table__big">87</td>
					</tr>
					<tr>
						<td className="table__value table__big">20.05.2018</td>
						<td className="table__value table__big">2153</td>
						<td className="table__value table__big">1153</td>
						<td className="table__value table__big">853</td>
						<td className="table__value table__big">93</td>
						<td className="table__value table__big">24</td>
						<td className="table__value table__big">144</td>
						<td className="table__value table__big">87</td>
					</tr>
					<tr>
						<td className="table__value table__big">19.05.2018</td>
						<td className="table__value table__big">2153</td>
						<td className="table__value table__big">1153</td>
						<td className="table__value table__big">853</td>
						<td className="table__value table__big">93</td>
						<td className="table__value table__big">24</td>
						<td className="table__value table__big">144</td>
						<td className="table__value table__big">87</td>
					</tr>
					<tr>
						<td className="table__value table__big">18.05.2018</td>
						<td className="table__value table__big">2153</td>
						<td className="table__value table__big">1153</td>
						<td className="table__value table__big">853</td>
						<td className="table__value table__big">93</td>
						<td className="table__value table__big">24</td>
						<td className="table__value table__big">144</td>
						<td className="table__value table__big">87</td>
					</tr>
					<tr>
						<td className="table__value table__big">17.05.2018</td>
						<td className="table__value table__big">2153</td>
						<td className="table__value table__big">1153</td>
						<td className="table__value table__big">853</td>
						<td className="table__value table__big">93</td>
						<td className="table__value table__big">24</td>
						<td className="table__value table__big">144</td>
						<td className="table__value table__big">87</td>
					</tr>
					<tr>
						<td className="table__value table__big">16.05.2018</td>
						<td className="table__value table__big">2153</td>
						<td className="table__value table__big">1153</td>
						<td className="table__value table__big">853</td>
						<td className="table__value table__big">93</td>
						<td className="table__value table__big">24</td>
						<td className="table__value table__big">144</td>
						<td className="table__value table__big">87</td>
					</tr>
					</tbody>
				</table>

				<Paginator/>
			</div>

		);
	}
}

export default Info;