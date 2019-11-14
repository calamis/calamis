import React from 'react'
import { Link } from 'gatsby'

const Footer = () => {
	return (
		<div className="main__footer">
			<h2 className="the__title">Contact</h2>
			<p className="footer__copyright">
				Want to reach out? Contact me by <a className="the__link" href="mailto:xtianalamis@gmail.com">Email</a>, <a className="the__link" href="https://twitter.com/cnalamis" target="_blank">Twitter</a>
			</p>
		</div>
	)
}

export default Footer