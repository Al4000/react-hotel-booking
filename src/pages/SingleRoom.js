import React from 'react'
import defaultBg from '../images/defaultBcg.jpeg'
import {RoomContext} from '../context'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import StyledHero from '../components/StyledHero'

class SingleRoom extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			slug: this.props.match.params.slug,
			defaultBg
		}
	}

	static contextType = RoomContext

	render() {
		const {getRoom} = this.context
		const room = getRoom(this.state.slug)

		if (!room) {
			return (
				<div className="error">
					<h3>No such room could be found...</h3>
					<Link to='/rooms' className="btn-primary">Back to rooms</Link>
				</div>
			)
		}

		const {name, description, capacity, size, price, extras, breakfast, pets, images} = room
		const [mainImg, ...defaultImg] = images

		return (
			<>
				<StyledHero img={mainImg || this.state.defaultBg}>
					<Banner title={`${name} room`}>
						<Link to='/rooms' className="btn-primary">
							Back to rooms
						</Link>
					</Banner>
				</StyledHero>
				<section className="single-room">
					<div className="single-room-images">
						{defaultImg.map((image, index) => {
							return <img key={index} src={image} alt={name} />
						})}
					</div>
					<div className="single-room-info">
						<article className="desc">
							<h3>details</h3>
							<p>{description}</p>
						</article>
						<article className="info">
							<h3>info</h3>
							<h6>price : ${price}</h6>
							<h6>size : {size} SQFT</h6>
							<h6>Max Capacity : {capacity > 1 ? `${capacity} people` : `${capacity} person`}</h6>
							<h6>Pets: {pets ? "pets allowed" : "no pets allowed"}</h6>
							<h6>{breakfast && "free breakfast included"}</h6>
						</article>
					</div>
				</section>
				<section className="room-extras">
					<h6>extras</h6>
					<ul className="extras">
						{extras.map((item, index) => {
							return <li key={index}>- {item}</li>
						})}
					</ul>
				</section>
			</>
		)
	}
}

export default SingleRoom
