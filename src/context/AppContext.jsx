import { createContext, useContext, useState } from 'react';
import { items } from '../data/Data';

const AppContext = createContext();
const AppProvider = ({ children }) => {
	const [questions, setQuestions] = useState(items);
	const [activeId, setActiveId] = useState(null);

	const toggleQuestion = (id) => {
		const newActiveId = id === activeId ? null : id;
		setActiveId(newActiveId);
	};
	return (
		<AppContext.Provider value={{ questions, toggleQuestion, activeId }}>
			{children}
		</AppContext.Provider>
	);
};

const useGlobalContext = () => useContext(AppContext);

export { AppProvider, useGlobalContext };
