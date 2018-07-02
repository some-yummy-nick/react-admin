import React, {Component} from 'react';
import '../../blocks/download/download.css';

class Download extends Component {
	render() {
		return (
			<button type="button" className="download">
				<span className="icon icon_download"/>
				<span className="download__text">Save as Excel file</span>
			</button>

		);
	}
}

export default Download;