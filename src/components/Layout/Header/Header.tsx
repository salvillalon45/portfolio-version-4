import React from 'react';
import { Link, navigate } from 'gatsby';

function Header() {
	return (
		<header className='flex justify-between'>
			<p className='font-merriweather'>Salvador Villalon Jr</p>

			<nav className='nav-bar'>
				<ul className='flex list-none gap-4 font-poppins'>
					<li>Home</li>
					<li>About</li>
					<li>Projects</li>
					<li>Experience</li>
				</ul>
			</nav>
		</header>
	);
}

export default Header;
