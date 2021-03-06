import React, {useContext} from 'react'
import {RoomContext} from '../context'
import Title from './Title'

const getUnique = (items, value) => {
	return [...new Set(items.map(item => item[value]))]
}

function RoomFilter({rooms}) {
	const context = useContext(RoomContext)
	const {handleChange, type, capacity, price, maxPrice, minPrice, minSize, maxSize, breakfast, pets} = context

	let types = getUnique(rooms, 'type')
	types = ['all', ...types]
	types = types.map((item, index) => {
		return <option value={item} key={index}>{item}</option>
	})

	let people = getUnique(rooms, 'capacity')
	people = people.map((item, index) => {
		return <option key={index} value={item}>{item}</option>
	})

	return (
		<section className="filter-container">
			<Title title="search rooms" />
			<form className="filter-form">
				<div className="form-group">
					<label htmlFor="type">Room type</label>
					<select
						name="type"
						id="type"
						value={type}
						className="form-control"
						onChange={handleChange}
					>
						{types}
					</select>
				</div>

				<div className="form-group">
					<label htmlFor="capacity">Guests</label>
					<select
						name="capacity"
						id="capacity"
						value={capacity}
						className="form-control"
						onChange={handleChange}
					>
						{people}
					</select>
				</div>

				<div className="form-group">
					<label htmlFor="price">Room price ${price}</label>
					<input
						type="range"
						name="price"
						id="price"
						value={price}
						className="form-control"
						min={minPrice}
						max={maxPrice}
						onChange={handleChange}
					/>
				</div>

				<div className="form-group">
					<label htmlFor="size">Room size</label>
					<div className="size-inputs">
						<input
							type="number"
							name="minSize"
							id="minSize"
							value={minSize}
							className="size-input"
							onChange={handleChange}
						/>
						<input
							type="number"
							name="maxSize"
							id="maxSize"
							value={maxSize}
							className="size-input"
							onChange={handleChange}
						/>
					</div>
				</div>

				<div className="form-group">
					<div className="single-extra">
						<input type="checkbox" name="breakfast" id="breakfast" checked={breakfast} onChange={handleChange} />
						<label htmlFor="breakfast">breakfast</label>
					</div>
					<div className="single-extra">
						<input type="checkbox" name="pets" id="pets" checked={pets} onChange={handleChange} />
						<label htmlFor="pets">pets</label>
					</div>
				</div>
			</form>
		</section>
	)
}

export default RoomFilter
