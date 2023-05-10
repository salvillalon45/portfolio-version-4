import React from 'react';
import { Link, navigate } from 'gatsby';

function Header() {
	return (
		<header className='flex justify-between'>
			<p className='font-libre font-semibold text-xl'>
				Salvador Villalon Jr
			</p>

			<nav className='nav-bar'>
				<ul className='flex list-none gap-4 font-poppins'>
					<li>
						<Link to='/'>Home</Link>
					</li>
					<li>
						<Link to='/about/'>About</Link>
					</li>
					<li>Projects</li>
					<li>
						<Link to='/experience/'>Experience</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Header;
