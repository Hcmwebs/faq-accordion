import React, { useState } from 'react';

const Card = () => {
	const [show, setShow] = useState(false);

	const toggleShow = () => {
		setShow(!show);
	};
	return (
		<div className='grid grid-col-1 bg-white mx-auto w-full max-w-sm lg:max-w-[600px]'>
			<h1 className='text-4xl'>Card goes here</h1>

			<div className='grid grid-col-1 place-items-center gap-y-4 px-6 text-justify'>
				<header className='flex gap-x-8'>
					<h2>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi
						facere ab nobis placeat dolores voluptatum blanditiis dolor.
						Architecto, pariatur eligendi.
					</h2>
					<button onClick={toggleShow}>{show ? '-' : '+'}</button>
				</header>

				<p className={`text-justify italic pr-10 ${!show ? 'hidden' : null}`}>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad corrupti,
					eius eligendi placeat fugit nulla possimus dolorum natus iusto
					doloribus ea doloremque quidem minima quasi quae error laborum. At,
					repudiandae!
				</p>
			</div>
		</div>
	);
};

export default Card;
