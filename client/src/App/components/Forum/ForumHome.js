import React, { Component } from 'react'

import { PostConsumer } from '../../../context';
import ForumSection from '../Forum/ForumSection';


export default class ForumHome extends Component {
  render() {
    return (
      <React.Fragment>
          <PostConsumer>

          {(value) => {
              const { categories } = value;
              return categories.map(category => {
                  return <ForumSection key={category.indexOf} category={category} />
              });
            }}
          </PostConsumer>
          
      </React.Fragment>
    );
  }
}
