import React from "react";

const Header = (props) => {
	return (
		<div className="header">
				<h1>Fill out and Throw the Dice!!</h1>
				<form onSubmit={props.handleSubmit}>
					<input
						type='text'
						name='choice'
						value={props.parameters.choice}
						onChange={props.handleChange}
						placeholder="Main Ingredient Eg. chicken"
					/>
					<select
						name='dishType'
						value={props.parameters.dishType}
						onChange={props.handleChange}
					>
						<option value="">Choose One</option>
						<option value="Main course">Main course</option>
						<option value="Side dish">Side dish</option>
						<option value="Soup">Soup</option>
						<option value="Salad">Salad</option>
						<option value="Desserts">Desserts</option>
						<option value="Sweets">Sweets</option>
						<option value="Bread">Bread</option>
					</select>
					<select
						name='cuisineType'
						value={props.parameters.cuisineType}
						onChange={props.handleChange}
					>
						<option value="">Choose One</option>
						<option value="American">American</option>
						<option value="Asian">Asian</option>
						<option value="British">British</option>
						<option value="Chinese">Chinese</option>
						<option value="French">French</option>
						<option value="Indian">Indian</option>
						<option value="Italian">Italian</option>
						<option value="Japanese">Japanese</option>
					</select>
					<button className="btn btn-warning">Dice</button>
				</form>
		</div>
	);
};

export default Header;


