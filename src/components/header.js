import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

const Header = () => {

	const data = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					logo,
					company,
					author,
					siteUrl,
					heroDesc,
					description
				}
			}
		}
	`);

	return (
		<div className="main__header">
			<div className="main__nav">
				<h2 className="the__title">{data.site.siteMetadata.company}.</h2>
				<ul className="nav__list">
					<li className="nav__item"><a href="mailto:xtianalamis@gmail.com" rel="noopener noreferrer" target="_blank">Contact</a></li>
				</ul>
			</div>
			<div className="main__hero">
				<h1 className="brand__logo">{data.site.siteMetadata.logo}</h1>
				<p className="the__subTitle">{data.site.siteMetadata.heroDesc}</p>
				<p className="the__desc">{data.site.siteMetadata.description}</p>
			</div>
		</div>
	) 
}

export default Header