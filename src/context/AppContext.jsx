import { createContext, useContext, useState } from 'react';

const AppContext = createContext();
const AppProvider = ({ children }) => {
	const [show, setShow] = useState(false);
	const toggleShow = () => {
		setShow(!show);
	};
	return (
		<AppContext.Provider value={{ show, toggleShow }}>
			{children}
		</AppContext.Provider>
	);
};

const useGlobalContext = () => useContext(AppContext);

export { AppProvider, useGlobalContext };
