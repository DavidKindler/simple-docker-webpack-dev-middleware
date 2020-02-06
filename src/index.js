import 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom'
import Greeting from './greeting';

// Needed for Hot Module Replacement
if (typeof (module.hot) !== 'undefined') {
  module.hot.accept() // eslint-disable-line no-undef  
}

ReactDOM.render(<Greeting name='zzzzz' />, document.getElementById('root'));