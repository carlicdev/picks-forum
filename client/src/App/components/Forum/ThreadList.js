import React, { Component } from 'react'

import { PostConsumer } from '../../../context';
import ForumThread from '../Forum/ForumThread';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import Banner from '../Banner/Banner';


export default class ThreadList extends Component {
  render() {
    return (
      <React.Fragment>
          <div className="container">
          <Breadcrumb />
          <Banner />
            <div className="card my-3">
                <div className="card-header text-white bg-info">
                <PostConsumer>
                    {(value) => {
                    const { posts } = value;
                   return( <h5>{posts[0].topSubject}</h5>
                    );
                    }}
                </PostConsumer>
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
          </div>
      </React.Fragment>
    );
  }
}
