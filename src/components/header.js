import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import style from '../sass/app.scss'

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
				<h1 className="brand__logo">{data.site.siteMetadata.logo}</h1>
				<ul className="nav__list">
					<li className="nav__item"><a href="https://github.com/calamis" target="_blank">Github</a></li>
					<li className="nav__item"><a href="https://twitter.com/cnalamis" target="_blank">Twitter</a></li>
				</ul>
			</div>
			<div className="main__hero">
				<h1 className="brand__logo">{data.site.siteMetadata.logo}</h1>
				<h2 className="the__title">{data.site.siteMetadata.company}.</h2>
				<p className="the__desc">{data.site.siteMetadata.heroDesc}</p>
			</div>
		</div>
	) 
}

export default Header