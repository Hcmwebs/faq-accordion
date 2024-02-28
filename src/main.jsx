import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { AppProvider } from './context/AppContext.jsx';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
	<StrictMode>
		<AppProvider>
			<App />
		</AppProvider>
	</StrictMode>
);
