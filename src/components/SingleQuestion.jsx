import { useGlobalContext } from '../context/AppContext';
import { ButtonClose, ButtonOpen } from './index';

const SingleQuestion = ({ id, question, answer }) => {
	const { activeId, toggleQuestion } = useGlobalContext();
	const isActive = activeId === id;
	return (
		<div className=' grid gap-y-6 py-5 lg:py-6 shadow-sm'>
			<div
				className='w-full gap-x-4 text-black hover:text-primary border-0 flex justify-between align-center cursor-pointer'
				onClick={() => toggleQuestion(id)}
			>
				<h2 className='max-w-56 lg:max-w-md text-left text-base lg:text-lg font-semibold'>
					{question}
				</h2>
				<button
					className='bg-transparent border-0 outline-none'
					onClick={() => toggleQuestion(id)}
				>
					{isActive ? (
						<ButtonClose className='cursor-pointer' />
					) : (
						<ButtonOpen className='cursor-pointer' />
					)}
				</button>
			</div>

			<p
				className={`grid grid-col-1 text-left text-neutral text-base overflow-hidden transition-all duration-700 ease-in-out ${
					isActive ? 'grid-rows-[1fr]' : ' grid-rows-[0fr]'
				}`}
			>
				<span className='overflow-hidden'>{answer}</span>
			</p>
		</div>
	);
};

export default SingleQuestion;
