import { useGlobalContext } from '../context/AppContext';
import { ButtonOpen, ButtonClose } from './index';

const Accordion = ({ id, question, answer }) => {
	const { activeId, toggleQuestion } = useGlobalContext();
	const isActive = id === activeId;
	return (
		<div className='py-3'>
			<button
				type='button'
				className='w-full px-4 py-3 bg-transparent text-black border-0 flex justify-between shadow-sm cursor-pointer'
				onClick={() => toggleQuestion(id)}
			>
				<span className='max-w-52 lg:max-w-sm text-left'>{question}</span>
				{isActive ? (
					<ButtonClose className='cursor-pointer' />
				) : (
					<ButtonOpen className='cursor-pointer' />
				)}
			</button>
			{isActive && (
				<div
					className={`grid overflow-hidden transition-all duration-700 ease-in-out ${
						isActive
							? 'grid-rows-[1fr] opacity-100'
							: 'grid-rows-[0fr] opacity-0'
					}`}
				>
					<p className='overflow-hidden py-3 px-4 text-left'>{answer}</p>
				</div>
			)}
		</div>
	);
};

export default Accordion;
