import { Accordion, Title } from './index';
import { useGlobalContext } from '../context/AppContext';

const Card = () => {
	const { questions } = useGlobalContext();
	return (
		<div className='grid grid-col-1 place-item-center p-6 lg:p-10 bg-white w-[90vw] max-w-sm lg:max-w-xl rounded-lg shadow-xl hover:shadow-2xl absolute top-[90px] lg:top-[150px] left-[50%] -translate-x-1/2'>
			<Title text='FAQs' />
			{questions.map((question) => {
				return <Accordion key={question.id} {...question} />;
			})}
		</div>
	);
};

export default Card;
