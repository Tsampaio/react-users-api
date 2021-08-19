import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = (): JSX.Element => {
	return (
		<div className="wrapper-navbar">
			<div className="wrapper-logo">
				<Link to="/">
					<h2>React-Users-Api </h2>
				</Link>
			</div>

			<div className="wrapper-navigation">
				<div className="navigation-item">
					<Link to="/search">
						<h3>Search</h3>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
