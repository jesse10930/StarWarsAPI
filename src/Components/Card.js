import React from 'react';

const Card = ({ main, cat1, name1, cat2, name2, cat3, name3, cat4, name4 }) => {
	return (
		<div className='tc bg-light-gray dib w-25 br3 pa3 ma2 grow bw2 shadow-5'>
			<h1>{main}</h1>
			<p>{cat1}: {name1}</p>
			<p>{cat2}: {name2}</p>
			<p>{cat3}: {name3}</p>
			<p>{cat4}: {name4}</p>
		</div>
	);
}

export default Card;