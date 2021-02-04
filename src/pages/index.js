import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import Overline from '../components/Overline';
import ButtonIcon from '../components/ButtonIcon';

import balboph from '../images/balboph.jpeg';
import devgroup from '../images/group-of-developers-in-a-table.jpeg';
import xalamisco from '../images/xalamis-logo.png'
import Cta from '../components/Cta';
import SEO from '../components/Seo';

const home = ({ location }) =>  {
	return (
		<Layout location={location} >
			<SEO 
				 title="Xalamis | A Brand Strategy Design and Web Development Studio"
				 description="We are a brand strategy design and Web development studio."
				 image={xalamisco}
				 pathname="https://www.xalamis.co"
			/>
			<section className="the__section">
				<div className="main__container">
					<div className="main__about">
						<Overline title="about us"/>
						<div className="main__wrapper">
							<div className="the__column">
									<h3 className="the__headline">
										A brand strategy design and development studio crafting extraordinary digital experiences for the people that matter.
									</h3>
									<p className="the__body1">
										We help businesses grow, launch products, and succeed in the digital space through strategic thinking and creative vision, making us the ideal partner for fast-moving companies.
									</p>
									<ButtonIcon title="our studio" btnLink="/about" />
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="the__section">
				<div className="main__container">
					<div className="main__projects">
						<Overline title="projects"/>
						<div className="main__wrapper">
							<div className="the__column">
								<p className="the__body1">
									Explore some of our latest projects
								</p>
							</div>
						</div>

						<div className="main__wrapper">
							<div className="the__column __projects">
							<div className="card">
								<a href="https://balbo.com.ph/" target="_blank" rel="noreferrer" className="the__link">
									<div className="card__header">
										<img src={balboph} className="card__img" alt="balbo Philippines" />
									</div>
									<div className="card__body">
										<h4 className="the__headline">Balbo PH - Versatile, Sustainable Balance Board</h4>
										<span className="the__tag">Design, Branding, Development</span>
									</div>
								</a>
							</div>
							<div className="card">
								<a href="https://manilastartup.com/" target="_blank" rel="noreferrer" className="the__link">
									<div className="card__header">
										<img src={devgroup} className="card__img" alt="group of developers in a table" />
									</div>
									<div className="card__body">
										<h4 className="the__headline">Manila Startup</h4>
										<span className="the__tag">Design, Branding, Development</span>
									</div>
								</a>
							</div>
							</div>
						</div>
					</div>
				</div>
			</section>


			<section className="the__section">
			<div className="main__container__fluid">
				<div className="main__services">
					<div className="main__container">
						<p className="the__overline">Services</p>
					</div>
					<div className="main__wrapper">
						<div className="services__list">
							<div className="services__wrapper">
								<span>
									<Link to="/" className="the__link">Branding. </Link>
									<Link to="/" className="the__link">Back-End Development. </Link>
									<Link to="/" className="the__link">Web Design. </Link>
									<Link to="/" className="the__link">UI. UX. </Link>
									<Link to="/" className="the__link">Single Page App. </Link>									
									<Link to="/" className="the__link">WordPress. </Link>
									<Link to="/" className="the__link">eCommerce. </Link>
									<Link to="/" className="the__link">UI. UX. </Link>
									<Link to="/" className="the__link">Branding. </Link>
									<Link to="/" className="the__link">Front-End Development. </Link>
									<Link to="/" className="the__link">eCommerce. </Link>
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

			<Cta />

		</Layout>
	)
}	

export default home;