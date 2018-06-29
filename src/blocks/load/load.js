import React, {Component} from 'react';
import '../../blocks/load/load.css';
import $ from "jquery";

import ContentEdit from "../../blocks/contentEdit";
class Load extends Component {
	addItem = () => {

		var parent = document.querySelector('.js-file-list');
		var fileDelete = document.querySelectorAll(".js-file-delete");
		var elem = parent.querySelector('.js-item');

		var clone = elem.cloneNode(true);
		clone.removeAttribute("hidden");
		var newBannerName = clone.querySelector(".js-file-name");
		newBannerName.innerHTML = "Banner name";
		parent.appendChild(clone);

		Array.prototype.forEach.call(fileDelete, function (child) {
			child.addEventListener("click", function () {
				var elem = $(child).parents(".js-item");
				elem.remove();
			})
		});

		var fileItem = document.querySelectorAll('.js-item');

		Array.prototype.forEach.call(fileItem, function (child) {
			var input = child.querySelector(".js-file");
			var imageName = child.querySelector(".js-file-name");
			var deleteItem = child.querySelector(".js-file-delete");

			input.addEventListener('change', function () {
				if (input.files && input.files[0]) {
					if (input.files[0].type.match('image.*')) {
						var reader = new FileReader();
						reader.onload = function () {
							imageName.innerHTML = input.files[0].name;
						};
						reader.readAsDataURL(input.files[0]);
					} else console.log('is not image mime type');
				} else console.log('not isset files data or files API not supordet');
			});

			deleteItem.addEventListener("click", function () {
				$(deleteItem).parents(".js-item").remove();
			})

		});
	};

	deleteItem =(e) =>{
		var elem = $(e.currentTarget).parents(".js-item");
		elem.remove();
	};

	loadItem=(e)=>{
		var input= e.currentTarget;
		var imageName= $(input).parents(".js-item").find(".js-file-name")[0];
		if (input.files && input.files[0]) {
			if (input.files[0].type.match('image.*')) {
				var reader = new FileReader();
				reader.onload = function () {
					imageName.innerHTML = input.files[0].name;
				};
				reader.readAsDataURL(input.files[0]);
			} else console.log('is not image mime type');
		} else console.log('not isset files data or files API not supordet');
	};

	render() {

		return (
			<div className="load">
				<ol className="load__list js-file-list">
					<li className="load__item js-item" hidden>
						<div className="load__inner">
							<div className="load__block">
								<div className="load__title">Name</div>
								<ContentEdit/>
							</div>
							<div className="load__block">
								<div className="load__title">Size</div>
								<div className="load__name js-file-size">640x480</div>
							</div>
							<div className="load__block">

								<label className="btn btn_border file">
									<input className="file__input js-file" type="file"
									       accept=".jpg, .jpeg, .png" onChange={this.loadItem}></input>
									Load
								</label>

							</div>
							<div className="load__block">

								<button type="button" className="btn btn_border js-file-delete" onClick={this.deleteItem}>Delete</button>

							</div>
						</div>
					</li>
					<li className="load__item js-item">
						<div className="load__inner">
							<div className="load__block">
								<div className="load__title">Name</div>
								<ContentEdit/>
							</div>
							<div className="load__block">
								<div className="load__title">Size</div>
								<div className="load__name js-file-size">640x480</div>
							</div>
							<div className="load__block">

								<label className="btn btn_border file">
									<input className="file__input js-file" type="file"
									       accept=".jpg, .jpeg, .png" onChange={this.loadItem}></input>
									Load
								</label>

							</div>
							<div className="load__block">

								<button type="button" className="btn btn_border js-file-delete" onClick={this.deleteItem}>
									Delete
								</button>

							</div>
						</div>
					</li>
					<li className="load__item js-item">
						<div className="load__inner">
							<div className="load__block">
								<div className="load__title">Name</div>
								<ContentEdit/>
							</div>
							<div className="load__block">
								<div className="load__title">Size</div>
								<div className="load__name js-file-size">640x480</div>
							</div>
							<div className="load__block">

								<label className="btn btn_border file">
									<input className="file__input js-file" type="file"
									       accept=".jpg, .jpeg, .png" onChange={this.loadItem}></input>
									Load
								</label>

							</div>
							<div className="load__block">

								<button type="button" className="btn btn_border js-file-delete" onClick={this.deleteItem}>
									Delete
								</button>

							</div>
						</div>
					</li>
				</ol>
				<button className="btn btn_border js-file-add-item" onClick={this.addItem}>
					<span className="icon icon_down"></span>
					<span className="btn__text">Add new item</span>
				</button>
			</div>

		);
	}
}

export default Load;