import React from 'react';
import Overline from './Overline';
// import { graphql, useStaticQuery } from 'gatsby';

const PageHeader = ({ pageTitle, pageDescription, overline }) => {
	
	// const data = useStaticQuery(graphql`
	// 	query {
	// 		site {
	// 			siteMetadata {
	// 				logo,
	// 				company,
	// 				author,
	// 				siteUrl,
	// 				heroTitle,
	// 				description
	// 			}
	// 		}
	// 	}
	// `);

	return (
		<div className="main__container">
			<div className="page__header">
				<Overline title={overline} />
        <h1 className="the__headline">{pageTitle}</h1>
				<p className="the__body1">{pageDescription}</p>
			</div>
		</div>
	) 
}

export default PageHeader