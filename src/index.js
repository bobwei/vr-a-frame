import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/Main';

require('./styles/App.scss');

ReactDOM.render(<App />, document.getElementById('app'));
