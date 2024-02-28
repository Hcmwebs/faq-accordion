import { items } from '../data/Data';
import { Accordion, Title } from './index';

const Card = () => {
	return (
		<div className='grid grid-col-1 place-item-center gap-y-5 p-6 bg-white w-full max-w-[327px] lg:max-w-[600px] rounded-lg shadow-xl hover:shadow-2xl absolute top-[90px] lg:top-[150px] left-[50%] -translate-x-1/2'>
			<Title text='FAQs' />
			{items.map((item) => {
				return <Accordion key={item.id} {...item} />;
			})}
		</div>
	);
};

export default Card;
