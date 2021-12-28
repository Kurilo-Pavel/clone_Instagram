import React, {Component} from 'react';
import Post from "./Post";
import img from '../img/photo_2021-12-20_20-47-01.jpg'
import profileImg from '../img/павел.jpg'

export  default class App extends Component {
  render() {
    const post = {
      src: img,
      caption: "cat on piano",
      username: 'Pavel',
      profileSrc: profileImg,
      likes: 11,
      comments:[
        {text:'Very nice cat', username: 'mom'},
        {text:'I like black cat', username: 'friend'},
        {text:'I like black cat', username: 'friend'},
      ]
    }
    return (
      <div className="grid grid-cols-3 max-auto max-w-screen-md">
        <Post post={post}/>
      </div>
    );
  }
}

