import { Answer, Question } from './index';

const Item = () => {
	return (
		<div className='grid grid-col-1 place-items-center pb-6 gap-y-6 text-justify border-b-[1px] border-gray-300 transition ease-in-out duration-700'>
			<Question text='standard dummy text ever since the 1500s?' />
			<Answer
				answer='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad corrupti,
				eius eligendi placeat fugit nulla possimus dolorum natus iusto doloribus
				ea doloremque quidem minima quasi quae error laborum. At, repudiandae!'
			/>
		</div>
	);
};

export default Item;
