import React, {Component} from 'react';
import Image from "./image";
import Header from "./Header";
import Actions from "./Actions";
import Caption from "./Caption";
import Comments from "./Comments";


export default class Post extends Component {
  render() {
    const {post} = this.props

    return (
      <div className="border rounder border-gray-300 col-start-1 ">
        <Header username={post.username} profileSrc={post.profileSrc}/>
        <Image src={post.src} caption={post.caption}/>
        <Actions likes={post.likes}/>
        <Caption username={post.username} caption={post.caption}/>
        <Comments comments={post.comments}/>
      </div>
    );
  }
}

