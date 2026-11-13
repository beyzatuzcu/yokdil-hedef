import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.jsx';
import {initializeNativeLinks} from './nativeLinks.js';
import './styles.css';

initializeNativeLinks();
createRoot(document.getElementById('root')).render(<React.StrictMode><App/></React.StrictMode>);
