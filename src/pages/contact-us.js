import React from 'react'
import Form from '../components/Form'
import Layout from '../components/Layout'
import PageHeader from '../components/PageHeader'

const contactus = ({ location }) => {
	return (
		<Layout location={location} >
			<PageHeader pageTitle="Let's get to the next level together" pageDescription="Enter your details & we'll be in touch to discuss your project" overline="contact us" />
			<div className="main__container">
        <Form />
			</div>
		</Layout>
	)
}

export default contactus;