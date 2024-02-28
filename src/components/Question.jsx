import React from 'react';
import Button from './Button';

const Question = () => {
	return (
		<>
			<header className='flex gap-x-8'>
				<h2>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi
					facere ab nobis placeat dolores voluptatum blanditiis dolor.
					Architecto, pariatur eligendi.
				</h2>
				<Button onClick={onClick} />
			</header>
		</>
	);
};

export default Question;
