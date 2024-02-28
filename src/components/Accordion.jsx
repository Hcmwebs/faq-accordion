import { useGlobalContext } from '../context/AppContext';
import { ButtonOpen, ButtonClose } from './index';

const Accordion = ({ question, answer }) => {
	const { show, setShow } = useGlobalContext();
	return (
		<div className='py-3'>
			<button
				className='w-full px-4 py-3 bg-transparent text-black border-0 flex justify-between shadow-sm'
				onClick={() => setShow(!show)}
			>
				<span className='max-w-[200px] text-left'>{question}</span>
				{show ? <ButtonClose /> : <ButtonOpen />}
			</button>
			<div
				className={`grid overflow-hidden transition-all duration-700 ease-in-out ${
					show
						? 'grid-rows-[1fr] opacity-100 block visible'
						: 'grid-rows-[0fr] opacity-0 hidden invisible '
				}`}
			>
				<p className='overflow-hidden py-3 px-4 text-left'>{answer}</p>
			</div>
		</div>
	);
};

export default Accordion;
