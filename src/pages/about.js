import React from 'react';
import Layout from '../components/Layout';
import Overline from '../components/Overline';
import PageHeader from '../components/PageHeader';

import Logo from '../images/xalamisco-x-black.svg';
import arrow from '../images/arrow.svg';
import Cta from '../components/Cta';

const Capabilities = ({ title }) => {
	return (
		<>
			<li className="list__item">
				<img src={arrow} alt="test" className="icon__arrow" /><p className="the__caption">{title}</p>
			</li>
		</>
	)
}

const About = ({ location }) => {
	return (
		<Layout location={location} >
			<PageHeader pageTitle="Making impactful experiences for people and brands" overline="about" />
			<section className="the__section">
				<div className="main__about">
					<div className="main__container">
						<div className="main__wrapper">
							<div className="the__column">
								<p className="the__body1">
									We are a small team of creative designers and developers working with ambitious individuals, startups, and organizations to produce accessible and tailor-made digital solutions with exceptional experiences.
								</p>
							</div>
							<div className="the__column">
								<img src={Logo} className="img__svg" alt="xalamis-logo"/> 
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="the__section">
				<div className="main__container">
					<div className="main__capabilities">
					<Overline title="capabilities" />
					<div className="main__wrapper">
						<div className="the__column">
							<h4 className="the__headline">Digital Design</h4>
							<ul className="the__list __listItem">
								<Capabilities title ="Interface design" />
								<Capabilities title ="User Experience Strategy" />
								<Capabilities title ="Responsive Web Design" />
								<Capabilities title ="Web Design Strategy" />
								<Capabilities title ="Wireframe & Prototype" />
							</ul>
						</div>
						<div className="the__column">
							<h4 className="the__headline">Development</h4>
							<ul className="the__list __listItem">
								<Capabilities title ="Front-end Development" />
								<Capabilities title ="Back-End Development" />
								<Capabilities title ="single page application" />
								<Capabilities title ="cms implementation" />
								<Capabilities title ="Custom Web Application" />
							</ul>
						</div>
					</div>
					</div>
				</div>
			</section>

			<Cta />
		</Layout>
	)
}

export default About;