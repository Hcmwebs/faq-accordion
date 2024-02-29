import { useGlobalContext } from '../context/AppContext';
import { SingleQuestion } from './index';

const Accordion = () => {
	const { questions } = useGlobalContext();
	return (
		<section>
			{questions.map((question) => {
				return <SingleQuestion key={question.id} {...question} />;
			})}
		</section>
	);
};

export default Accordion;
