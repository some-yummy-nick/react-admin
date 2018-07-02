import React, {Component} from 'react';
import Paginator from '../blocks/paginator/paginator';
import Chartist from '../blocks/chartist/chartist';

class Home extends Component {
	render() {
		return (
			<div>
				<Chartist/>
				<Paginator/>
			</div>

		);
	}
}

export default Home;