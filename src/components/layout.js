import React from 'react';
import Navbar from './Navbar/Navbar.js';
import Header from './Header';
import Footer from './Footer';

import '../sass/app.scss';

const Layout = ({ children, location }) => {
	const isHome = location.pathname === '/';
	return (
		<>
			<div className="main__layout">
				<div className="main__nav">
					<Navbar />
				</div>
				{isHome ? <div className="main__header"><Header /></div> : null }
				{children}
			</div>
			<footer className="main__footer">
				<Footer />
			</footer>
		</>
	)
}

export default Layout;