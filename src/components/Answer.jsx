import { useGlobalContext } from '../context/AppContext';

const Answer = ({ answer }) => {
	const { show } = useGlobalContext();
	return (
		<>
			<p className={`text-justify italic ${!show ? 'hidden' : null}`}>
				{answer}
			</p>
		</>
	);
};

export default Answer;
