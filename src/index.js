import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {StateProvider} from "./StateProvider";
import reducer, {initialState} from "./reducer";

// state provider is like the object, where you can access it from anywhere in the app, you can get any data from it, anywhere in the app

ReactDOM.render(
  <React.StrictMode>
      {/* state provider injects props to the children, this means to the app, and lower components */}
      {/* reducer means, we go and use the reducer function with all the methods inside like ADD_TO_BASKET, REMOVE_FROM_BASKET*/}
      {/* if any of these two cases is not met, so we are going to use the default one, which is going to just return state*/}
      {/* return the state, which is the same as it went to the reducer and the start, nothing have been changed */}
      <StateProvider initialState={initialState} reducer={reducer}>
          <App />
      </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
