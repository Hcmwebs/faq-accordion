import { useGlobalContext } from '../context/AppContext';
import { ButtonOpen, ButtonClose } from './index';

const Question = () => {
	const { toggleShow, show } = useGlobalContext();
	return (
		<>
			<header className='flex gap-x-8'>
				<h2>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi
					facere ab nobis placeat dolores voluptatum blanditiis dolor.
					Architecto, pariatur eligendi.
				</h2>
				<button onClick={toggleShow} className='btn-primary'>
					{show ? <ButtonClose /> : <ButtonOpen />}
				</button>
			</header>
		</>
	);
};

export default Question;
