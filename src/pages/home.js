import React, {Component} from 'react';
// import Download from "../blocks/download/download";
// import Table from "../blocks/table/table";
import Paginator from "../blocks/paginator/paginator";
import Chartist from "../blocks/chartist/chartist";

class Home extends Component {
	render() {
		return (
			<div>
				<Chartist/>
				{/*<Download/>*/}
				{/*<Table/>*/}
				<Paginator/>
			</div>

		);
	}
}

export default Home;