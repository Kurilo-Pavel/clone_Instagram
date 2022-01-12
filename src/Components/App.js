import React, {Component} from 'react';
import Post from "./Post";
import img from '../img/песик.jpg'
import profileImg from '../img/павел.jpg'

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: {username: 'Pavel'},
      post: {
        src: img,
        caption: "My dog",
        username: 'Pavel',
        profileSrc: profileImg,
        likes: 11,
        comments: [
          {text: 'Very nice dog', username: 'mom'},
          {text: 'I like cat', username: 'friend'},
          {text: 'The dog is happy', username: 'hater'},
          {text: 'Very nice dog', username: 'mom'},
          {text: 'I like dog', username: 'friend'},
          {text: 'I hate dog', username: 'hater'},
          {text: 'Very nice dog', username: 'mom'},
          {text: 'The dog is happy', username: 'friend'},
          {text: 'I like dog', username: 'hater'},
        ],
      },
    };
  }

  handleAddComment = (text) => {
    const {post} = this.state

    this.setState({
      post: {
        ...post,
        comments: [...post.comments, {text, username: 'pavel'}],
      },
    });
  };

  render() {
    const {post, currentUser} = this.state;

    return (
      <div className="grid grid-cols-3 mx-auto max-w-screen-md">
        <Post
          post={post}
          onAddComment={this.handleAddComment}
          currentUser={currentUser}
        />
      </div>
    );
  }
}


