import React from 'react';
import Card from './Card';

const CardList = ({ info }) => {
	return (
		<div>
			{/* map through category info array, return card component for each entry  */}
			{info.map((data, i) => {
					const categories = Object.entries(data);
					return(
						<Card
							key={i}
							main={categories[0][1]}
							cat1={categories[1][0]}
							name1={categories[1][1]}
							cat2={categories[2][0]}
							name2={categories[2][1]}
							cat3={categories[3][0]}
							name3={categories[3][1]}
							cat4={categories[4][0]}
							name4={categories[4][1]}
						/>
					);
				})
			}
		</div>
	);
}

export default CardList;