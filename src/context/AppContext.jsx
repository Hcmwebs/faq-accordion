import { createContext, useContext, useState } from 'react';

const AppContext = createContext();
const AppProvider = ({ children }) => {
	const [show, setShow] = useState(false);
	return (
		<AppContext.Provider value={{ show, setShow }}>
			{children}
		</AppContext.Provider>
	);
};

const useGlobalContext = () => useContext(AppContext);

export { AppProvider, useGlobalContext };
