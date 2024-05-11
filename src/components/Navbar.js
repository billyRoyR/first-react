import React from 'react';
import { FiMenu } from 'react-icons/fi';
import logo from '../images/airbnb-2-logo.svg';

const Navbar = () => {
	return (
		<>
			<nav>
				<div className="logoContainer">
					<img src={logo} className="logo" alt="Website Logo" />
					<h1>Airb</h1>
				</div>

				<div className="navLink">
					<a href="#">Castles</a>
					<a href="#">Islands</a>
					<a href="#">Ryokans</a>
					<a href="#">Treehouses</a>
				</div>

				<div className="btn cta">
					<a href="#" className="btn_l">Login</a>
					<a href="#" className="btn_s">Sign Up</a>
				</div>
         </nav>
		</>
	);
};

export default Navbar;
