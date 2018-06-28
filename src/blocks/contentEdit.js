import React, {Component} from 'react';
import ContentEditable from 'react-contenteditable'

class ContentEdit extends Component {
	constructor() {
		super()
		this.state = {html: "Banner #1"};
	};

	handleChange = evt => {
		this.setState({html: evt.target.value});
	};

	render = () => {
		return <ContentEditable className="load__name js-file-name"
			html={this.state.html} // innerHTML of the editable div
			disabled={false}       // use true to disable edition
			onChange={this.handleChange} // handle innerHTML change
		/>
	};
};

export  default  ContentEdit