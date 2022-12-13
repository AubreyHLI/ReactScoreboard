import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import './scss/styles.scss';
// import './scss/styles.css';
import App from './components/App';
import { ScoreboardContextProvider } from './components/Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <ScoreboardContextProvider>
              <App />
            </ScoreboardContextProvider>);

