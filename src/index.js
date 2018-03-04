import React from 'react';
//import ReactDom from 'react-dom';
import { render } from 'react-dom';
import App from './components/App';
import './index.css';

// Sans cela, un message d'erreur apparaît
// ReactDom.render(
render(
	<App />,
	document.getElementById('root')
);