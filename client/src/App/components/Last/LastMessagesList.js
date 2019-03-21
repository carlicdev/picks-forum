import React, { Component } from 'react'
import { PostConsumer } from '../../../context';
import LastMessage from '../Last/LastMessage';



export default class LastMessagesList extends Component {
  render() {
    return (
      <div className="container p-1">
        <div className="card">
          <div className="card-header text-white bg-info">
            <h5>Ultimos Comentarios</h5>
          </div>
          <div className="card-body pt-4 pb-0">
            <PostConsumer>
              {(value) => {
                const lastPosts = value.posts.splice(0,3);
                return lastPosts.map(post => {
                  return <LastMessage key={post.id} post={post} />
                });
              }}
            </PostConsumer>
          </div>
        </div>
      </div>
    )
  }
}
