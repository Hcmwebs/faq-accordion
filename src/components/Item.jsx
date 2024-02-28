import { Answer, Question } from './index';

const Item = ({ question, answer }) => {
	return (
		<div className='grid grid-col-1 place-items-center pb-6 gap-y-6 text-justify border-b-[1px] border-gray-300 transition ease-in-out duration-700'>
			<Question question={question} />
			<Answer answer={answer} />
		</div>
	);
};

export default Item;
