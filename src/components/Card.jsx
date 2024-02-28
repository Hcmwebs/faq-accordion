import { useState } from 'react';
import { Title } from './index';

const Card = () => {
	const [show, setShow] = useState(false);

	const toggleShow = () => {
		setShow(!show);
	};
	return (
		<div className='grid grid-col-1 place-item-center gap-y-6 p-6 bg-white w-full max-w-[327px] lg:max-w-[600px] rounded-lg shadow-xl hover:shadow-2xl absolute top-[90px] lg:top-[150px] left-[50%] -translate-x-1/2'>
			<Title text='FAQs' />

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
