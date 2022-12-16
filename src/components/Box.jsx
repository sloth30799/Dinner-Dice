import React from "react";

const Box = (props) => {
	const recipe = props.data.recipe
  const ingredientLines = recipe.ingredientLines.map(ingredient => {
     return (
      <li class="list-group-item">
        <input class="form-check-input me-1" type="checkbox" value="" id="firstCheckbox" />
        <label class="form-check-label" for="firstCheckbox">{ingredient}</label>
      </li>
     )
  })
	return (
		<figure className='figure'>
			<img
				src={recipe.image}
				alt=''
				className='figure-img img-fluid rounded'
			/>
			<figcaption className='figure-caption text-end'>
				{recipe.label}
			</figcaption>
      <ul className="list-group">
        {ingredientLines}
      </ul>
		</figure>
	);
};

export default Box;
