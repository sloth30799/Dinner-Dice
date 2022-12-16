import React from "react";
import Box from "./components/Box";
import Header from "./components/Header";

const App = () => {
	const [parameters, setParameters] = React.useState({
		choice: "",
		dishType: "",
		cuisineType: "",
	});

	const [recipesData, setRecipesData] = React.useState([]);

	function handleChange(event) {
		const { name, value } = event.target;
		setParameters((prevParams) => {
			return {
				...prevParams,
				[name]: value,
			};
		});
	}

	async function handleSubmit(event) {
		event.preventDefault();

		const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${parameters.choice.toLowerCase()}&app_id=81b95d0f&app_key=3fd705bb327ba38b2ae5aff23bf13c78${
			parameters.cuisineType ? `&cuisineType=${parameters.cuisineType}` : ""
		}${
			parameters.dishType ? `&dishType=${parameters.dishType}` : ""
		}&imageSize=THUMBNAIL&random=true&imageSize=THUMBNAIL`;

		const res = await fetch(url);
		const data = await res.json();
		setRecipesData(data.hits);
	}

	const boxes = recipesData
		.map((recipe, index) => {
			if (index < 6) {
				return (
					<Box
						data={recipe}
						key={index}
					/>
				);
			}
		})

	return (
		<div>
			<div className='bg-info'>
				<Header
					parameters={parameters}
					handleChange={handleChange}
					handleSubmit={handleSubmit}
				/>
			</div>
			<div className='boxes'>{boxes}</div>
		</div>
	);
};

export default App;
