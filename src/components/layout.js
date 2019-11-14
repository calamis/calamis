import React from 'react'

import Header from '../components/header'
import Footer from '../components/footer'

import '../sass/app.scss'

const Layout = (props) => {
	return (
		<div className="main__layout">
			<div className="main__header">
				<Header />
			</div>
			<div className="main__content">
				{props.children}
			</div>
			<div className="main__footer">
				<Footer />
			</div>
		</div>
	)
}

export default Layout