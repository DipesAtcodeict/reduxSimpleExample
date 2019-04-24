import React from 'react';
import Form from './components/first';
import Second from './components/second';
import './app.css';

import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <div className="first">
          <Form />
        </div>
        <div>
          <Second />
        </div>
      </div>
    </Provider>
  );
}

export default App;
