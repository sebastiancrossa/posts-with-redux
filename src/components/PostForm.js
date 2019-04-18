import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPost } from '../actions/postActions';

class PostForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: ''
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  // Allows us to update the state values as the input text changes
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const post = {
      title: this.state.title,
      body: this.state.body
    };

    // Calls the create post redux action here
    this.props.createPost(post);
  }

  render() {
    return (
      <div>
        <h1>Add post</h1>

        <form onSubmit={this.onSubmit}>
          <div>
            <label htmlFor=''>Title: </label>
            <input
              type='text'
              name='title'
              onChange={this.onChange}
              value={this.state.title}
            />
          </div>

          <br />

          <div>
            <label htmlFor=''>Body: </label>
            <textarea
              name='body'
              onChange={this.onChange}
              value={this.state.body}
            />
          </div>

          <br />

          <button type='submit'>Create</button>
        </form>
      </div>
    );
  }
}

PostForm.propTypes = {
  createPost: PropTypes.func.isRequired
};

export default connect(
  null,
  { createPost }
)(PostForm);
