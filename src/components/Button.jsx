import iconMinus from '../assets/icon-minus.svg';
import iconPlus from '../assets/icon-plus.svg';

const Button = ({ onClick }) => {
	return (
		<div>
			<button onClick={toggleShow}>{show ? '-' : '+'}</button>
		</div>
	);
};

export default Button;
