import React, {Component} from 'react';
import '../../blocks/search/search.css';

class Search extends Component {
	render() {
		return (
			<div className="search">
				<form className="search__form">
					<input type="text" className="search__input"/>
					<button className="btn btn_border" type="submit">Find Webmaster</button>
				</form>

			</div>

		);
	}
}

export default Search;