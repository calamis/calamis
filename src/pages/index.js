import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'

const indexPage = () => {
	return (
		<Layout>
			<Helmet>
	      <meta charSet="utf-8" />
	      <title> xalamis. | A Brand Strategy Design and Web Development Studio.</title>
	      <meta name="description" content="We are a brand strategy design and Web development studio." />
	      <link rel="canonical" href="http://mysite.com/example" />
	    </Helmet>
		</Layout>
	)
}	

export default indexPage