import React, { Component } from 'react';
import { Provider } from 'react-redux';

// COMPONENT IMPORTS
import Posts from './components/Posts';
import PostForm from './components/PostForm';

import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className='App'>
          <header className='App-header'>
            <PostForm />
            <hr />
            <Posts />
          </header>
        </div>
      </Provider>
    );
  }
}

export default App;
