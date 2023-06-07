import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './containers/App';

// React Slick Css Files
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const root = createRoot(document.getElementById('root'));
root.render(<App />);
