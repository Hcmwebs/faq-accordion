import { useGlobalContext } from '../context/AppContext';
import { ButtonOpen, ButtonClose } from './index';

const Question = ({ question }) => {
	const { toggleShow, show } = useGlobalContext();
	return (
		<>
			<header className='flex justify-between items-center gap-x-6 font-bold'>
				<h2>{question}</h2>
				<button onClick={toggleShow} className='btn-primary'>
					{show ? <ButtonClose /> : <ButtonOpen />}
				</button>
			</header>
		</>
	);
};

export default Question;
