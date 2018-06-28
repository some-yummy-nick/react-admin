import React, {Component} from 'react';
import ChartistGraph from 'react-chartist';
import "chartist/dist/chartist.min.css";
import "chartist/dist/chartist.min.js";
// import $ from "jquery";
import Download from "../../blocks/download/download";

var data = {
	series: [{data: []}
	]
};

var options = {
	fullWidth: true,
};

var type = "Line";

class Chartist extends Component {

	constructor(props) {
		super(props);
		this.state = {
			selected: "Total-Unique-User",
			data: data
		};
	}

	setFilter = (filter) => {
		this.setState({
			selected: filter,
		});
	};

	isActive = (value) => {
		return 'set__button js-set-button ' + ((value === this.state.selected) ? 'active' : '');
	};

	render() {

		return (
			<div>
				<ChartistGraph data={data} options={options} type={type}/>
				<div className="set">
					<div className="set__wrapper">

						<button type="button" className={this.isActive('Total-Unique-User')}
						        onClick={this.setFilter.bind(this, 'Total-Unique-User')}>
							Total Unique User
						</button>
						<button type="button" className={this.isActive('Total-Leads')}
						        onClick={this.setFilter.bind(this, 'Total-Leads')}>Total Leads
						</button>
						<button type="button" className={this.isActive('Total-Trx')}
						        onClick={this.setFilter.bind(this, 'Total-Trx')}>Total Trx
						</button>
						<button type="button" className={this.isActive('Total-Volume')}
						        onClick={this.setFilter.bind(this, 'Total-Volume')}>Total Volume
						</button>
						<button type="button" className={this.isActive('Total-Income')}
						        onClick={this.setFilter.bind(this, 'Total-Income')}>Total Income
						</button>
						<button type="button" className={this.isActive('Total-Webmasters')}
						        onClick={this.setFilter.bind(this, 'Total-Webmasters')}>
							Total Webmasters
						</button>
						<button type="button" className={this.isActive('Total-Webmaster-Income')}
						        onClick={this.setFilter.bind(this, 'Total-Webmaster-Income')}
						>Total Webmaster Income
						</button>
						<button type="button" className={this.isActive('Total-Net-Income')}
						        onClick={this.setFilter.bind(this, 'Total-Net-Income')}>
							Total-Net-Income
						</button>
					</div>
				</div>
				<Download/>
				<table className="table">
					<tbody>
					<tr>
						<th className="table__head table__small table__empty"></th>
						<th className="table__head table__small table__head_accent">21531</th>
						<th className="table__head table__small table__head_accent">6589</th>
						<th className="table__head table__small table__head_accent">2356</th>
						<th className="table__head table__small table__head_accent">589</th>
						<th className="table__head table__small table__head_accent">4522</th>
						<th className="table__head table__small table__head_accent">59889</th>
						<th className="table__head table__small table__head_accent">58229</th>
						<th className="table__head table__small table__head_accent">1589</th>
					</tr>
					<tr>
						<th className="table__head table__small table__empty"></th>
						<th className="table__head table__small table__head_name">Total Unique User</th>
						<th className="table__head table__small table__head_name">Total Leads</th>
						<th className="table__head table__small table__head_name">Total Trx</th>
						<th className="table__head table__small table__head_name">Total Volume</th>
						<th className="table__head table__small table__head_name">Total Income</th>
						<th className="table__head table__small table__head_name">Total Webmasters</th>
						<th className="table__head table__small table__head_name">Total Webmaster Income</th>
						<th className="table__head table__small table__head_name">Total Net Income</th>
					</tr>
					<tr>
						<td className="table__value table__big">21.05.2018</td>
						<td className="table__value table__big js-value" data-set="Total-Unique-User">1</td>
						<td className="table__value table__big js-value" data-set="Total-Leads">153</td>
						<td className="table__value table__big js-value" data-set="Total-Trx">853</td>
						<td className="table__value table__big js-value" data-set="Total-Volume">500</td>
						<td className="table__value table__big js-value" data-set="Total-Income">24</td>
						<td className="table__value table__big js-value" data-set="Total-Webmasters">144</td>
						<td className="table__value table__big js-value" data-set="Total-Webmaster-Income">87</td>
						<td className="table__value table__big js-value" data-set="Total-Net-Income">8</td>
					</tr>
					<tr>
						<td className="table__value table__big">20.05.2018</td>
						<td className="table__value table__big js-value" data-set="Total-Unique-User">45</td>
						<td className="table__value table__big js-value" data-set="Total-Leads">853</td>
						<td className="table__value table__big js-value" data-set="Total-Trx">53</td>
						<td className="table__value table__big js-value" data-set="Total-Volume">9</td>
						<td className="table__value table__big js-value" data-set="Total-Income">4</td>
						<td className="table__value table__big js-value" data-set="Total-Webmasters">144</td>
						<td className="table__value table__big js-value" data-set="Total-Webmaster-Income">7</td>
						<td className="table__value table__big js-value" data-set="Total-Net-Income">5</td>
					</tr>
					<tr>
						<td className="table__value table__big">19.05.2018</td>
						<td className="table__value table__big js-value" data-set="Total-Unique-User">900</td>
						<td className="table__value table__big js-value" data-set="Total-Leads">6053</td>
						<td className="table__value table__big js-value" data-set="Total-Trx">4453</td>
						<td className="table__value table__big js-value" data-set="Total-Volume">113</td>
						<td className="table__value table__big js-value" data-set="Total-Income">504</td>
						<td className="table__value table__big js-value" data-set="Total-Webmasters">144</td>
						<td className="table__value table__big js-value" data-set="Total-Webmaster-Income">57</td>
						<td className="table__value table__big js-value" data-set="Total-Net-Income">15</td>
					</tr>
					<tr>
						<td className="table__value table__big">18.05.2018</td>
						<td className="table__value table__big js-value" data-set="Total-Unique-User">1153</td>
						<td className="table__value table__big js-value" data-set="Total-Leads">1053</td>
						<td className="table__value table__big js-value" data-set="Total-Trx">53</td>
						<td className="table__value table__big js-value" data-set="Total-Volume">33</td>
						<td className="table__value table__big js-value" data-set="Total-Income">4</td>
						<td className="table__value table__big js-value" data-set="Total-Webmasters">144</td>
						<td className="table__value table__big js-value" data-set="Total-Webmaster-Income">77</td>
						<td className="table__value table__big js-value" data-set="Total-Net-Income">10</td>
					</tr>
					<tr>
						<td className="table__value table__big">17.05.2018</td>
						<td className="table__value table__big js-value" data-set="Total-Unique-User">153</td>
						<td className="table__value table__big js-value" data-set="Total-Leads">1153</td>
						<td className="table__value table__big js-value" data-set="Total-Trx">3353</td>
						<td className="table__value table__big js-value" data-set="Total-Volume">3</td>
						<td className="table__value table__big js-value" data-set="Total-Income">204</td>
						<td className="table__value table__big js-value" data-set="Total-Webmasters">144</td>
						<td className="table__value table__big js-value" data-set="Total-Webmaster-Income">87</td>
						<td className="table__value table__big js-value" data-set="Total-Net-Income">10</td>
					</tr>
					<tr>
						<td className="table__value table__big">16.05.2018</td>
						<td className="table__value table__big js-value" data-set="Total-Unique-User">3153</td>
						<td className="table__value table__big js-value" data-set="Total-Leads">2153</td>
						<td className="table__value table__big js-value" data-set="Total-Trx">853</td>
						<td className="table__value table__big js-value" data-set="Total-Volume">93</td>
						<td className="table__value table__big js-value" data-set="Total-Income">24</td>
						<td className="table__value table__big js-value" data-set="Total-Webmasters">144</td>
						<td className="table__value table__big js-value" data-set="Total-Webmaster-Income">7</td>
						<td className="table__value table__big js-value" data-set="Total-Net-Income">14</td>
					</tr>
					</tbody>
				</table>
			</div>
		)
	}
}
export default Chartist;