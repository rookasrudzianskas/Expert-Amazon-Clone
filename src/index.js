import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {StateProvider} from "./components/StateProvider";
import {initialState} from "./reducer";

// state provider is like the object, where you can access it from anywhere in the app, you can get any data from it, anywhere in the app

ReactDOM.render(
  <React.StrictMode>
      {/* state provider injects props to the children, this means to the app, and lower components */}
      <StateProvider initialState={initialState} reducer={}>
          <App />
      </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
