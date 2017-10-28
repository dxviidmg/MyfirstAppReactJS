import React from 'react';
import "./navbar.css";
import {Link, NavLink} from 'react-router-dom' 
export const NavbarDisplay = (props) => {
	return(
	<div>
		<nav class="nav-bar">
			<Link to="/">Inicio</Link>
			<NavLink to="/perfil">Perfiles</NavLink>			
		</nav>
	</div>
		);
}