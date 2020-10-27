import React from 'react'
import Title from './Title'
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/all'

class Services extends React.Component {
	state = {
		services: [
			{
				icon: <FaCocktail/>,
				title: 'Free cocktails',
				info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, quos.'
			},
			{
				icon: <FaHiking/>,
				title: 'Endless Hiking',
				info: 'Lorem ipsum dolor sit amet. Quidem, quos.'
			},
			{
				icon: <FaShuttleVan/>,
				title: 'Free shuttle',
				info: 'Lorem ipsum dolor sit amet.'
			},
			{
				icon: <FaBeer/>,
				title: 'Strongest Beer',
				info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
			}
		]
	}

	render() {
		return (
			<section className="services">
				<Title title="Services"/>
				<div className="services-center">
					{
						this.state.services.map((service, index) => {
							return (
								<article key={index} className="service">
									<span>{service.icon}</span>
									<h6>{service.title}</h6>
									<p>{service.info}</p>
								</article>
							)
						})
					}
				</div>
			</section>
		)
	}
}

export default Services
