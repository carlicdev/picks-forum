import React, { Component } from 'react'

import { PostConsumer } from '../../../context';
import ForumThread from '../Forum/ForumThread';

const myFunc = (arr1, arr2) => {
    return arr1.map(i => {
      let a = arr2.find((x) => x.subject === i);
      return a;
    });
};

export default class ForumSection extends Component {
  render() {
    const { category } = this.props;
    return (
      <React.Fragment>
         <div className="card my-3">
            <div className="card-header text-white bg-info">
              <h5>{category}</h5>
            </div>
              <div className="card-body p-0">
            <PostConsumer>
              {(value) => {
                const { threads, subjects, posts} = value;
                let myPosts = myFunc(subjects, posts);

                return subjects.map(sub => {
                  return posts.map(post => {
                     if(post.subject === sub && post.category === category) {
                      return <ForumThread key={post._id} post={post} />
                    } else {
                      return null;
                    }
                  }) 
                })
                
              }}
            </PostConsumer>

            </div>
        </div>
      </React.Fragment>
    );
  }
}
