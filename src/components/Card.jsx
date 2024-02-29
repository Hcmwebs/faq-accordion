import { Accordion, Title } from './index';

const Card = () => {
	return (
		<section className='grid grid-col-1 place-item-center gap-y-6 lg:gap-y-8 p-6 lg:p-10 bg-white w-[90vw] max-w-[327px] lg:max-w-[600px] rounded-lg lg:rounded-2xl shadow-xl hover:shadow-2xl absolute top-[90px] lg:top-[150px] left-[50%] -translate-x-1/2'>
			<Title text='FAQs' />
			<Accordion />
		</section>
	);
};

export default Card;
