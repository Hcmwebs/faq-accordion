import { Answer, Question } from './index';

const Item = () => {
	return (
		<div className='grid grid-col-1 place-items-center gap-y-4 px-6 text-justify'>
			<Question />
			<Answer />
		</div>
	);
};

export default Item;
