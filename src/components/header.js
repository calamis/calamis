import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Overline from './Overline';

const Header = () => {
	
	const data = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					logo,
					company,
					author,
					siteUrl,
					heroTitle,
					description
				}
			}
		}
	`);

	return (
		<div className="main__container">
			<div className="main__hero">
				<Overline title="intro" />
				<h1 className="the__headline">{data.site.siteMetadata.heroTitle}</h1>
				<p className="the__body1">{data.site.siteMetadata.description}</p>
			</div>
		</div>
	) 
}

export default Header