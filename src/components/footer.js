import React from 'react';
import { Link } from 'gatsby';

import Logo from '../images/xalamisco-x-white.svg';

const Footer = () => {
	return (
		<>
			<div className="main__container">
				<div className="the__column">
					<h2 className="the__headline">
						<img src={Logo} alt="xalamis-co" className="xalamis__logo" />
					</h2>
					<p className="the__body2">We build impactful experience through UI / UX, Design, and Development for people and brands.</p>
					<p className="the__body2">3834 Makati, Philippines</p>
				</div>
				<div className="the__column">
					<ul className="the__list">
						<li className="list__item">
							<Link to="/" className="the__link">
								<div className="block__reveal">
									<div className="reveal__item">
										Home
									</div>
								</div>
							</Link>
							</li>
						<li className="list__item">
							<Link to="/about" className="the__link">
								<div className="block__reveal">
									<div className="reveal__item">
										About
									</div>
								</div>
							</Link>
							</li>
						<li className="list__item">
							<Link to="/services" className="the__link">
								<div className="block__reveal">
									<div className="reveal__item">
										Services
									</div>
								</div>
							</Link>
							</li>
						<li className="list__item">
							<Link to="/contact-us" className="the__link">
								<div className="block__reveal">
									<div className="reveal__item">
										Contact
									</div>
								</div>
							</Link>
							</li>
					</ul>
				</div>
				<div className="the__column">
					<ul className="the__list">
						<li className="list__item">
							<a href="https://www.facebook.com/xalamisco" target="_blank" rel="noreferrer" className="the__link">
								<div className="block__reveal">
									<div className="reveal__item">
										Facebook
									</div>
								</div>
							</a>
							</li>
						<li className="list__item">
							<a href="https://www.instagram.com/xalamisco/" target="_blank" rel="noreferrer"  className="the__link">
								<div className="block__reveal">
									<div className="reveal__item">
										Instagram
									</div>
								</div>
							</a>
							</li>
						<li className="list__item">
							<a href="https://www.linkedin.com/company/xalamis" target="_blank" rel="noreferrer"  className="the__link">
								<div className="block__reveal">
									<div className="reveal__item">
										LinkedIn
									</div>
								</div>
							</a>
						</li>
					</ul>
				</div>
			</div>

			<div className="footer__note">
				<div className="main__container">
					<div className="the__column">
						<h2 className="the__logo">xalamis.</h2>
						<p className="footer__copyright">© xalamis 2020 | All Rights Reserved</p>
					</div>
				</div>
			</div>
		</>
	)
}

export default Footer