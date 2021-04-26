// This is a boilerplate index.js for MELD applications.
// The intent is that all application-specific logic can be pushed into the <App ...>
// component, where it is available for testing using Mocha, etc.
//
// It sets up a Redux store provider for the `meld-clients-core` functions used,
// providing the `reducers` instance defined by `meld-clients-core`.
//
// It assumes a `public/index.html` that defines an empty element with Id `root`,
// into which the App is rendered.
//

import React  from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import ReduxPromise from 'redux-promise';

import { reducers } from 'meld-clients-core/lib/reducers';

import ReduxApp from './ReduxApp';

const createStoreWithMiddleware = applyMiddleware(thunk, ReduxPromise)(createStore);

ReactDOM.render( 
  <div>
    <React.StrictMode>
      <ReduxApp />
    </React.StrictMode>
  </div>
  , document.getElementById('root') );


/*
ReactDOM.render( 
  <div>
    <React.StrictMode>
      <Provider store={createStoreWithMiddleware(reducers)} >
        <App />
      </Provider>
    </React.StrictMode>
  </div>
  , document.getElementById('root') );
*/

