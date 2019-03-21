import React, { Component } from 'react'

import { PostConsumer } from '../../../context';
import ForumTopSubjects from '../Forum/ForumTopSubjects';


export default class ForumSection extends Component {
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
                  const {lastPosts, posts } = value;
                  return lastPosts.map(post => {
                    const subjectPosts = posts.filter(singlePost => singlePost.topSubject === post.topSubject);
                    return <ForumTopSubjects key={post.id} post={post} subjectPosts={subjectPosts} />
                  })
                }}
              </PostConsumer>
            </div>
          </div>
      </React.Fragment>
    );
  }
}
