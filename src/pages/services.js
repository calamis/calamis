import React from 'react';
import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';
import Cta from '../components/Cta';

import arrow from '../images/arrow.svg';
import uiuxImg from '../images/female-designer-reviewing-wireframes.jpg';
import digitalDesign from '../images/designer-picking-colors-for-website.jpg';
import development from '../images/developer-coding.jpg';

const data = [
	{
		title: "UI/UX",
		description: "We provide meaningful and intuitive user experiences in every digital products we create,  end user is always at the center of all the work we do. We work tirelessly to deliver stunning experiences for maximum results.",
		serviceItem: [
			{ title: "Research & Discovery" },
			{ title: "User Journey / User Flow" },
			{ title: "Information Architecture" },
			{ title: "Wireframe & Prototyping" },
		],
		image: { url: uiuxImg }
	},
	{
		title: "Digital Design",
		description: "Any Agency can make things look good. We do more, by designing with users in mind, We simplified the design process to make every customers access content on all kinds of devices.",
		serviceItem: [
			{ title: "User experience design" },
			{ title: "User interface design" },
			{ title: "User interaction design" },
			{ title: "Visual Design" },
			{ title: "Product Design" },
		],
		image: { url: digitalDesign }
	},
	{
		title: "Development",
		description: "Working with industry-leading open source technologies to power systems and websites, our experienced development team are experts in modern technologies to write custom solutions.",
		serviceItem: [
			{ title: "WordPress Development" },
			{ title: "Front-end Development" },
			{ title: "Back-end Development" },
			{ title: "eCommerce Development" },
		],
		image: { url: development }
	}
];

const Process = ({ title, description }) => {
	return (
		<>
			<div className="the__column">
				<h3 className="the__headline">{title}</h3>
				<p>{description}</p>
			</div>
		</>
	)
}

const ListItem = ({ params }) => {
	return (
		<>
			{params.map((list, i) => (
				<li className="list__item" key={list.title}>
					<img src={arrow} alt="" />
					<p className="the__caption">{list.title}</p>
				</li>
			))}
		</>
	)
}

const Service = ({ data }) => {
	return (		
		<>
			{
				data.map((service, i) => (
					<section className="the__section" key={service.title}>
						<div className="main__container">
							<div className="main__service">
								<div className="main__wrapper">
									<div className="the__column">
										<h4 className="the__headline">{service.title}</h4>
										<p className="the__body2">{service.description}</p>
										<ul className="the__list __listItem">
											<ListItem params={service.serviceItem} />
										</ul>
									</div>
									<div className="the__column">
										<img src={service.image.url} alt={service.title} />
									</div>
								</div>
							</div>
						</div>
					</section>
				))
			}
		</>
	)
}

const Services = ({ location }) => {
  return (
    <Layout location={location} >
			<PageHeader pageTitle="What We Do" pageDescription="Whatever the project size or scope we always bring our creativity to the next-level,  
			Our Approach will stay the same. Discover, Design, and Deliver results that will last." overline="services" />
		
			<section className="the__section">
				<div className="main__container">
					<div className="main__process">
						<div className="main__wrapper">
							<Process title="Discover" description="We sit down and figure out what you need for your website, Get to know your business and customers for us to have some insights and work with you to refine your ideas and present a solutions which will help achieve your goals.
								"/>
							<Process title="Design" description="We design user-centered experiences, crafting solutions based on your customer needs, removing unnecessary things and focus on what’s important, delivering unique and simple digital experiences that impossible to ignore.
								"/>
							<Process title="deliver" description="In the delivery phase, product launch isn’t the end of the road, we compile user insights and behavior to understand what works and what doesn’t. Everything we create is with scale and future in mind, a continuous iteration improvement after launch. 
								"/>
						</div>
					</div>
				</div>
			</section>

			<Service data={data}/>

			<Cta />
		</Layout>
  )
}

export default Services;