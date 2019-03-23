import React, { Component } from 'react'

import { PostConsumer } from '../../../context';
import ForumThread from '../Forum/ForumThread';


export default class ForumSubjects extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="card my-3">
          <div className="card-header text-white bg-info">
            <h5>Deportes</h5>
          </div>
            <div className="card-body p-0">
          <PostConsumer>
            {(value) => {
                             const { posts } = value;
                             return posts.map(post => {
                               return <ForumThread key={post.id} post={post} />
                             })
            }}
          </PostConsumer>

          </div>
        </div>
      </React.Fragment>
    );
  }
}
