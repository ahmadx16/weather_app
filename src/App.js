import React from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import Navbar from './components/Navbar/Navbar'
import Dashboard from './components/Dashboard/Dashboard'
import { weatherDataReducer } from './reducers'

import "./styles/globalStyles.scss"

const store = createStore(
  weatherDataReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

function App() {

  return (
    <Provider store={store}>
      <Navbar />
      <Dashboard />
    </Provider>
  );
}

export default App;
