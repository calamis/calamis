import React from 'react'
import Layout from '../components/Layout'
import PageHeader from '../components/PageHeader'

const blogPage = ({ location }) => {
	return (
		<Layout location={location} >
			<PageHeader pageTitle="hero blog title" pageDescription="this is a page description from blog" overline="news" />
			<div className="main__container">
				<div className="main__blog">
					<h1>Blog</h1>
					<p>Show blogs here</p>
				</div>
			</div>
		</Layout>
	)
}

export default blogPage