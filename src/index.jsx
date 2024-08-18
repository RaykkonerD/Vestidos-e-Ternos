import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {AuthProvider} from './contexts/auth';

ReactDOM.createRoot(document.getElementById("root")).render(
	<AuthProvider>
    <App />
	</AuthProvider>
);