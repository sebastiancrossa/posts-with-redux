import React, { Component } from 'react';
import { connect } from 'react-redux'; // connects the components to our store
import { fetchPosts } from '../actions/postActions';

class Posts extends Component {
  componentDidMount() {
    this.props.fetchPosts(); // calls fetchPosts since they are placed as props
  }

  render() {
    const postItems = this.props.posts.map(post => (
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ));

    return (
      <div>
        <h1>Posts</h1>
        {postItems}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts.items // posts is what we set our reducer to
});

export default connect(
  mapStateToProps,
  { fetchPosts }
)(Posts);
