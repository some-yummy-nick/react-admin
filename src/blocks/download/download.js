import React, {Component} from 'react';
import '../../blocks/download/download.css';
class Download extends Component {
	render() {
		return (
			<a href="#" className="download">
				<span className="icon icon_download"></span>
				<span className="download__text">Save as Excel file</span>
			</a>

		);
	}
}

export default Download;