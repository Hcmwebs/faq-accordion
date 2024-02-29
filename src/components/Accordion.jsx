import { useGlobalContext } from '../context/AppContext';
import { ButtonOpen, ButtonClose } from './index';

const Accordion = ({ id, question, answer }) => {
	const { activeId, toggleQuestion } = useGlobalContext();
	const isActive = id === activeId;
	return (
		<div className='grid grid-col-1 gap-y-5 lg:gap-y-6'>
			<button
				type='button'
				className='w-full px-4 py-3 bg-transparent text-black hover:text-primary border-0 flex justify-between align-center shadow-sm cursor-pointer'
				onClick={() => toggleQuestion(id)}
			>
				<span className='max-w-56 lg:max-w-md text-left text-base lg:text-lg font-semibold'>
					{question}
				</span>
				{isActive ? (
					<ButtonClose className='cursor-pointer' />
				) : (
					<ButtonOpen className='cursor-pointer' />
				)}
			</button>

			<div
				className={`grid overflow-hidden transition-all duration-700 ease-in-out ${
					isActive ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
				}`}
			>
				<p className='overflow-hidden px-4 py-3 text-left text-neutral text-base font-normal'>
					{answer}
				</p>
			</div>
		</div>
	);
};

export default Accordion;
