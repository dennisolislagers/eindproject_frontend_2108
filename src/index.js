import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,} from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AuthenticatedContextProvider from "./context/AuthenticatedContext";

ReactDOM.render(
  <React.StrictMode>
      <Router>
          <AuthenticatedContextProvider>
                <App />
          </AuthenticatedContextProvider>

      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
