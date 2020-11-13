import React from 'react';

const Button = ({ buttonClick }) => {
	return (
		// return buttons for each of the follow swapi categories
		<div>
			<button className='pa3 ma2' id='films' onClick={ buttonClick }>
				Films
			</button>
			<button className='pa3 ma2' id='people' onClick={ buttonClick }>
				People
			</button>
			<button className='pa3 ma2' id='planets' onClick={ buttonClick }>
				Planets
			</button>
			<button className='pa3 ma2' id='species' onClick={ buttonClick }>
				Species
			</button>
			<button className='pa3 ma2' id='starships' onClick={ buttonClick }>
				Starships
			</button>
			<button className='pa3 ma2' id='vehicles' onClick={ buttonClick }>
				Vehicles
			</button>
		</div>
	);
}

export default Button;