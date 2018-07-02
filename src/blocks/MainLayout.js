import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import '../styles/reboot.css';
import '../styles/style.css';
import Home from '../pages/home';
import List from '../pages/list';
import Edit from '../pages/edit';
import Info from '../pages/info';
import Promo from '../pages/promo';

const MainLayout = () => (
	<Router>
		<div className="wrapper">
			<div className="content">
				<header className="header">
					<div className="container">
						<div className="header__blocks">
							<div className="header__block">
								<div className="logo">
									<Link className="logo__link" to="/" title="Перейти на главную страницу">
										<img className="logo__pic" src="../images/logo.svg"
										     alt="Перейти на главную страницу"/>
									</Link>
								</div>
							</div>
							<div className="header__block header__block_wide">
								<div className="menu">
									<nav>
										<ul className="menu__list">
											<li className="menu__item">
												<Link className="menu__link" to="/">Statistics</Link>
											</li>
											<li className="menu__item">
												<Link className="menu__link" to="/list">List of Webmasters</Link>
											</li>
											<li className="menu__item">
												<Link className="menu__link" to="/promo">Load of promo</Link>
											</li>
										</ul>
									</nav>
								</div>
							</div>
							<div className="header__block">
								<button type="button" className="logout">
									<span className="icon icon_logout"/>
									<span className="logout__text">Exit</span>
								</button>
							</div>
						</div>
					</div>
				</header>
				<main>
					<div className="container">
						<Route exact path="/" component={Home}/>
						<Route path="/list" component={List}/>
						<Route path="/edit" component={Edit}/>
						<Route path="/info" component={Info}/>
						<Route path="/promo" component={Promo}/>
					</div>
				</main>
			</div>
		</div>
	</Router>
);

export default MainLayout;