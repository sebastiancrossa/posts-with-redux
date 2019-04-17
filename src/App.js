import React, { Component } from 'react';

// COMPONENT IMPORTS
import Posts from './components/Posts';
import PostForm from './components/PostForm';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <PostForm />
          <hr />
          <Posts />
        </header>
      </div>
    );
  }
}

export default App;
