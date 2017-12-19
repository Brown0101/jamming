import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// My added imports
import App from 'Components/App/App';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
